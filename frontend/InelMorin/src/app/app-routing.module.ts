import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { MatieresComponent } from './matieres/matieres.component';

const routes: Routes = [
  {path:'', component:AcceuilComponent},
  {path:'matieres', component:MatieresComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
