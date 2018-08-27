import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { 
  MatButtonModule, 
  MatCheckboxModule, 
  MatToolbarModule, 
  MatIconModule, 
  MatGridListModule, 
  MatSidenavModule, 
  MatListModule, 
  MatDialogModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { NavbarComponent } from './componet/navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MenuComponent } from './componet/menu/menu.component';
import { LoginComponent } from './componet/login/login.component';
import { HomeComponent } from './componet/pages/home/home.component';
import { BlogComponent } from './componet/blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MenuComponent,
    LoginComponent,
    HomeComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
    MatDialogModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full' 
      },
      {
        path:'home',
        component:HomeComponent
      },
      {
        path:'blog',
        component:BlogComponent
      }
    ])
  ],
  entryComponents: [
    LoginComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
