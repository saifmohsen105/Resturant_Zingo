import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IdetailsSuchi } from '../../../app/shared/interfaces/sushi/IdetailsSuchi';
import { Icategories } from '../../../app/shared/interfaces/sushi/icategories';

@Injectable({
  providedIn: 'root'
})
export class SushiService {
  httpClient = inject(HttpClient);


  getAllSushies(): Observable<any> {
    return this.httpClient.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
  }
  getDetailsSuschi(id: string): Observable<any> {
    return this.httpClient.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  }
  getAllCaterories(): Observable<any> {
    return this.httpClient.get("https://www.themealdb.com/api/json/v1/1/categories.php");
  }
  getMenuSpecialCategore(categore: string = 'beef'): Observable<any> {
    return this.httpClient.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categore}`);
  }
}
