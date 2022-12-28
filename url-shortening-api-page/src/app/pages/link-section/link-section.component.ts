import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-link-section',
  templateUrl: './link-section.component.html',
  styleUrls: ['./link-section.component.scss'],
})
export class LinkSectionComponent {
  linkToShorten: string = '';
  linkData: any;

  shortenLink() {
    console.log('from component ' + this.linkToShorten);
    this.api.getShortLinks(this.linkToShorten).subscribe((data) => {
      this.linkData = Object.values(data);
      console.table(this.linkData);
    });
  }

  constructor(private api: ApiService) {}

  ngOnInit() {}
}
