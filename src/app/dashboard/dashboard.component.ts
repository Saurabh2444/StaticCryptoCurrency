import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
// import { getRelativePosition } from 'chart.js/helpers'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public chart:any;
  ngOnInit():void{

    new Chart('canChart',{
      type:'bar',
      data: {
        labels: ['1d','1w','1m','3m','6m','1y','2y'],
        datasets: [{
          label:'Amount',
          data:[1740,1400,1000,1980,1050,1820,1500],
          backgroundColor:[
            '#810481'
          ],
          borderColor:[
            '#02231c'
          ],
          borderWidth: 2
        }]
      },
      options: {
        responsive:true,
        layout:{
          padding:{
            left:20,
            right:0,
            top: 0,
            bottom:0
          },
        }
      }
    });

    new Chart('myChart',{
      type:'doughnut',
      data:{
        datasets: [{
          label: '',
          data: [100, 180, 80],
          backgroundColor: [
            '#810481',
            'rgb(147, 142, 224)',
            'rgb(232, 211, 240)'
          ],
          hoverOffset: 10
        }]
      }
    })

    new Chart('myChart1',{
      type:'line',
      data: {
        labels: ['Feb','Mar','Apr','May','Jun','Jul','Aug'],
        datasets: [{
          label:'Amount',
          data:[12,15,3,5,7,2,11],
          backgroundColor:[
            '#810481'
          ],
          borderColor:[
            '#02231c'
          ],
          borderWidth: 1,
          fill:true
        }]
      },
      options: {
        responsive:true,
        layout:{
          padding:{
            left:20,
            right:0,
            top: 0,
            bottom:0
          },
        }
      }
    });

    new Chart('myChart2',{
      type:'line',
      data: {
        labels: ['Feb','Mar','Apr','May','Jun','Jul','Aug'],
        datasets: [{
          label:'Amount',
          data:[12,15,3,5,7,2,11],
          backgroundColor:[
            'rgb(147, 142, 224)'
          ],
          borderColor:[
            '#02231c'
          ],
          borderWidth: 1,
          fill:true
        }]
      },
      options: {
        responsive:true,
        layout:{
          padding:{
            left:20,
            right:0,
            top: 0,
            bottom:0
          },
        }
      }
    });

    new Chart('myChart3',{
      type:'line',
      data: {
        labels: ['Feb','Mar','Apr','May','Jun','Jul','Aug'],
        datasets: [{
          label:'Amount',
          data:[12,15,3,5,7,2,11],
          backgroundColor:[
            'rgb(232, 211, 240)'
          ],
          borderColor:[
            '#02231c'
          ],
          borderWidth: 1,
          fill:true
        }]
      },
      options: {
        responsive:true,
        layout:{
          padding:{
            left:20,
            right:0,
            top: 0,
            bottom:0
          },
        }
      }
    });
  }
}
