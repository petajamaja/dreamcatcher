import { Component, OnInit, Optional } from '@angular/core';
import { DataService } from '../../services/data.service';
import Goal from '../../api/goal.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  addDescription: boolean;
  itemCount: number;
  goalText: string;
  goalStatus: any;
  goalDescription: string;
  goals: Goal[] = [];

  status = [
    { text: "Done with it", value: 100 },
    { text: "Just a bit more", value: 90 },
    { text: "Most of it done", value: 75 },
    { text: "Halfway there", value: 50 },
    { text: "Worked for a while", value: 25 },
    { text: "Started recently", value: 10 },
    { text: "Haven't started yet", value: 0 }
  ]

  constructor(private _data: DataService) { }

  ngOnInit() {
    this._data.goal.subscribe(res => this.goals = res);
    this._data.changeGoal(this.goals);
    this.itemCount = this.goals.length;
  }

  addItem() {
    this.goals.push({name: this.goalText,description: this.goalDescription, completionStatus: this.goalStatus });
    this.goalText = '';
    this.goalStatus = {};
    this.goalDescription = '';
    this.itemCount = this.goals.length;
    this._data.changeGoal(this.goals);
  }

  removeItem(i) {
    this.goals.splice(i, 1);
    this._data.changeGoal(this.goals);
  }

  toggleDescription(){
    this.addDescription = !this.addDescription;
  }
}
