import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { BarComponent } from './bar/bar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MatieresComponent } from './matieres/matieres.component';
import { AdminComponent } from './admin/admin.component';
import { SallesComponent } from './salles/salles.component';
import { ConsultEmploiComponent } from './consult-emploi/consult-emploi.component';
import { CreateEmploiComponent } from './create-emploi/create-emploi.component';
import { ConsultElevesComponent } from './consult-eleves/consult-eleves.component';
import { CreateElevesComponent } from './create-eleves/create-eleves.component';


import { CreatePacksComponent } from './create-packs/create-packs.component';
import { ConsultPacksComponent } from './consult-packs/consult-packs.component';

import { ScheduleSlotComponent } from './consult-emploi/schedule-slot/schedule-slot.component';
import { StudentPaymentComponent } from './student-payment/student-payment.component';
import { StudentSlotComponent } from './student-payment/student-slot/student-slot.component';
import { ProfGridComponent } from './student-payment/student-slot/prof-grid/prof-grid.component';

import { TutorPaymentComponent } from './tutor-payment/tutor-payment.component';
import { TutorInfoComponent } from './tutor-payment/tutor-info/tutor-info.component';
import { LevelListComponent } from './tutor-payment/level-list/level-list.component';
import { GridPaymentComponent } from './tutor-payment/grid-payment/grid-payment.component';
import { ConfigProfComponent } from './tutor-payment/config-prof/config-prof.component';
import { CalcCentreComponent } from './tutor-payment/calc-centre/calc-centre.component';



import { ConsultGroupComponent } from './consult-group/consult-group.component';
import { CreateGroupComponent } from './create-group/create-group.component';
import { ProfSlotComponent } from './consult-group/prof-slot/prof-slot.component';
import { ConsultEnseignantComponent } from './consult-enseignant/consult-enseignant.component';
import { CreateEnseignantComponent } from './create-enseignant/create-enseignant.component';
import { TutorSlotComponent } from './consult-enseignant/tutor-slot/tutor-slot.component';
import { ElevesSlotComponent } from './consult-eleves/eleves-slot/eleves-slot.component';




import { ConsultGroupComponent } from './consult-group/consult-group.component';
import { CreateGroupComponent } from './create-group/create-group.component';



@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    BarComponent,
    NavBarComponent,
    MatieresComponent,

   
    ConsultGroupComponent,
    CreateGroupComponent , 
    ProfSlotComponent , 


    EnseignantsComponent,
    ConsultGroupComponent,
    CreateGroupComponent,


    AdminComponent,
    SallesComponent,

    ConsultEmploiComponent,

    CreateEmploiComponent,
      ConsultElevesComponent,
      CreateElevesComponent,

      CreatePacksComponent,
      ConsultPacksComponent,



      ScheduleSlotComponent,
      StudentPaymentComponent,
      StudentSlotComponent,
      ProfGridComponent,

      TutorPaymentComponent,
      TutorInfoComponent,
      LevelListComponent,
      GridPaymentComponent,
      ConfigProfComponent,
      CalcCentreComponent,

      ConsultEnseignantComponent,
      CreateEnseignantComponent,
      TutorSlotComponent,
      ElevesSlotComponent,
           

        


      



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
