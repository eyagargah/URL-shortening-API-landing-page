import { Component, Input } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-short-links',
  templateUrl: './short-links.component.html',
  styleUrls: ['./short-links.component.scss'],
})
export class ShortLinksComponent {
  @Input() linkData : any = []

  @Input() storedLinks : any = []

  ngOnInit(){
    console.log(this.storedLinks)
    const keys = Object.keys(localStorage)
    for(let key in keys){
      this.storedLinks.push([keys[key] , localStorage.getItem(keys[key])])
    }
    console.log(this.storedLinks[0][0])
  }
  constructor(private clipboard: Clipboard) {
   

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
