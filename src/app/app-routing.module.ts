import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { DeleteComponent } from './delete/delete.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {path:'add',component:AddComponent},
   {path:'delete',component:DeleteComponent},
   {path:'view',component:ViewComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
