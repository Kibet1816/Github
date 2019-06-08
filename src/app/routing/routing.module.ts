import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';

import { SearchComponent } from '../search/search.component';
import { SearchDisplayComponent } from '../search-display/search-display.component';

const routes: Route[] = [
  {path: '/search', component: SearchComponent},
  {path: '/view', component: SearchDisplayComponent},
  {path: '""', redirectTo: '/search', pathMatch: 'full'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }
