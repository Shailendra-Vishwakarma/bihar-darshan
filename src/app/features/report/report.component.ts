import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { PlaceService } from '../../services/place.service';
import { ReportService } from '../../services/report.service';
import { TouristPlace } from '../../models/tourist-place.model';

const MAX_IMAGES = 5;

@Component({
  selector: 'app-report',
  standalone: false,
  templateUrl: './report.component.html',
  styleUrl: './report.component.scss'
})
export class ReportComponent {
  @ViewChild('reportPreview') reportPreview!: ElementRef;

  step = 1;
  form: FormGroup;
  submitted = false;
  places: TouristPlace[] = [];
  selectedPlace: TouristPlace | null = null;
  uploadedImages: { base64: string; name: string }[] = [];
  maxImages = MAX_IMAGES;
  reportId = '';
  generatingPdf = false;
  emailSent = false;
  uploadError = '';
  reportSaved = false;

  constructor(private fb: FormBuilder, private placeService: PlaceService, private reportService: ReportService) {
    this.placeService.getAllPlaces().subscribe({ next: places => { this.places = places; } });
    this.reportId = 'BDR-' + Date.now().toString(36).toUpperCase();

    this.form = this.fb.group({
      fullName:     ['', [Validators.required, Validators.minLength(3)]],
      aadhaar:      ['', [Validators.required, Validators.pattern(/^\d{12}$/)]],
      phone:        ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      email:        ['', [Validators.required, Validators.email]],
      address:      ['', Validators.required],
      placeId:      ['', Validators.required],
      visitDate:    ['', Validators.required],
      visitPurpose: ['', Validators.required],
    });
  }

  get f() { return this.form.controls; }

  onPlaceChange(id: string) {
    this.placeService.getPlaceById(Number(id)).subscribe({
      next: place => { this.selectedPlace = place; },
      error: () => { this.selectedPlace = null; }
    });
  }

  onImagesUpload(event: Event) {
    this.uploadError = '';
    const input = event.target as HTMLInputElement;
    const files = Array.from(input.files ?? []);
    const remaining = MAX_IMAGES - this.uploadedImages.length;

    if (files.length > remaining) {
      this.uploadError = `You can only add ${remaining} more image(s). Maximum ${MAX_IMAGES} allowed.`;
    }

    const toProcess = files.slice(0, remaining);
    toProcess.forEach(file => {
      const reader = new FileReader();
      reader.onload = () => {
        this.uploadedImages.push({ base64: reader.result as string, name: file.name });
      };
      reader.readAsDataURL(file);
    });

    // reset so same files can be re-selected if removed
    input.value = '';
  }

  removeImage(index: number) {
    this.uploadedImages.splice(index, 1);
    this.uploadError = '';
  }

  nextStep() {
    this.submitted = true;
    if (this.form.invalid || this.uploadedImages.length === 0) return;
    this.submitted = false;
    this.step = 2;
  }

  prevStep() { this.step = 1; }

  today(): string {
    return new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'long', year: 'numeric' });
  }

  async downloadPdf() {
    this.generatingPdf = true;
    const el = this.reportPreview.nativeElement;
    const canvas = await html2canvas(el, { scale: 2, useCORS: true, backgroundColor: '#ffffff' });
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfW = pdf.internal.pageSize.getWidth();
    const pdfH = (canvas.height * pdfW) / canvas.width;
    pdf.addImage(imgData, 'PNG', 0, 0, pdfW, pdfH);
    pdf.save(`Bihar-Visit-Report-${this.reportId}.pdf`);

    const pdfBase64 = pdf.output('datauristring');
    this.saveReport(pdfBase64);
    this.generatingPdf = false;
  }

  private saveReport(pdfBase64: string) {
    if (this.reportSaved) return;
    const v = this.form.value;
    this.reportService.save({
      reportId:     this.reportId,
      fullName:     v.fullName,
      aadhaar:      v.aadhaar,
      phone:        v.phone,
      email:        v.email,
      address:      v.address,
      placeId:      Number(v.placeId),
      visitDate:    v.visitDate,
      visitPurpose: v.visitPurpose,
      pdfBase64,
      images:       this.uploadedImages.map(i => i.base64),
    }).subscribe({ next: () => { this.reportSaved = true; } });
  }

  sendEmail() {
    if (!this.reportSaved) {
      const pdfBase64 = '';
      this.saveReport(pdfBase64);
    }
    const v = this.form.value;
    const place = this.selectedPlace;
    const subject = encodeURIComponent(`Bihar Tourism Visit Report — ${this.reportId}`);
    const body = encodeURIComponent(
`Bihar Tourism Visit Verification Report
Report ID: ${this.reportId}
Generated On: ${this.today()}

VISITOR DETAILS
---------------
Name       : ${v.fullName}
Aadhaar No : ${v.aadhaar}
Phone      : ${v.phone}
Email      : ${v.email}
Address    : ${v.address}

VISIT DETAILS
-------------
Place      : ${place?.name}
District   : ${place?.district}, Bihar
Category   : ${place?.category}
Visit Date : ${new Date(v.visitDate).toLocaleDateString('en-IN', { day:'2-digit', month:'long', year:'numeric' })}
Purpose    : ${v.visitPurpose}
Photos     : ${this.uploadedImages.length} image(s) attached in PDF

Please find the signed PDF report attached.
This report is submitted for verification under Bihar Government Tourism Incentive Scheme.`
    );
    window.open(`mailto:tourism.commissioner@bihar.gov.in?subject=${subject}&body=${body}`, '_blank');
    this.emailSent = true;
  }

  reset() {
    this.step = 1;
    this.form.reset();
    this.uploadedImages = [];
    this.uploadError = '';
    this.emailSent = false;
    this.reportSaved = false;
    this.reportId = 'BDR-' + Date.now().toString(36).toUpperCase();
  }
}
