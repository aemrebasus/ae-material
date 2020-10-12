import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GreetingComponent } from './greeting/greeting.component';
import { GreetingModule } from './greeting/greeting.module';

/**
 * Library
 */
import { AeAvatarComponent, AeDocComponent, AeDocModule, AeMessageComponent } from 'projects/ae-material/src/public-api';

const routes: Routes = [
  { path: '', component: AeMessageComponent },
  { path: 'doc', component: AeDocComponent },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: 'client', loadChildren: () => import('./client/client.module').then(m => m.ClientModule) },
];

@NgModule({
  imports: [
    GreetingModule,
    AeDocModule,
    RouterModule.forRoot(routes, { useHash: true }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
