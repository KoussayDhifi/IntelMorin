import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { MatieresComponent } from './matieres/matieres.component';
import { ElevesComponent } from './eleves/eleves.component';
import { EnseignantsComponent } from './enseignants/enseignants.component';
import { ConsultEmploiComponent } from './consult-emploi/consult-emploi.component';
import { CreateEmploiComponent } from './create-emploi/create-emploi.component';


const routes: Routes = [
  {path:'', title:'Acceuil',component:AcceuilComponent},
  {path:'matieres', title:'Matieres',component:MatieresComponent} , 
  {path: 'eleves', title:'Eleves',component:ElevesComponent } , 
  {path: 'enseignants', title:'Enseignants',component:EnseignantsComponent},
  {path:'emploi',children:[
    {
      path:'consulter',
      component:ConsultEmploiComponent
    },
    {
      path:'ajouter',
      component:CreateEmploiComponent
    }
  ]},
  {path:'emp',redirectTo:'/emploi/consulter',pathMatch:'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }