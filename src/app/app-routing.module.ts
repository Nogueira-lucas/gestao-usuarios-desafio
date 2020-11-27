import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserHomeComponent } from './pages/user-home/user-home.component';
import { UserViewComponent } from './pages/user-view/user-view.component';
import { UserCreateComponent } from './pages/user-create/user-create.component';

const routes: Routes = [
  {
    path: '',
    component: UserHomeComponent
  },
  {
    path: 'view',
    component: UserViewComponent
  },
  {
    path: 'create',
    component: UserCreateComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
