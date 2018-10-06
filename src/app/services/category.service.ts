import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../services/api.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  endpoint: string = "report_categories";
  //endpoint: string = "categories";

  constructor(
    public http: HttpClient,
    public api: ApiService
    ) {
    console.log('Hello CategoryService Service');
  }

  getCategories()
  {
    return this.api.get(this.endpoint, []);
  }
}
