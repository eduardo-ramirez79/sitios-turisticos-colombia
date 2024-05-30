import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilterComponent } from './ui/components/filter/filter.component';
import { ListComponent } from './ui/components/list/list.component';
import { CardComponent } from './ui/components/card/card.component';
import { permissionsGuard } from './core/infraestructure/guards/permissions.guard';

const routes: Routes = [
  {path: 'filter', component: FilterComponent},
  {path: 'list', component: ListComponent},
  {path: 'card', component: CardComponent, canActivate: [permissionsGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
