
#### Peer Dependencies 
1. @angular/material 
2. Bootstrap 4 + 
3. validator



### Documentation 

> To access the documentation page, add the routing configuration to your application, and navigate to the route.


````
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AeDocComponent, AeDocModule } from 'ae-material';

const routes: Routes = [
  { path: 'doc', component: AeDocComponent }
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

````