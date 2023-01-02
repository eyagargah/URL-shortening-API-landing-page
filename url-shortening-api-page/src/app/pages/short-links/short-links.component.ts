import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-short-links',
  templateUrl: './short-links.component.html',
  styleUrls: ['./short-links.component.scss'],
})
export class ShortLinksComponent {
  @Input() linkData: any;

 toggle(event: Event){
  let elementId = event.target as HTMLElement;
  console.log(elementId.parentElement?.firstChild?.textContent)
  if(elementId.classList.contains('not-active')){
    elementId.classList.remove('not-active');
    elementId.classList.add('active')
    elementId.innerText= 'Copied!'
  }else {
    elementId.classList.add('not-active')
    elementId.classList.remove('active')
    elementId.innerText = 'Copy'
  }
 }
  

}
