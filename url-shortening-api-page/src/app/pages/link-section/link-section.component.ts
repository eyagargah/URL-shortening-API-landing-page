import { Component, Input } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-link-section',
  templateUrl: './link-section.component.html',
  styleUrls: ['./link-section.component.scss']
})
export class LinkSectionComponent {

  @Input() shortLink: any;
  linkData : any;
  constructor( private api: ApiService) {}

  ngOnInit() {
    this.api.getShorterLinks().subscribe((data) => {
      this.linkData = data
    })
}
}
