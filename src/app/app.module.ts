import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubSearchComponent } from './github-search/github-search.component';
import { NavComponent } from './nav/nav.component';
import { FormComponent } from './form/form.component';
import { GithubUsersComponent } from './github-users/github-users.component';
import { GithubRepoComponent } from './github-repo/github-repo.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubSearchComponent,
    NavComponent,
    FormComponent,
    GithubUsersComponent,
    GithubRepoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
