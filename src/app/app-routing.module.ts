import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GreetingModule } from './greeting/greeting.module';

/**
 * Library
 */
import { AeDocComponent, AeDocModule } from 'projects/ae-material/src/public-api';
import { AeVideoComponent } from 'projects/ae-material/src/lib/ae-video/ae-video.component';

const routes: Routes = [
  { path: '', component: AeVideoComponent },
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
