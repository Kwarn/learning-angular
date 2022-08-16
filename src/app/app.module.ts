import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { ListComponent } from './components/list/list.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from 'src/state/app.state';
import { CoursesEffects } from 'src/state/courses/course.effects';
import { StudentComponent } from './components/student/student.component';
import { CourseComponent } from './components/course/course.component';
import { StudentEffects } from 'src/state/students/student.effects';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    ListComponent,
    ListItemComponent,
    StudentComponent,
    CourseComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([CoursesEffects, StudentEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
