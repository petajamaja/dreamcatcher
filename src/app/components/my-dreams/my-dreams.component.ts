import { Component, OnInit } from '@angular/core';
//import  Muuri  from 'muuri';
const Muuri = require('muuri');

@Component({
  selector: 'app-my-dreams',
  templateUrl: './my-dreams.component.html',
  styleUrls: ['./my-dreams.component.scss']
})
export class MyDreamsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var grid = new Muuri('.grid', {dragEnabled: true});
  }

}
