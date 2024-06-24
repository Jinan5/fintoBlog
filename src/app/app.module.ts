import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { PostPreviewComponent } from './components/post-preview/post-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsListComponent,
    PostPreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
