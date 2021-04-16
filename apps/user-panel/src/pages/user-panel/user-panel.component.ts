import { Component, OnInit } from '@angular/core';
import { DemoService } from '../../services/demo.service';

@Component({
  selector: 'micro-frontend-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.scss'],
})
export class UserPanelComponent implements OnInit {
  public htmlData;
  public ENUMData;

  constructor(private demoService: DemoService) {}

  ngOnInit(): void {
    // SSR
    this.ENUMData = 'test1';

    this.demoService.get().subscribe((res: any) => {
      // SSR
      this.htmlData = res;
      // CSR
      sessionStorage.setItem('htmlDataTest', JSON.stringify(this.htmlData));
    });

    // setTimeout(() => {
    //   this.ENUMData = 'test2 - setTimeout';
    // }, 3000);
  }
}
