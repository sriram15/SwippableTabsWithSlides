import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Segment, Slides } from 'ionic-angular';

@Component({
  selector: 'swippable-tabs',
  templateUrl: 'swippable-tabs.html'
  
})
export class SwippableTabsComponent implements OnInit{

  public selectedTab: number;
  @Input() tabData : any[];

  @ViewChild(Segment) segment : Segment;
  @ViewChild(Slides) slides: Slides;


  ngOnInit(){
    if(this.tabData.length > 0){
      this.selectedTab = 0;
    }
  }

  onSegmentChanged(){
    this.slides.slideTo(this.selectedTab);
  }

  onSlideChanged(){
    this.selectedTab = this.slides.getActiveIndex();
  }
}
