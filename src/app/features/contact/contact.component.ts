import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  form: FormGroup;
  submitted = false;
  success = false;

  contactInfo = [
    { icon: 'bi-geo-alt', label: 'Location', value: 'Birchand Patel Marg, Patna – 800001' },
    { icon: 'bi-envelope', label: 'Email', value: 'info@bihardarshan.in' },
    { icon: 'bi-telephone', label: 'Phone', value: '+91 0612-000-0000' },
    { icon: 'bi-clock', label: 'Office Hours', value: 'Mon – Sat, 9:00 AM – 6:00 PM' }
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name:    ['', [Validators.required, Validators.minLength(2)]],
      email:   ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) return;
    this.success = true;
    this.form.reset();
    this.submitted = false;
  }
}
