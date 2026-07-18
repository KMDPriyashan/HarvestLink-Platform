// types/harvest.types.ts
export interface Harvest {
  id: string;
  farmerId: string;
  farmerName: string;
  cropType: string;
  cropVariant?: string;
  quantity: number;
  unit: 'kg' | 'g' | 'lbs' | 'pieces';
  price: number;
  currency: 'LKR';
  location: string;
  latitude?: number;
  longitude?: number;
  plantingDate: string;
  harvestDate?: string;
  maturityScore: number;
  maturityStatus: 'not_ready' | 'ready' | 'over_mature';
  expectedHarvestDate: string;
  images: string[];
  description?: string;
  status: 'pending' | 'approved' | 'sold' | 'unsold' | 'donated' | 'expired';
  createdAt: string;
  updatedAt: string;
  isOrganic: boolean;
  certifications?: string[];
}

export interface Order {
  id: string;
  harvestId: string;
  buyerId: string;
  farmerId: string;
  quantity: number;
  totalPrice: number;
  status: 'pending' | 'accepted' | 'rejected' | 'completed' | 'cancelled';
  orderDate: string;
  deliveryDate?: string;
  deliveryAddress: string;
  notes?: string;
}

export interface Donation {
  id: string;
  harvestId: string;
  farmerId: string;
  ngoId?: string;
  quantity: number;
  status: 'pending' | 'accepted' | 'picked_up' | 'delivered' | 'completed';
  createdAt: string;
  pickupDate?: string;
  deliveryDate?: string;
  location: string;
}