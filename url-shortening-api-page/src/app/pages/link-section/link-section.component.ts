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

  links : any = []
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

      this.links.push(this.linkData[1]);
      console.log(this.links)
      localStorage.setItem('links', JSON.stringify(this.links));

      //let storedLink = this.linkData[1].full_share_link
      //let storedLinksToShorten = this.linkToShorten ;
    });
  }

  ngOnInit(){
    console.log(this.links)
  }
  constructor(private api: ApiService) {
    this.links.push(JSON.parse(localStorage.getItem('links') ?? '{}'))

  }
}
