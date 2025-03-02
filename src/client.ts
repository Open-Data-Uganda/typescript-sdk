import axios, { AxiosInstance } from 'axios';
import {
    APIResponse,
    County,
    District,
    Parish,
    Subcounty,
    Village,
} from './models';

export class OpenDataUGClient {
  private readonly client: AxiosInstance;
  private static readonly BASE_URL = 'https://api.opendataug.com/v1';

  constructor(apiKey: string) {
    this.client = axios.create({
      baseURL: OpenDataUGClient.BASE_URL,
      headers: {
        'x-api-key': apiKey,
        'Content-Type': 'application/json',
      },
    });
  }

  // Districts
  async getDistricts(): Promise<District[]> {
    const response = await this.client.get<APIResponse<District[]>>('/districts');
    return response.data.data;
  }

  async getDistrict(id: string): Promise<District> {
    const response = await this.client.get<APIResponse<District>>(`/districts/${id}`);
    return response.data.data;
  }

  // Counties
  async getCounties(): Promise<County[]> {
    const response = await this.client.get<APIResponse<County[]>>('/counties');
    return response.data.data;
  }

  async getCounty(id: string): Promise<County> {
    const response = await this.client.get<APIResponse<County>>(`/counties/${id}`);
    return response.data.data;
  }

  async getCountiesByDistrict(districtId: string): Promise<County[]> {
    const response = await this.client.get<APIResponse<County[]>>(`/districts/${districtId}/counties`);
    return response.data.data;
  }

  // Subcounties
  async getSubcounties(): Promise<Subcounty[]> {
    const response = await this.client.get<APIResponse<Subcounty[]>>('/subcounties');
    return response.data.data;
  }

  async getSubcounty(id: string): Promise<Subcounty> {
    const response = await this.client.get<APIResponse<Subcounty>>(`/subcounties/${id}`);
    return response.data.data;
  }

  async getSubcountiesByCounty(countyId: string): Promise<Subcounty[]> {
    const response = await this.client.get<APIResponse<Subcounty[]>>(`/counties/${countyId}/subcounties`);
    return response.data.data;
  }

  // Parishes
  async getParishes(): Promise<Parish[]> {
    const response = await this.client.get<APIResponse<Parish[]>>('/parishes');
    return response.data.data;
  }

  async getParish(id: string): Promise<Parish> {
    const response = await this.client.get<APIResponse<Parish>>(`/parishes/${id}`);
    return response.data.data;
  }

  async getParishesBySubcounty(subcountyId: string): Promise<Parish[]> {
    const response = await this.client.get<APIResponse<Parish[]>>(`/subcounties/${subcountyId}/parishes`);
    return response.data.data;
  }

  // Villages
  async getVillages(): Promise<Village[]> {
    const response = await this.client.get<APIResponse<Village[]>>('/villages');
    return response.data.data;
  }

  async getVillage(id: string): Promise<Village> {
    const response = await this.client.get<APIResponse<Village>>(`/villages/${id}`);
    return response.data.data;
  }

  async getVillagesByParish(parishId: string): Promise<Village[]> {
    const response = await this.client.get<APIResponse<Village[]>>(`/parishes/${parishId}/villages`);
    return response.data.data;
  }
} 