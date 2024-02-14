import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { MatieresComponent } from './matieres/matieres.component';
import { ElevesComponent } from './eleves/eleves.component';
import { EnseignantsComponent } from './enseignants/enseignants.component';
import { AdminComponent } from './admin/admin.component';
import { SallesComponent } from './salles/salles.component';


const routes: Routes = [
  {path:'', component:AcceuilComponent},
  {path:'matieres', component:MatieresComponent} , 
  {path: 'eleves' , component:ElevesComponent } , 
  {path: 'enseignants', component:EnseignantsComponent},
  {path: 'admin', component:AdminComponent} , 
  {path: 'salles', component:SallesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
