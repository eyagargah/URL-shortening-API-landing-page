import { Component, Input } from '@angular/core';
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

  storedLinks : any = []
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

      this.storedLinks.push(storedLinksToShorten , storedLink)
      console.log(storedLink)
      console.log(storedLinksToShorten)
      localStorage.setItem(storedLinksToShorten,storedLink)
      
    });
  }

  constructor(private api: ApiService) {
    const keys = Object.keys(localStorage)
    for(let key in keys){
      this.storedLinks.push([keys[key] , localStorage.getItem(keys[key])])
    }
  }
}
