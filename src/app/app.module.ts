import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { SectionContainerComponent } from './components/section-container/section-container.component';
import { StudentItemComponent } from './components/student-item/student-item.component';
import { CourseItemComponent } from './components/course-item/course-item.component';
import { CourseOverviewComponent } from './components/course-overview/course-overview.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    SectionContainerComponent,
    StudentItemComponent,
    CourseItemComponent,
    CourseOverviewComponent,
  ],
  imports: [BrowserModule, FontAwesomeModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
