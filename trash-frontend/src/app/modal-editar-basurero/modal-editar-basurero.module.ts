import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModalEditarBasureroPage } from './modal-editar-basurero.page';

const routes: Routes = [
  {
    path: '',
    component: ModalEditarBasureroPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ModalEditarBasureroPage]
})
export class ModalEditarBasureroPageModule {}
