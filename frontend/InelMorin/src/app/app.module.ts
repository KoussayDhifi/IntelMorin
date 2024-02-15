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
      CreateElevesComponent


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
