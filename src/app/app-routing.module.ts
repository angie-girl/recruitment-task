import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackgroundComponent } from './_layout/background/background.component';

const routes: Routes = [
  { path: '', component: BackgroundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
