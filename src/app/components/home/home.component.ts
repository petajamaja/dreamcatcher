import { Component, OnInit, Optional } from '@angular/core';
import { DataService } from '../../services/data.service';
import Dream from '../../api/dream.interface';
import { DreamCreatorMiniComponent } from '../dream-creator/dream-creator-mini.component'
import { RadarMiniComponent } from '../radar/radar-mini.component';
import { QuotesMiniComponent } from '../quotes/quotes-mini.component';
import { MyDreamsMiniComponent } from '../my-dreams/my-dreams-mini.component';
import { ModalService } from '../../services/modal.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  itemCount: number;
  goals: Dream[] = [];

  constructor(private _data: DataService, private _modal : ModalService) { }

  ngOnInit() {
    this._data.goal.subscribe(res => {this.goals = res; this.itemCount = res.length});
    this._data.changeGoal(this.goals);
    $('#dreams-upload').bind('change', function() { 
        var fileName = ''; 
        fileName = '1 file selected'; 
        $('#file-selected').html(fileName); 
    })
  }
}
