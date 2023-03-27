import { Component, Input } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-short-links',
  templateUrl: './short-links.component.html',
  styleUrls: ['./short-links.component.scss'],
})
export class ShortLinksComponent {
  linkData : any = []

  constructor(private clipboard: Clipboard) {}
  ngOnInit() {
 
    const keys = Object.keys(localStorage)
    const values = Object.values(localStorage)
    
    for(let key in keys){
      this.linkData.push([keys[key] , localStorage.getItem(keys[key])])
    }
    console.log(this.linkData)
   
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
    }
  }
}
