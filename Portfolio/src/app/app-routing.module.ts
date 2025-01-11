import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProjectDetailComponent} from "./sections/project-detail/project-detail.component";
import {MainComponent} from "./sections/main/main.component";

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'projects/:id', component: ProjectDetailComponent },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
    }),
  ],  exports: [RouterModule]
})
export class AppRoutingModule { }
