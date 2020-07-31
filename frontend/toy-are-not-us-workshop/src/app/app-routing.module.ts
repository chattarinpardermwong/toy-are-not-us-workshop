import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToyDetailComponent } from './toy-detail/toy-detail.component';
import { ToyListComponent } from './toy-list/toy-list.component';

const routes: Routes = [
  // {path:'', redirectTo: '/toylist',pathMatch: 'full'},

  {path:'toylist/toydetail/:id', component: ToyDetailComponent},
  {path:'toylist', component: ToyListComponent,children:[

  
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
