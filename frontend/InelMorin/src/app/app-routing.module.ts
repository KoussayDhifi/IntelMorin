import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { MatieresComponent } from './matieres/matieres.component';

import { ConsultEmploiComponent } from './consult-emploi/consult-emploi.component';
import { CreateEmploiComponent } from './create-emploi/create-emploi.component';
import { SallesComponent } from './salles/salles.component';
import { AdminComponent } from './admin/admin.component';
import { CreateElevesComponent } from './create-eleves/create-eleves.component';
import { ConsultElevesComponent } from './consult-eleves/consult-eleves.component';

import { StudentPaymentComponent } from './student-payment/student-payment.component';


import { TutorPaymentComponent } from './tutor-payment/tutor-payment.component';

import { CreateGroupComponent } from './create-group/create-group.component';
import { ConsultGroupComponent } from './consult-group/consult-group.component';
import { ConsultEnseignantComponent } from './consult-enseignant/consult-enseignant.component';
import { CreateEnseignantComponent } from './create-enseignant/create-enseignant.component'
import { ConsultPacksComponent } from './consult-packs/consult-packs.component';
import { CreatePacksComponent } from './create-packs/create-packs.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { UnauthenticatedGuard } from './unauthenticated.guard';

const routes: Routes = [
  {path:'', title:'Acceuil',component:AcceuilComponent,canActivate:[AuthGuard]},
  {path:'matieres', title:'Matieres',component:MatieresComponent,canActivate:[AuthGuard]} ,
  {path: 'eleves',children:[
    {
      path:'consulter' ,
      component:ConsultElevesComponent
    },
    {
      path:'ajouter' ,
      component:CreateElevesComponent
    } ,
],canActivate:[AuthGuard]},
{path: 'enseignants',children:[
  {
    path:'consulter' ,
    component:ConsultEnseignantComponent
  },
  {
    path:'ajouter' ,
    component:CreateEnseignantComponent
  } ,
],canActivate:[AuthGuard]},
  {path:'emploi',children:[
    {
      path:'consulter',
      component:ConsultEmploiComponent
    },
    {
      path:'ajouter',
      component:CreateEmploiComponent
    }
  ],canActivate:[AuthGuard]},

  {
    path:'paiment',children:[
      {
      path:'eleve',
      component:StudentPaymentComponent
      },
      {
        path:'enseignant',
        component:TutorPaymentComponent
      }
    ],canActivate:[AuthGuard]
  },
  {path:'groupes',children:[
    {
      path:'consulter',
      component:ConsultGroupComponent
    },
    {
      path:'ajouter',
      component:CreateGroupComponent
    }
  ],canActivate:[AuthGuard]},
  {path:'emp',redirectTo:'/emploi/consulter',pathMatch:'full'} ,
  {path : 'salles', title: "Salles" ,component:SallesComponent, canActivate:[AuthGuard]} ,
  {path :'admin', title: "Admin" ,component:AdminComponent,canActivate:[AuthGuard]} ,
  {path:'ele',redirectTo:'/eleves/consulter',pathMatch:'full'},

  {path:'paiel',redirectTo:'/paiment/eleve'},
  {path:'paien',redirectTo:'/paiment/enseignant'},

  {path:'packs',children:[
    {
      path:'consulter',
      component:ConsultPacksComponent
    },
    {
      path:'ajouter',
      component:CreatePacksComponent
    }
  ],canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent,canActivate: [UnauthenticatedGuard]}


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
