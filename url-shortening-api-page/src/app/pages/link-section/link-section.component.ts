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

  linkForm = new FormGroup({
    linkToShorten: new FormControl('', Validators.required)
  });

  getLink(){
    return this.linkForm.get('linkToShorten');  
  }
  shortenLink() {
    this.api.getShortLinks(this.linkToShorten).subscribe((data) => {
      this.linkData = Object.values(data);
    });
  }

  constructor(private api: ApiService) {}

  ngOnInit() {}
}
