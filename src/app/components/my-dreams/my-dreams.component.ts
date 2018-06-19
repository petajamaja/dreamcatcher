import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import Dream from '../../api/dream.interface';
import { BottomActionsComponent } from './bottom-actions.component';
const Muuri = require('muuri');

@Component({
  selector: 'app-my-dreams',
  templateUrl: './my-dreams.component.html',
  styleUrls: ['./my-dreams.component.scss']
})
export class MyDreamsComponent implements OnInit, AfterViewInit{

  goals: any;
  itemCount: number;
  
  constructor(private _data: DataService) { }

  ngOnInit() {
    this._data.goal.subscribe(res => {this.goals = res; this.itemCount = res.length;});
    this._data.changeGoal(this.goals);
  }

  ngAfterViewInit(){
    console.log(this.goals);
    var grid = new Muuri('.grid', {dragEnabled: true});
  }

  hasGoalDescription(dream: Dream){
    return dream.description == '';
  }

  hasGoalImage(dream: Dream){
    return dream.imageUrl == '';
  }
}
