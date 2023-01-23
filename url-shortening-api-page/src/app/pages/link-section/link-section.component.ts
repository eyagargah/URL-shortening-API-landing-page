import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';

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

  storedShortLinks = localStorage.getItem('storedLinks');

  linkForm = new FormGroup({
    linkToShorten: new FormControl('', Validators.required),
  });

  onChange(event: any) {
    let shortenLinkError = document.querySelector('.shorten');
    let oldLinks = localStorage.getItem('storedLinksToShorten');

    let textInput = String(event.target.value);

    if (oldLinks == textInput) {
      shortenLinkError?.classList.remove('hidden');
      shortenLinkError?.classList.add('visible');
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

  ngOnInit() {}
}
