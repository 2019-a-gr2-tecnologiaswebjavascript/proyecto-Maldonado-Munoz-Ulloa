import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'nuevo-basurero', loadChildren: './nuevo-basurero/nuevo-basurero.module#NuevoBasureroPageModule' },
  { path: 'basurero', loadChildren: './basurero/basurero.module#BasureroPageModule' },
  { path: 'modal-crear-basurero', loadChildren: './modal-crear-basurero/modal-crear-basurero.module#ModalCrearBasureroPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
