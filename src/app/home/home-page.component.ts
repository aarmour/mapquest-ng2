import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'mq-home-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <mb-map></mb-map>
  `
})
export class HomePageComponent {

}
