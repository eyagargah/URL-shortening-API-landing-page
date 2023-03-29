import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  storedLinks : any =[] 
  ngOnInit(){
    console.log(this.storedLinks)
    const keys = Object.keys(localStorage)
    for(let key in keys){
      this.storedLinks.push([keys[key] , localStorage.getItem(keys[key])])
    }
    console.log(this.storedLinks[0][0])
  }
}
