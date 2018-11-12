import { Component, OnInit } from '@angular/core';
declare function require(name:string);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  echarts = require('echarts');
  myChart2;

  messages = [{from: 'Stock1', subject:'Subject1', content:'Friday 12:14pm'},
    {from: 'Stock2', subject:'Story about stock2', content:'Friday 1:14pm'},
    {from: 'Stock3', subject:'Story about stock3', content:'Friday 2:34pm'},
    {from: 'Stock4', subject:'Story about stock4', content:'Friday 2:55pm'},
    {from: 'Stock1', subject:'Story about stock5', content:'Friday 4:14pm'}];

  data = [];
  data1 = [];

  oneDay = 24 * 3600 * 1000;
  value = Math.random() * 1000;

  constructor() { }

  randomData(date) {
    date.setDate(date.getDate()+1);
    this.value = this.value + Math.random() * 21 - 10;
    return {
      name: date.toString(),
      value: [
        [date.getFullYear(), date.getMonth() + 1, date.getDate()].join('/'),
        Math.round(this.value)
      ]
    }
  }

  ngOnInit() {
    var now = new Date(1997, 9, 3);
    console.log("now = " + now.toDateString());
    for (var i = 0; i < 1000; i++) {
      this.data.push(this.randomData(now));
      this.data1.push(this.randomData(now));
    }
    var myChart1 = this.echarts.init(document.getElementById('chart1'));
    // draw chart
    myChart1.setOption({
      title: {
        text: ''
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data:['S&P 500','Nasdaq','Dow 30','Russell 2000','Nikkei 225']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['8am','9am','10am','11am','12am','1pm','2pm']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name:'S&P 500',
          type:'line',
          stack: 'total',
          data:[20, 132, 101, 134, 90, 230, 210]
        },
        {
          name:'Nasdaq',
          type:'line',
          stack: 'total',
          data:[320, 182, 191, 234, 290, 330, 310]
        },
        {
          name:'Dow 30',
          type:'line',
          stack: 'total',
          data:[150, 232, 201, 154, 190, 330, 410]
        },
        {
          name:'Russell 2000',
          type:'line',
          stack: 'total',
          data:[140, 332, 301, 334, 390, 330, 320]
        },
        {
          name:'Nikkei 225',
          type:'line',
          stack: 'total',
          data:[420, 932, 901, 934, 1290, 1330, 1320]
        }
      ]
    });
    this.myChart2 = this.echarts.init(document.getElementById('chart2'));
    // draw chart
    var option = {
      title: {
        text: ''
      },
      tooltip: {
        trigger: 'axis',
        formatter: function (params) {
          params = params[0];
          var date = new Date(params.name);
          return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
        },
        axisPointer: {
          animation: false
        }
      },
      xAxis: {
        type: 'time',
        splitLine: {
          show: false
        }
      },
      yAxis: {
        type: 'value',
        boundaryGap: [0, '100%'],
        splitLine: {
          show: false
        }
      },
      series: [{
        name: '模拟数据',
        type: 'line',
        showSymbol: false,
        hoverAnimation: false,
        data: this.data
      },
        {
          name: '模拟数据1',
          type: 'line',
          showSymbol: false,
          hoverAnimation: false,
          data: this.data1
        }]
    };


    this.myChart2.setOption(option);
    /*setInterval(()=> {
      for (var i = 0; i < 5; i++) {
        this.data.shift();
        this.data.push(this.randomData(now));
        this.data1.shift();
        this.data1.push(this.randomData(now));
      }
      //console.log("triggered this.data = " + JSON.stringify(this.data));

      this.myChart2.setOption({series: [{data: this.data},
        { data: this.data1}]});
      }, 1000);*/

  }
}
