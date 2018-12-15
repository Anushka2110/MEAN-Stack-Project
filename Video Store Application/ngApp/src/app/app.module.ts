import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { VideolistComponent } from './videolist/videolist.component';
import { CustomerComponent } from './customer/customer.component';
import { DeleteComponent } from './delete/delete.component';
import { InsertComponent } from './insert/insert.component';
import { UpdateComponent } from './update/update.component';
import { ReserveComponent } from './reserve/reserve.component';
import { MockVideoComponent } from './mock-video/mock-video.component';
import { VideoCenterComponent } from './video-center/video-center.component';
import { AuthGuard } from './auth.guard';
import { ShellComponent} from './shell/shell.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    VideolistComponent,
    CustomerComponent,
    DeleteComponent,
    InsertComponent,
    UpdateComponent,
    ReserveComponent,
    MockVideoComponent,
    VideoCenterComponent,
    ShellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
