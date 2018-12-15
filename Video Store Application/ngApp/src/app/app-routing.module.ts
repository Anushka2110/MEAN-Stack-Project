import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideolistComponent } from './videolist/videolist.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { InsertComponent } from './insert/insert.component';
import { DeleteComponent } from './delete/delete.component';
import { UpdateComponent } from './update/update.component';
import { ReserveComponent } from './reserve/reserve.component';
import { CustomerComponent } from './customer/customer.component';
import { MockVideoComponent } from './mock-video/mock-video.component';
import { VideoCenterComponent } from './video-center/video-center.component';
import { AuthGuard } from './auth.guard';
import { ShellComponent }from './shell/shell.component'

const routes: Routes = [
  {path: '', redirectTo:'/mock', pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'videolist', component: VideolistComponent},
  {path:'login', component: LoginComponent},
  {path:'insert', component: InsertComponent},
  {path:'delete', component: DeleteComponent},
  {path:'customer', component: CustomerComponent},
  {path:'update', component: UpdateComponent},
  {path:'reserve', component: ReserveComponent},
  {path:'mock', component: MockVideoComponent},
  {path:'videocenter', component: VideoCenterComponent},
  {path:'shell', component: ShellComponent ,canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
