import {Component, Input} from '@angular/core';

@Component({
  selector: 'demo-banner',
  templateUrl: './banner.component.html'
})
export class BannerComponent {

  @Input() name: string;

}
