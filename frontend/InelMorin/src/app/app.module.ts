import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { BarComponent } from './bar/bar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MatieresComponent } from './matieres/matieres.component';
import { EnseignantsComponent } from './enseignants/enseignants.component';
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
import { ConsultGroupComponent } from './consult-group/consult-group.component';
import { CreateGroupComponent } from './create-group/create-group.component';
import { ProfSlotComponent } from './consult-group/prof-slot/prof-slot.component';





@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    BarComponent,
    NavBarComponent,
    MatieresComponent,
    EnseignantsComponent,


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
      ConsultGroupComponent,
      CreateGroupComponent,
      ProfSlotComponent,
      
      



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
