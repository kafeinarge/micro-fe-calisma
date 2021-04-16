import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
  {
    path: 'homepage',
    canActivate: [],
    loadChildren: () =>
      import('../pages/homepage/homepage.module').then((m) => m.HomepageModule),
  },
  { path: '**', redirectTo: 'homepage' },
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'top', initialNavigation: 'enabled' }),
  ],
  providers: [],
  exports: [RouterModule],
})
export class AppRoutingModule {}
