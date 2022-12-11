import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddToListComponent } from './add-to-list/add-to-list.component';
import { ViewListComponent } from './view-list/view-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/addToList', pathMatch: 'full'},
  { path: 'addToList', component: AddToListComponent},
  { path: 'viewList', component: ViewListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
