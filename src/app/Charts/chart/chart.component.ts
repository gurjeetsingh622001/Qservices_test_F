import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  basicData: any;
  Data = [
    { whatIsYourIncome: '0-2.5' },
    { whatIsYourIncome: '0-2.5' },
    { whatIsYourIncome: '0-2.5' },
    { whatIsYourIncome: '2.5-5' },
    { whatIsYourIncome: '2.5-5' },
    { whatIsYourIncome: '2.5-5' },
    { whatIsYourIncome: '5-10' },
    { whatIsYourIncome: '>10' },
    { whatIsYourIncome: '>10' },
    { whatIsYourIncome: '>10' },
    { whatIsYourIncome: '>10' },
  ]

  basicOptions: any;
  constructor() { }

  ngOnInit(): void {
    // this.Data.filter((obj) => obj.whatIsYourIncome == '0-2.5').length
    // this.Data.filter((obj) => obj.whatIsYourIncome == '2.5-5').length
    // this.Data.filter((obj) => obj.whatIsYourIncome == '5-10').length
    // this.Data.filter((obj) => obj.whatIsYourIncome == '>10').length
    this.basicData = {
      labels: ['0-2.5 lpa', '2.5-5 lpa','5-10 lpa','>10 lpa'],
      datasets: [
        {
          label: 'My Second dataset',
          backgroundColor: '#FFA726',
          data: [
            this.Data.filter((obj) => obj.whatIsYourIncome == '0-2.5').length,

            this.Data.filter((obj) => obj.whatIsYourIncome == '2.5-5').length,

            this.Data.filter((obj) => obj.whatIsYourIncome == '5-10').length,

            this.Data.filter((obj) => obj.whatIsYourIncome == '>10').length
          ]
        }
      ]
    };
  }



}
