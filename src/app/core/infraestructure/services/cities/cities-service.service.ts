import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitiesServiceService {

  urlDepartamentos = 'https://api-colombia.com/api/v1/Department';

  constructor(private http: HttpClient) { }

  departamentos(): Observable<any[]> {
    return this.http.get<any[]>(this.urlDepartamentos)
  }

  ciudades(idDepartment: number): Observable<any[]> {
    return this.http.get<any[]>(this.urlDepartamentos+`/${idDepartment}/cities`)
  }
}
