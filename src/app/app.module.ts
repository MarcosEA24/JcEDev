import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';

import { HttpClientModule } from '@angular/common/http';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { RegisterProComponent } from './catalog/register-pro/register-pro.component';
import { ListProComponent } from './catalog/list-pro/list-pro.component';
import { ProDetailsComponent } from './catalog/pro-details/pro-details.component';
import { CatalogComponent } from './catalog/catalog.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { ContentComponent } from './navigation/content/content.component';
import { AuthService } from './auth/auth.service';
import { OficiosComponent } from './job/oficios/oficios.component';
import { FirebaseService } from './firebase/firebase.service';
import { HerokuAddressService } from './heroku-address/heroku-address.service';

@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		SignupComponent,
		RegisterProComponent,
		ListProComponent,
		ProDetailsComponent,
		CatalogComponent,
		HomeComponent,
		HeaderComponent,
		SidenavListComponent,
		FooterComponent,
		ContentComponent,
		OficiosComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		MaterialModule,
		AppRoutingModule,
		FlexLayoutModule,
		AngularFirestoreModule,
		AngularFireDatabaseModule,
		AngularFireStorageModule,
		AngularFireModule.initializeApp(environment.firebaseConfig),
		HttpClientModule
	],
	providers: [ AuthService ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
