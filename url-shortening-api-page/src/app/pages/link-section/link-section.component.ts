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
  storedLinks: any = [];
  storedLinksToShorten: any = [];

  browserRefresh: boolean | undefined;
  storedShortLinks = localStorage.getItem('storedLinks');
  storedLink = localStorage.getItem('storedLinksToShorten');
  linkForm = new FormGroup({
    linkToShorten: new FormControl('', Validators.required),
  });

  onChange(event: any) {
    let textInput = String(event.target.value);
    if(!new URL(textInput)){
      
    }
  
  }
  getLink() {
    return this.linkForm.get('storedLinksToShorten');
  }

  shortenLink() {
    this.api.getShortLinks(this.linkToShorten).subscribe((data) => {
      this.linkData = Object.values(data);

      this.storedLinks = this.linkData[1];

      localStorage.setItem('storedLinks', JSON.stringify(this.storedLinks));

      this.storedLinksToShorten.push(this.linkToShorten);
      localStorage.setItem('storedLinksToShorten', this.storedLinksToShorten);
    });
  }

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.browserRefresh = browserRefresh;
    if (this.browserRefresh) {
      let input = document.querySelector('#link-input');
      input?.setAttribute('innerHTML', 'hello there');
      console.log(input);
    }
    console.log('refreshed?:', browserRefresh);
  }
}
