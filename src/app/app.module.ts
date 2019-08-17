import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
// ---------------------------------------------------------- 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckboxWithTreeComponent } from './checkbox-with-tree/checkbox-with-tree.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckboxWithTreeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgSelectModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
