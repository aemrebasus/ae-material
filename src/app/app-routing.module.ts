import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GreetingModule } from './greeting/greeting.module';

/**
 * Library
 */
import { AeDocComponent, AeDocModule } from 'projects/ae-material/src/public-api';
import { AeTypingComponent } from 'projects/ae-material/src/lib/ae-typing/ae-typing.component';


const routes: Routes = [
  { path: '', component: AeDocComponent, },
  { path: 'typing', component: AeTypingComponent },
  { path: 'doc', component: AeDocComponent },
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
