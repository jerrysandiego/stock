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
    var myChart = this.echarts.init(document.getElementById('main'));
    // draw chart
    myChart.setOption({
      title: {
        text: 'S&P 500 index'
      },
      tooltip: {},
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
  }
}
