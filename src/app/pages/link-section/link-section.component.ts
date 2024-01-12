import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-link-section',
  templateUrl: './link-section.component.html',
  styleUrls: ['./link-section.component.scss'],
  
})
export class LinkSectionComponent {
  linkToShorten: string = '';
  linkForm !: FormGroup;
  linksData: any;
  linkData: { original_link: string; short_link: string } = {
    original_link: '',
    short_link: '',
  };
  links: any = [];

  ngOnInit() {
    this.getShortenedLinks();
    this.linkForm = this.fb.group({
      linkToShorten: ['' , Validators.required],
    })
  }
  constructor(private api: ApiService , private fb:FormBuilder) {}

 
  getLink() {
    return this.linkForm.get('storedLinksToShorten');
  }

  shortenLink() {
    this.linkToShorten = this.linkForm.value.linkToShorten
    if (this.linkToShorten == '') {
      alert('Please enter a valid URL');
    } else {
      this.api.getShortLinks(this.linkToShorten).then((data) => {
        this.linkData.short_link = data;
        this.linkData.original_link = this.linkToShorten;
        //get stored data

        this.links.push(this.linkData);

        localStorage.setItem('links', JSON.stringify(this.links));
        //let storedLink = this.linkData[1].full_share_link
        //let storedLinksToShorten = this.linkToShorten ;
      });
    }
    this.resetForm()
  }

  getShortenedLinks() {
    this.linksData = localStorage.getItem('links') || '';
    const keys = Object.keys(this.linksData);
    if (keys.length > 1) {
      //remove [] from linksData
      var trimmedString = this.linksData.slice(1, -1);
      // Split the string into individual object strings
      var objectStrings = trimmedString.split('},');
      // Create an array of objects
      this.links = objectStrings.map(function (objString: string) {
        // Add back the closing curly brace if it's not the last object
        if (objString.charAt(objString.length - 1) !== '}') {
          objString += '}';
        }
        // Parse each object string into an object
        return eval('(' + objString + ')');
      });
    }
  }

  resetForm(){
    this.linkForm.reset();
  }
}
