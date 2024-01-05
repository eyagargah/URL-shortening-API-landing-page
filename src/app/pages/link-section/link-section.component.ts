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

  links: any = [] ;
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
    this.api.getShortLinks(this.linkToShorten).then((data) => {
      //this.linkData = Object.values(data);
      console.log(data)
      //get stored data
      this.links = JSON.parse(localStorage.getItem('links') ?? '[]')

     
      this.links.push(this.linkData[1])

      localStorage.setItem('links', JSON.stringify(this.links))
      //let storedLink = this.linkData[1].full_share_link
      //let storedLinksToShorten = this.linkToShorten ;
    });
  }

  ngOnInit() {
    this.links = JSON.parse(localStorage.getItem('links') ?? '');
  }
  constructor(private api: ApiService) {}
}
