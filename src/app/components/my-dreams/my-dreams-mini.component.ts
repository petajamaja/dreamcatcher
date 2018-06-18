import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-my-dreams-mini',
  templateUrl: './my-dreams-mini.component.html',
  styleUrls: ['./my-dreams-mini.component.scss']
})
export class MyDreamsMiniComponent implements OnInit {

  goals: any;

  constructor(private _data: DataService) { 
  }

  ngOnInit() {
    this._data.goal.subscribe(res => this.goals = res);
    this._data.changeGoal(this.goals);
  }

}
