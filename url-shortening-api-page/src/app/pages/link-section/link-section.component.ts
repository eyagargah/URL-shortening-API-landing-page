import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-link-section',
  templateUrl: './link-section.component.html',
  styleUrls: ['./link-section.component.scss'],
})
export class LinkSectionComponent {
  linkToShorten: string = '';
  linkData: any;

  @Input() storedLinks : any = []
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

      localStorage.setItem(storedLinksToShorten,storedLink)
    });
  }

  copyText(textToCopy: any) {
    this.clipboard.copy(textToCopy);
  }

  copyLink(event: Event) {
    let elementId = event.target as HTMLElement;
    console.log(elementId.parentElement?.firstChild?.textContent);
    let textContent = elementId.parentElement?.firstChild?.textContent;
    this.copyText(textContent);
    if (elementId.classList.contains('not-active')) {
      elementId.classList.remove('not-active');
      elementId.classList.add('active');
      elementId.innerText = 'Copied!';
    } else {
      elementId.classList.add('not-active');
      elementId.classList.remove('active');
      elementId.innerText = 'Copy';
    }}

  constructor(private api: ApiService, private clipboard: Clipboard ) {
  
  }
}
