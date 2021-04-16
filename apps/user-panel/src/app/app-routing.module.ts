import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'user-panel', pathMatch: 'full' },
  {
    path: 'user-panel',
    canActivate: [],
    loadChildren: () =>
      import('../pages/user-panel/user-panel.module').then(
        (m) => m.UserPanelModule
      ),
  },
  { path: '**', redirectTo: 'user-panel' },
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      initialNavigation: 'enabled',
    }),
  ],
  providers: [],
  exports: [RouterModule],
})
export class AppRoutingModule {}
