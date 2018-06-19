import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import Dream from '../../api/dream.interface';

@Component({
    selector: 'app-bottom-actions',
    templateUrl: './bottom-actions.component.html',
    styleUrls: ['./bottom-actions.component.scss']
})
export class BottomActionsComponent implements OnInit {

    goals: any;

    constructor(private _data: DataService) { }

    ngOnInit() {
        this._data.goal.subscribe(res => this.goals = res);
        this._data.changeGoal(this.goals);
    }

    downloadCSV() {

        var data, filename, link;
        var csv = this.convertToCSV();
        if (csv == null) return;

        filename = 'dreams.csv';

        if (!csv.match(/^data:text\/csv/i)) {
            csv = 'data:text/csv;charset=utf-8,' + csv;
        }
        data = encodeURI(csv);

        link = document.createElement('a');
        link.setAttribute('href', data);
        link.setAttribute('download', filename);
        link.click();
    }

    convertToCSV() {

        var dreamCSV, counter, keys, columnDelimiter, lineDelimiter, data;

        if (this.goals == null || !this.goals.length) {
            return null;
        }

        columnDelimiter = ';';
        lineDelimiter = '\n';

        // init column names and resulting csv
        keys = Object.keys(this.goals[0]);
        dreamCSV = '';
        // add column names to csv
        dreamCSV += keys.join(columnDelimiter);
        dreamCSV += lineDelimiter;

        this.goals.forEach(function (item) {
            counter = 0;
            keys.forEach(function (key) {
                if (counter > 0) dreamCSV += columnDelimiter;
                // if it's a status, store the numeric percentage
                if(counter == 5) {
                    dreamCSV += item[key].value;
                // if it's an array of tags
                }else if(counter == 3){
                    dreamCSV += item[key].toString();
                }else{
                    dreamCSV += item[key];
                }
                counter++;
            });
            dreamCSV += lineDelimiter;
        });
        return dreamCSV;
    }
}
