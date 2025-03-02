export interface District {
  id: string;
  name: string;
  townStatus: boolean;
  regionId: string;
  regionName: string;
}

export interface County {
  id: string;
  name: string;
  code: string;
  districtId: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface Subcounty {
  id: string;
  name: string;
  code: string;
  countyId: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface Parish {
  id: string;
  name: string;
  code: string;
  subcountyId: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface Village {
  id: string;
  name: string;
  code: string;
  parishId: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface Meta {
  currentPage: number;
  lastPage: number;
  perPage: number;
  total: number;
}

export interface APIResponse<T> {
  data: T;
  meta?: Meta;
  error?: string;
} 