import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { CreateUserprofComponent } from './create-userprof/create-userprof.component';
import { FormBuilder, FormGroup , FormControl , ReactiveFormsModule , FormsModule } from '@angular/forms';
import { MatTabsModule, MatSidenavModule,MatToolbarModule,MatIconModule, MatButtonModule   } from '@angular/material';
import { UserprofService } from './userprof.service';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    UserloginComponent,
    CreateUserprofComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatToolbarModule ,
    MatIconModule, MatButtonModule ,
    HttpClientModule,
    MatSidenavModule,
    MatTabsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
