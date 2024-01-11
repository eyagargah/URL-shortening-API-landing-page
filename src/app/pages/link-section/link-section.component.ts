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
  linksData : any ;
  linkData: { original_link: string, short_link: string } = {
    original_link: '',
    short_link: ''
  }
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
    if(this.linkToShorten==""){
      alert("Please enter a valid URL");
    }else {
      this.api.getShortLinks(this.linkToShorten).then((data) => {
        this.linkData.short_link = data
        this.linkData.original_link = this.linkToShorten
        console.log(this.linkData)
        //get stored data
        this.links = JSON.parse(localStorage.getItem('links') ?? '[]')
  
       
        this.links.push(this.linkData)
  
        localStorage.setItem('links', JSON.stringify(this.links))
        //let storedLink = this.linkData[1].full_share_link
        //let storedLinksToShorten = this.linkToShorten ;
      });
    }
   
  }

  ngOnInit() {
    this.linksData = localStorage.getItem('links') || ''
    if(this.linkData){
      //remove [] from linksData
      var trimmedString = this.linksData.slice(1, -1);
      // Split the string into individual object strings
      var objectStrings = trimmedString.split('},');
      console.log(objectStrings)
      // Create an array of objects
      this.links = objectStrings.map(function(objString: string) {
        // Add back the closing curly brace if it's not the last object
        if (objString.charAt(objString.length - 1) !== '}') {
          objString += '}';
        }
        // Parse each object string into an object
        return eval('(' + objString + ')');
      });
    }
  
    
    // Use the array of objects
  }
  constructor(private api: ApiService) {}
}
