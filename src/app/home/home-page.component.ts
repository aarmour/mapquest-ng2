import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'mq-home-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <router-outlet></router-outlet>
  `
})
export class HomePageComponent {

}
