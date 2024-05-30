import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TourguideService {

  private sitioTuristicos = 'https://api-colombia.com/api/v1/TouristicAttraction';

  constructor(private http: HttpClient) { }

  sitiosTuristicos(): Observable<any[]> {
    return this.http.get<any[]>(this.sitioTuristicos)
  }

  sitiosTuristicosPorId(idSitioTurisitico: number): Observable<any[]> {
    return this.http.get<any[]>(this.sitioTuristicos+`/${idSitioTurisitico}`)
  }

  sitiosTuristicosPorName(idSitioTurisitico: number): Observable<any[]> {
    return this.http.get<any[]>(this.sitioTuristicos+`/name/${idSitioTurisitico}`)
  }
}
