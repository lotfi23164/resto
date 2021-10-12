import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChefService {

  // Backend base URL
  // 3000: port backend
  chefURL = 'http://localhost:3000';

  constructor(private httpClient:HttpClient) { }

  addChefService(chef:any) {
    return this.httpClient.post(`${this.chefURL}/addChef`,chef);
  }

  getChefByIdService(id:any) {
    return this.httpClient.get<{chef:any}>(`${this.chefURL}/chefs/${id}`);
  }

  getAllChefsService() {
    return this.httpClient.get<{chefs:any}>(`${this.chefURL}/chefs`);
  }

  deleteChefService(id:any) {
    return this.httpClient.delete<{message:any}>(`${this.chefURL}/chefs/${id}`);
  }

  updateChefService(chef:any) {
    return this.httpClient.put(`${this.chefURL}/chefs`,chef);
  }

}
