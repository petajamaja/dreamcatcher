import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-radar-mini',
  templateUrl: './radar-mini.component.html',
  styleUrls: ['./radar-mini.component.scss']
})
export class RadarMiniComponent implements OnInit {

  constructor(private router: Router) { 
  }

  ngOnInit() {
  }

  sendToRadar(){
    this.router.navigate(['/radar']);
  }

}
