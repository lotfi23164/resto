import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlatService {
  // Backend base URL
  // 3000: port backend
  platURL = 'http://localhost:3000';

  constructor(private httpClient:HttpClient) { }

  addPlatService(plat:any) {    
    return this.httpClient.post(`${this.platURL}/addPlat`,plat);
  }

  getPlatByIdService(id:any) {
    return this.httpClient.get<{plat:any}>(`${this.platURL}/plats/${id}`);
  }

  getAllPlatsService() {
    return this.httpClient.get<{plats:any}>(`${this.platURL}/plats`);
  }

  deletePlatService(id:any) {
    return this.httpClient.delete(`${this.platURL}/plats/${id}`);
  }

  updatePlatService(plat:any) {
    return this.httpClient.put(`${this.platURL}/plats`,plat);
  }

}
