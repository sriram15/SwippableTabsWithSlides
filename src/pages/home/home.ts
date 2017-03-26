import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tabData : any[];

  constructor(public navCtrl: NavController) {

    this.tabData = [
      {title: 'tab 1' , data: [1,2,3]},
      {title: 'tab 2', data: [2,3]},
      {title:'tab 3' , data: [2,3,1,7,2]},
      {title:'tab 4', data: [1,3,0]
    }]
  }

}
