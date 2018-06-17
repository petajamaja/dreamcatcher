import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-new-dream-mini',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class DreamCreatorMiniComponent implements OnInit {

  goals: any;

  constructor(private route: ActivatedRoute, private router: Router, private _data: DataService) { 
  }

  ngOnInit() {
    this._data.goal.subscribe(res => this.goals = res);
  }
}
