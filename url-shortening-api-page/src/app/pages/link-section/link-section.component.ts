import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';

import { browserRefresh } from '../../app.component';
@Component({
  selector: 'app-link-section',
  templateUrl: './link-section.component.html',
  styleUrls: ['./link-section.component.scss'],
})
export class LinkSectionComponent {
  linkToShorten: string = '';
  linkData: any;

  linkForm = new FormGroup({
    linkToShorten: new FormControl('', Validators.required),
  });

  onChange(event: any) {
    let textInput = String(event.target.value);
  }
  getLink() {
    return this.linkForm.get('storedLinksToShorten');
  }

  shortenLink() {
    this.api.getShortLinks(this.linkToShorten).subscribe((data) => {
      this.linkData = Object.values(data);
      let storedLink = this.linkData[1].full_share_link
      let storedLinksToShorten = this.linkToShorten ;

      localStorage.setItem(storedLink, storedLinksToShorten)
    });
  }

  constructor(private api: ApiService) {}

  ngOnInit() {
    console.log(this.linkData)
  }
}
