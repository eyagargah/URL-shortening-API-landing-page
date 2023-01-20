import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  openMenu(){
    let burger = document.querySelector('.burger')
    let links = document.querySelector('.links')
    if(links?.classList.contains("open")){
      links.classList.remove('open')
      links.classList.add('close')
    }else {
      links?.classList.add('open')
      links?.classList.remove('close')
    }
    console.log('clicked')
  }

  

}
