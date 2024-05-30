import { Component, OnInit } from '@angular/core';
import { TourguideService } from 'src/app/core/infraestructure/services/tourguide/tourguide.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{

  listSitiosTuristicos: any[] = [];
  sitioSelected: any;
  isSelected: boolean = false;

  constructor(private tourguideService: TourguideService){}

  ngOnInit(): void {
    this.getAllSitiosTuristicos();
  }

  getAllSitiosTuristicos(){
    this.tourguideService.sitiosTuristicos().subscribe(response => {
      console.log(response);
      this.listSitiosTuristicos = response;
    })
  }

  verMas(sitio: any){
    this.sitioSelected = sitio;
    this.isSelected = true;
  }

}
