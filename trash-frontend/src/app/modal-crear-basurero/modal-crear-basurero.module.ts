import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModalCrearBasureroPage } from './modal-crear-basurero.page';

const routes: Routes = [
  {
    path: '',
    component: ModalCrearBasureroPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ModalCrearBasureroPage]
})
export class ModalCrearBasureroPageModule {}
