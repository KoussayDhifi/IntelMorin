import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { MatieresComponent } from './matieres/matieres.component';
import { ElevesComponent } from './eleves/eleves.component';
import { EnseignantsComponent } from './enseignants/enseignants.component';


const routes: Routes = [
  {path:'', component:AcceuilComponent},
  {path:'matieres', component:MatieresComponent} , 
  {path: 'eleves' , component:ElevesComponent } , 
  {path: 'enseignants', component:EnseignantsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
