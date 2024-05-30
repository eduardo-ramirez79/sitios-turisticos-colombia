import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CitiesServiceService } from 'src/app/core/infraestructure/services/cities/cities-service.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit{

  listDepartments: any[] = [];
  listCities: any[] = [];

  formFilter: FormGroup = new FormGroup({});

  constructor(private citiesService: CitiesServiceService,
    private formBuilder: FormBuilder
  ){}

  ngOnInit(): void {
    this.initForm();
    this.getAllDepartments();
  }

  initForm(){
    this.formFilter = this.formBuilder.group({
      departamento: [this.listDepartments, [Validators.required]],
      ciudad: ['', [Validators.required]],
      sitio: []
    })
  }

  getAllDepartments(){
    this.citiesService.departamentos().subscribe(response => {
      this.listDepartments = response;
    })
  }

  selectDepartment(event: any){
    const idDepartment = event.source.value.id;
    this.citiesService.ciudades(idDepartment).subscribe(response => {
      this.listCities = response;
    })
  }

}
