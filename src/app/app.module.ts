import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { ListComponent } from './components/list/list.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { CourseOverviewComponent } from './components/course-overview/course-overview.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    ListComponent,
    ListItemComponent,
    CourseOverviewComponent,
  ],
  imports: [BrowserModule, FontAwesomeModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
