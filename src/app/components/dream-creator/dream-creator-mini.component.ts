import { Component, OnInit, ContentChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import Dream from '../../api/dream.interface';
import { ModalService } from '../../services/modal.service';

@Component({
    selector: 'app-new-dream-mini',
    templateUrl: './dream-creator-mini.component.html',
    styleUrls: ['./dream-creator-mini.component.scss', '../shared/modal.component.scss', 'upload.modal.component.scss']
})
export class DreamCreatorMiniComponent implements OnInit {

    goals: any;
    goalText: String;
    filesToUpload: Array<File>;
    defaultStatus = { text: "Haven't started yet", value: 0 };

    constructor(private _data: DataService, private _modal: ModalService) {
    }

    ngOnInit() {
        this._data.goal.subscribe(res => this.goals = res);
        this._data.changeGoal(this.goals);
    }

    openModal() {
        this._modal.open("file-upload-modal");
    }

    addItem() {
        this.goals.push({
            id: this.goals.length, name: this.goalText,
            description: '', tags: [], imageUrl: '',
            completionStatus: this.defaultStatus
        });
        this.goalText = '';
        this._data.changeGoal(this.goals);
    }

    toStatusObj(status){
        switch(status){
            case 100:
                return { text: "Done with it", value: 100 };
            case 90:
                return { text: "Just a bit more", value: 90 };
            case 75:
                return { text: "Most of it done", value: 75 };
            case 50:
                return { text: "Halfway there", value: 50 };
            case 25:
                return { text: "Worked for a while", value: 25 };
            case 10:
                return { text: "Started recently", value: 10 };
            case 0:
                return { text: "Haven't started yet", value: 0 };
            default:
                return { text: "Haven't started yet", value: 0 }
        }
    }

    addMoreGoals(newGoals: any){
        this.goals = this.goals.concat(newGoals);
    }

    upload() {
        var selectedFile = (<HTMLInputElement>document.getElementById('dreams-upload')).files[0];
        var reader = new FileReader();
        // here we add the new goals to goals array in service
        //var that = this;
        reader.onload = function () {
            var content = reader.result;
            var lines = content.split("\n");
            var uploadedGoals = [];
            for(var i=1; i < lines.length-1; i++){
              var line = lines[i];
              var fields = line.split(";");
              var dream = {};
              dream["id"] =  Number.parseInt(fields[0]) + this.goals.length;
              dream["name"] = fields[1];
              dream["description"] = fields[2];
              dream["tags"] = (fields[3]==[])?[]:fields[3].split(",");
              dream["imageUrl"] = fields[4];
              dream["completionStatus"] = this.toStatusObj(fields[4]);
              uploadedGoals.push(dream);
            }
            this.addMoreGoals(uploadedGoals);
            this._data.changeGoal(this.goals);
            this._modal.close('file-upload-modal');
        }.bind(this);
        reader.readAsText(selectedFile, 'utf8');       
    }

    fileChangeEvent(fileInput: any) {
        this.filesToUpload = <Array<File>>fileInput.target.files;
    }

}
