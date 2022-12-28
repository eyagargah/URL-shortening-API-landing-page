import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-short-links',
  templateUrl: './short-links.component.html',
  styleUrls: ['./short-links.component.scss']
})
export class ShortLinksComponent {

  @Input() linkData : any;

   

  

}
