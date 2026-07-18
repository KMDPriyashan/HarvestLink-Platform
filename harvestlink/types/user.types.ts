// types/user.types.ts
export interface UserProfile {
  uid: string;
  name: string;
  email: string;
  role: 'farmer' | 'buyer' | 'ngo' | 'volunteer' | 'admin';
  phone: string;
  location: string;
  createdAt: string;
  updatedAt: string;
  isActive: boolean;
  rating: number;
  totalRatings: number;
  profileImage?: string;
  farmDetails?: {
    farmName?: string;
    farmSize?: number;
    mainCrops?: string[];
  };
  businessDetails?: {
    businessName?: string;
    businessType?: string;
  };
  ngoDetails?: {
    organizationName?: string;
    registrationNumber?: string;
  };
}

export interface AuthState {
  user: UserProfile | null;
  loading: boolean;
  error: string | null;
}