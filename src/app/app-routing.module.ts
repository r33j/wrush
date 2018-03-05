import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class AppRoutingModule { }



import { MentionsLegalesComponent }      from './mentions-legales/mentions-legales.component';

const routes: Routes = [
  { path: 'mentions-legales', component: MentionsLegalesComponent }
];


