import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  ckeditorContent: any;
  inputDemoModel: string;
  fileArray: any[];
  testString2 = "qwer";

  constructor() { }

  ngOnInit() {
    this.ckeditorContent = `<p>My HTML</p>`;
  }

  filesLoaded() {
    console.log(this.fileArray)
  }

  test() {
    console.log("testString2:", this.testString2);
  }
}
