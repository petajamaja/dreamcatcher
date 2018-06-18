import { Component, OnInit, Optional } from '@angular/core';
import { DataService } from '../../services/data.service';
import Goal from '../../api/goal.interface';
import { DreamCreatorMiniComponent } from '../dream-creator/dream-creator-mini.component'
import { RadarMiniComponent } from '../radar/radar-mini.component';
import { QuotesMiniComponent } from '../quotes/quotes-mini.component';
import { MyDreamsMiniComponent } from '../my-dreams/my-dreams-mini.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  itemCount: number;
  goals: Goal[] = [];

  constructor(private _data: DataService) { }

  ngOnInit() {
    this._data.goal.subscribe(res => {this.goals = res; this.itemCount = res.length});
    this._data.changeGoal(this.goals);
  }

  /**removeItem(i) {
    this.goals.splice(i, 1);
    this._data.changeGoal(this.goals);
  }**/
}
