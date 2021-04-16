import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPanelComponent } from './user-panel.component';
import { UserPanelRoutingModule } from './user-panel-routing.module';
import { DemoService } from '../../services/demo.service';

@NgModule({
  declarations: [UserPanelComponent],
  imports: [CommonModule, UserPanelRoutingModule],
  providers: [DemoService],
})
export class UserPanelModule {}
