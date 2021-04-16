import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'micro-frontend-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  title = 'micro-frontend';

  constructor() {}

  ngOnInit(): void {}
}
