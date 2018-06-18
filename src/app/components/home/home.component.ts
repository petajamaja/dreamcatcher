import { Component, OnInit, Optional } from '@angular/core';
import { DataService } from '../../services/data.service';
import Goal from '../../api/goal.interface';
import { DreamCreatorMiniComponent } from '../dream-creator/dream-creator-mini.component'
import { RadarMiniComponent } from '../radar/radar-mini.component';
import { QuotesMiniComponent } from '../quotes/quotes-mini.component';
import { MyDreamsMiniComponent } from '../my-dreams/my-dreams-mini.component';
import { ModalService } from '../../services/modal.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss','../shared/modal.component.scss','./home.modal.component.scss'],
})
export class HomeComponent implements OnInit {

  itemCount: number;
  goals: Goal[] = [];
  filesToUpload: Array<File>;

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

  openModal(id: string){
    this._modal.open(id);
  }

  closeModal(id: string){
    this._modal.close(id);
  }

  upload() {
    this.makeFileRequest("http://localhost:3000/upload", [], this.filesToUpload).then((result) => {
        console.log(result);
    }, (error) => {
        console.error(error);
    });
  }

fileChangeEvent(fileInput: any){
    this.filesToUpload = <Array<File>> fileInput.target.files;
}

makeFileRequest(url: string, params: Array<string>, files: Array<File>) {
    return new Promise((resolve, reject) => {
        var formData: any = new FormData();
        var xhr = new XMLHttpRequest();
        for(var i = 0; i < files.length; i++) {
            formData.append("uploads[]", files[i], files[i].name);
        }
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    resolve(JSON.parse(xhr.response));
                } else {
                    reject(xhr.response);
                }
            }
        }
        xhr.open("POST", url, true);
        xhr.send(formData);
    });
}

}
