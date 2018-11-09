import { Component, OnInit } from '@angular/core';
declare function require(name:string);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  echarts = require('echarts');
  constructor() { }

  ngOnInit() {
    var myChart1 = this.echarts.init(document.getElementById('chart1'));
    // draw chart
    myChart1.setOption({
      title: {
        text: ''
      },
      tooltip: {text:'S&P 500 index'},
      xAxis: {
        data: ['shirt', 'cardign', 'chiffon shirt', 'pants', 'heels', 'socks']
      },
      yAxis: {},
      series: [{
        name: 'sales',
        type: 'line',
        data: [5, 20, 36, 10, 10, 20]
      }]
    });
    var myChart2 = this.echarts.init(document.getElementById('chart2'));
    // draw chart
    myChart2.setOption({
      title: {
        text: ''
      },
      tooltip: {text:'Nasdaq'},
      xAxis: {
        data: ['1', '2', '3', '4', '5', '6']
      },
      yAxis: {},
      series: [{
        name: 'sales',
        type: 'line',
        data: [5, 20, 36, 10, 10, 20]
      }]
    });

  }
}
