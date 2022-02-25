import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelpComponent } from './components/help/help.component';
import { ListComponent } from './components/list/list.component';

const routes: Routes = [
  {
    path: 'list', component: ListComponent
  },
  {
    path: 'help', component: HelpComponent
  },
  {
    path: '**', component: ListComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
