import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  ckeditorContent: any;
  inputDemoModel: string;
  itest: any[];

  constructor() { }

  ngOnInit() {
    this.ckeditorContent = `<p>My HTML</p>`;
  }

  ftest() {
    console.log(this.itest)
  }

  inputDemoOnChange() {
    console.log("inputDemoModel:", this.inputDemoModel);
  }

}
