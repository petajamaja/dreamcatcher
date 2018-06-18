import { Component, OnInit } from '@angular/core';
import Goal from '../../api/goal.interface';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-dream-creator',
  templateUrl: './dream-creator.component.html',
  styleUrls: ['./dream-creator.component.scss']
})
export class DreamCreatorComponent implements OnInit {

  status = [
    { text: "Done with it", value: 100 },
    { text: "Just a bit more", value: 90 },
    { text: "Most of it done", value: 75 },
    { text: "Halfway there", value: 50 },
    { text: "Worked for a while", value: 25 },
    { text: "Started recently", value: 10 },
    { text: "Haven't started yet", value: 0 }
  ]

  goalText: string;
  goalStatus: any;
  goalDescription: string;
  goals: any;
  tags: any;
  constructor(private _data: DataService) { }

  ngOnInit() {
  }

  addItem() {
    this.goals.push(
          { name: this.goalText, 
            completionStatus: this.goalStatus,
            description: this.goalDescription,
            tags: this.tags
          });
    this.goalText = '';
    this.goalStatus = status[6];
    this.goalDescription = '';
    this.tags = [];
    this._data.changeGoal(this.goals);
  }

}
