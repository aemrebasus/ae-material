import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AeDocModule } from 'projects/ae-material/src/lib/ae-doc/ae-doc.module';
import { GreetingComponent } from './greeting/greeting.component';
import { GreetingModule } from './greeting/greeting.module';

const routes: Routes = [
  { path: '', component: GreetingComponent },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: 'client', loadChildren: () => import('./client/client.module').then(m => m.ClientModule) },
];

@NgModule({
  imports: [
    GreetingModule,
    RouterModule.forRoot(routes, { useHash: true }),
    AeDocModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
