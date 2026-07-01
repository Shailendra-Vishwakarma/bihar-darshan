export interface TouristPlace {
  id: number;
  name: string;
  district: string;
  category: 'Historical' | 'Religious' | 'Nature' | 'Wildlife' | 'Adventure';
  description: string;
  history?: string;
  imageUrl: string;
  images?: string[];
  bestTimeToVisit: string;
  entryFee: string;
  timings: string;
  nearbyAttractions?: string[];
}
