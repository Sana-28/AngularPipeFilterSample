import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StudentPipe } from './student.pipe';
import { StudentComponent } from './student/student.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentPipe,
    StudentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
