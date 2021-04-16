import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { HomepageRoutingModule } from './homepage-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HomepageComponent],
  imports: [CommonModule, RouterModule, HomepageRoutingModule],
})
export class HomepageModule {}
