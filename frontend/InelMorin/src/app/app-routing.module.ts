import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { MatieresComponent } from './matieres/matieres.component';
import { EnseignantsComponent } from './enseignants/enseignants.component';
import { ConsultEmploiComponent } from './consult-emploi/consult-emploi.component';
import { CreateEmploiComponent } from './create-emploi/create-emploi.component';
import { SallesComponent } from './salles/salles.component';
import { AdminComponent } from './admin/admin.component';
import { CreateElevesComponent } from './create-eleves/create-eleves.component';
import { ConsultElevesComponent } from './consult-eleves/consult-eleves.component';

import { StudentPaymentComponent } from './student-payment/student-payment.component';


import { CreatePacksComponent } from './create-packs/create-packs.component';
import { ConsultPacksComponent } from './consult-packs/consult-packs.component';



const routes: Routes = [
  {path:'', title:'Acceuil',component:AcceuilComponent},
  {path:'matieres', title:'Matieres',component:MatieresComponent} ,
  {path: 'enseignants', title:'Enseignants',component:EnseignantsComponent},
  {path: 'eleves',children:[
    {
      path:'consulter' ,
      component:ConsultElevesComponent
    },
    {
      path:'ajouter' ,
      component:CreateElevesComponent
    } ,
]},
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

  {
    path:'paiment',children:[
      {
      path:'eleve',
      component:StudentPaymentComponent
      }
    ]
  },
  {path:'emp',redirectTo:'/emploi/consulter',pathMatch:'full'} , 
  {path : 'salles', title: "Salles" ,component:SallesComponent} , 
  {path :'admin', title: "Admin" ,component:AdminComponent} , 
  {path:'ele',redirectTo:'/eleves/consulter',pathMatch:'full'}, 
  {path:'pai',redirectTo:'/paiment/eleve'},
  {path:'packs',children:[
    {path:'create',component:CreatePacksComponent},
    {path:'consult',component:ConsultPacksComponent},
  ]},


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
