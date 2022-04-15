import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatDialogModule,MatDialogRef,MAT_DIALOG_DATA  } from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { ProduitsComponent } from './pages/produits/produits.component';
import { AddProduitComponent } from './pages/add-produit/add-produit.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { FormsModule } from '@angular/forms';
import { UpdateProduitComponent } from './update-produit/update-produit.component';
import { HttpClientModule} from '@angular/common/http';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { UtilisateursComponent } from './pages/utilisateurs/utilisateurs.component';
import { PieceComponent } from './pages/piece/piece.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { ListeCategorieComponent } from './pages/categorie/liste-categorie/liste-categorie.component';
import { UpdateCategorieComponent } from './pages/categorie/update-categorie/update-categorie.component';
import { AddCategorieComponent } from './pages/categorie/add-categorie/add-categorie.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProduitsComponent,
    AddProduitComponent,
    LoginComponent,
    ProfileComponent,
    UpdateProduitComponent,
    ForbiddenComponent,
    UtilisateursComponent,
    PieceComponent,
    InscriptionComponent,
    ListeCategorieComponent,
    UpdateCategorieComponent,
    AddCategorieComponent,
   
   
   
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],

  providers: [{ provide: MAT_DIALOG_DATA, useValue: {} ,}],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
