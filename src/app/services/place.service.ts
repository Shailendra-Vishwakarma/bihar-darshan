import { Injectable } from '@angular/core';
import { TouristPlace } from '../models/tourist-place.model';

@Injectable({ providedIn: 'root' })
export class PlaceService {
  private places: TouristPlace[] = [
    {
      id: 1,
      name: 'Mahabodhi Temple',
      district: 'Gaya',
      category: 'Religious',
      description: 'A UNESCO World Heritage Site, the Mahabodhi Temple marks the spot where Siddhartha Gautama attained enlightenment under the Bodhi Tree around 500 BCE.',
      history: 'Emperor Ashoka built the first temple here in the 3rd century BCE. The current structure dates back to the 5th–6th century CE and has been renovated multiple times.',
      imageUrl: 'https://images.unsplash.com/photo-1609766857405-a694abd1d7d5?w=800&q=80',
      bestTimeToVisit: 'October to March',
      entryFee: 'Free (foreigners: ₹100)',
      timings: '5:00 AM – 9:00 PM',
      nearbyAttractions: ['Bodhi Tree', 'Animesh Lochana Chaitya', 'Thai Monastery']
    },
    {
      id: 2,
      name: 'Vishnupad Temple',
      district: 'Gaya',
      category: 'Religious',
      description: 'An ancient Hindu temple dedicated to Lord Vishnu, built over a footprint believed to be of Lord Vishnu himself, on the banks of the Falgu River.',
      history: 'The current temple was built in 1787 by Queen Ahilyabai Holkar of Indore. It is a major site for the Hindu ritual of Pind Daan.',
      imageUrl: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80',
      bestTimeToVisit: 'October to March',
      entryFee: 'Free',
      timings: '5:00 AM – 9:00 PM',
      nearbyAttractions: ['Falgu River', 'Akshayavat Tree', 'Brahma Yoni Hill']
    },
    {
      id: 3,
      name: 'Nalanda Mahavihara',
      district: 'Nalanda',
      category: 'Historical',
      description: 'Ruins of the ancient Nalanda University, one of the greatest centers of learning in the ancient world, attracting scholars from across Asia.',
      history: 'Founded in the 5th century CE, Nalanda flourished for 700 years before being destroyed by Bakhtiyar Khilji in 1193 CE. It is a UNESCO World Heritage Site.',
      imageUrl: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&q=80',
      bestTimeToVisit: 'October to February',
      entryFee: '₹15 (Indians) / ₹200 (Foreigners)',
      timings: '9:00 AM – 5:00 PM (closed on Mondays)',
      nearbyAttractions: ['Nalanda Museum', 'Huen Tsang Memorial Hall', 'Rajgir']
    },
    {
      id: 4,
      name: 'Vaishali',
      district: 'Vaishali',
      category: 'Historical',
      description: 'One of the world\'s first republics and birthplace of Lord Mahavira. Rich in Buddhist and Jain heritage with Ashoka\'s pillar standing tall.',
      history: 'Vaishali was the capital of the Licchavi republic around 600 BCE. Lord Buddha delivered his last sermon here before attaining Mahaparinirvana.',
      imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
      bestTimeToVisit: 'October to March',
      entryFee: 'Free',
      timings: 'Open 24 hours',
      nearbyAttractions: ['Ashoka Pillar', 'Coronation Tank', 'Relic Stupa', 'Abhishek Pushkarni']
    },
    {
      id: 5,
      name: 'Rajgir',
      district: 'Nalanda',
      category: 'Historical',
      description: 'A scenic hill town of great religious significance for Buddhists, Jains, and Hindus, surrounded by five hills with a ropeway to the Vishwa Shanti Stupa.',
      history: 'Rajgir was the first capital of the Magadha Empire. Lord Buddha spent several years here and delivered many sermons on Griddhakuta hill.',
      imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
      bestTimeToVisit: 'October to March',
      entryFee: 'Ropeway: ₹80 per person',
      timings: 'Ropeway: 8:00 AM – 5:00 PM',
      nearbyAttractions: ['Griddhakuta Hill', 'Vishwa Shanti Stupa', 'Venuvan', 'Hot Springs', 'Nalanda']
    },
    {
      id: 6,
      name: 'Kakolat Falls',
      district: 'Nawada',
      category: 'Nature',
      description: 'A beautiful natural waterfall cascading from about 160 feet, surrounded by dense forest. A popular picnic spot, especially during monsoon season.',
      history: 'According to Hindu mythology, bathing in Kakolat Falls on Makar Sankranti frees one from a curse of being reborn as a snake.',
      imageUrl: 'https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?w=800&q=80',
      bestTimeToVisit: 'July to October (monsoon)',
      entryFee: '₹10 per person',
      timings: '8:00 AM – 6:00 PM',
      nearbyAttractions: ['Nawada District', 'Rajgir', 'Nalanda']
    },
    {
      id: 7,
      name: 'Rajgir Nature Safari',
      district: 'Nalanda',
      category: 'Nature',
      description: 'A sprawling wildlife sanctuary offering jeep safaris through dense forests, home to bears, deer, and diverse bird species in the Rajgir hills.',
      imageUrl: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80',
      bestTimeToVisit: 'October to March',
      entryFee: '₹250 per person (safari)',
      timings: '8:00 AM – 4:00 PM',
      nearbyAttractions: ['Rajgir Zoo', 'Vishwa Shanti Stupa', 'Nalanda']
    },
    {
      id: 8,
      name: 'Valmiki Tiger Reserve',
      district: 'West Champaran',
      category: 'Wildlife',
      description: 'Bihar\'s only tiger reserve, spread across 899 sq km in the Himalayan foothills, home to Royal Bengal Tigers, rhinos, elephants, and crocodiles.',
      history: 'Named after the sage Valmiki, author of Ramayana. Declared a Project Tiger reserve in 1990.',
      imageUrl: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=800&q=80',
      bestTimeToVisit: 'November to May',
      entryFee: '₹500 per person (jeep safari)',
      timings: '6:00 AM – 10:00 AM, 3:00 PM – 6:00 PM',
      nearbyAttractions: ['Gandak River', 'Triveni Ghat', 'Lauriya Nandangarh Pillar']
    },
    {
      id: 9,
      name: 'Vikramshila',
      district: 'Bhagalpur',
      category: 'Historical',
      description: 'Ruins of the ancient Vikramshila University, the second most important Buddhist educational center in India after Nalanda, on the banks of the Ganges.',
      history: 'Founded by King Dharmapala of the Pala dynasty in the 8th century CE. Flourished for about 400 years until it was destroyed in 1193 CE.',
      imageUrl: 'https://images.unsplash.com/photo-1571401835393-8c5f35328320?w=800&q=80',
      bestTimeToVisit: 'October to March',
      entryFee: '₹10 (Indians) / ₹100 (Foreigners)',
      timings: '9:00 AM – 5:00 PM',
      nearbyAttractions: ['Vikramshila Museum', 'Bhagalpur City', 'Ganges River']
    },
    {
      id: 10,
      name: 'Patna Sahib Gurudwara',
      district: 'Patna',
      category: 'Religious',
      description: 'Takht Sri Patna Sahib is one of the five Takhts of Sikhism and the birthplace of Guru Gobind Singh, the tenth Sikh Guru.',
      history: 'Guru Gobind Singh was born here in 1666. The present gurudwara was built by Maharaja Ranjit Singh in the early 19th century.',
      imageUrl: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80',
      bestTimeToVisit: 'October to March',
      entryFee: 'Free',
      timings: '4:00 AM – 10:00 PM',
      nearbyAttractions: ['Patna Museum', 'Golghar', 'Sanjay Gandhi Botanical Garden']
    },
    {
      id: 11,
      name: 'Rohtasgarh Fort',
      district: 'Rohtas',
      category: 'Historical',
      description: 'A massive fort perched on a hill in the Son River valley, offering breathtaking views and showcasing medieval Mughal-Afghan architecture.',
      history: 'Built by Sher Shah Suri in the 16th century. Contains over 83 gateways and numerous palaces inside its 45 km perimeter wall.',
      imageUrl: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80',
      bestTimeToVisit: 'October to February',
      entryFee: '₹5 per person',
      timings: '9:00 AM – 5:00 PM',
      nearbyAttractions: ['Sasaram (Sher Shah Suri Tomb)', 'Son River', 'Durgawati Reservoir']
    },
    {
      id: 12,
      name: 'Sher Shah Suri Tomb',
      district: 'Rohtas',
      category: 'Historical',
      description: 'The magnificent mausoleum of Sher Shah Suri, founder of the Sur Empire, standing in the middle of an artificial lake in Sasaram.',
      history: 'Built between 1540–1545 CE, this sandstone structure is considered the finest example of Pathan architecture in India.',
      imageUrl: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80',
      bestTimeToVisit: 'October to March',
      entryFee: '₹15 (Indians) / ₹200 (Foreigners)',
      timings: '9:00 AM – 5:00 PM',
      nearbyAttractions: ['Rohtasgarh Fort', 'Hassan Khan Suri Tomb']
    }
  ];

  getAllPlaces(): TouristPlace[] {
    return this.places;
  }

  getPlaceById(id: number): TouristPlace | undefined {
    return this.places.find(p => p.id === id);
  }

  searchPlaces(keyword: string): TouristPlace[] {
    const kw = keyword.toLowerCase().trim();
    if (!kw) return this.places;
    return this.places.filter(p =>
      p.name.toLowerCase().includes(kw) ||
      p.district.toLowerCase().includes(kw) ||
      p.category.toLowerCase().includes(kw) ||
      p.description.toLowerCase().includes(kw)
    );
  }

  getByCategory(category: string): TouristPlace[] {
    if (!category || category === 'All') return this.places;
    return this.places.filter(p => p.category === category);
  }

  getFeatured(): TouristPlace[] {
    return this.places.slice(0, 6);
  }
}
