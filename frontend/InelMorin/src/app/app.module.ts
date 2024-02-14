import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { BarComponent } from './bar/bar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MatieresComponent } from './matieres/matieres.component';
import { ElevesComponent } from './eleves/eleves.component';
import { EnseignantsComponent } from './enseignants/enseignants.component';
<<<<<<< HEAD
<<<<<<< HEAD
import { AdminComponent } from './admin/admin.component';
import { SallesComponent } from './salles/salles.component';
=======
import { ConsultEmploiComponent } from './consult-emploi/consult-emploi.component';
import { CreateEmploiComponent } from './create-emploi/create-emploi.component';
>>>>>>> 6ba20822fec39fc1715eb555b58c40e79f889300
=======
import { ConsultEmploiComponent } from './consult-emploi/consult-emploi.component';
import { CreateEmploiComponent } from './create-emploi/create-emploi.component';
>>>>>>> 6ba20822fec39fc1715eb555b58c40e79f889300

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    BarComponent,
    NavBarComponent,
    MatieresComponent,
    ElevesComponent,
    EnseignantsComponent,
<<<<<<< HEAD
<<<<<<< HEAD
    AdminComponent,
    SallesComponent
=======
    ConsultEmploiComponent,
    CreateEmploiComponent
>>>>>>> 6ba20822fec39fc1715eb555b58c40e79f889300
=======
    ConsultEmploiComponent,
    CreateEmploiComponent
>>>>>>> 6ba20822fec39fc1715eb555b58c40e79f889300
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
