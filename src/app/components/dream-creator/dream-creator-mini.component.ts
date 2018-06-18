import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import Goal from '../../api/goal.interface';

@Component({
  selector: 'app-new-dream-mini',
  templateUrl: './dream-creator-mini.component.html',
  styleUrls: ['./dream-creator-mini.component.scss']
})
export class DreamCreatorMiniComponent implements OnInit {

  goals: any;
  goalText : String;
  defaultStatus = { text: "Haven't started yet", value: 0 };

  constructor(private _data: DataService) { 
  }

  ngOnInit() {
    this._data.goal.subscribe(res => this.goals = res);
    this._data.changeGoal(this.goals);
  }

  addItem() {
    this.goals.push({name: this.goalText, completionStatus: this.defaultStatus});
    this.goalText = '';
    this._data.changeGoal(this.goals);
  }

}
