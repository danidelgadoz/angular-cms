import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-ckeditor',
  templateUrl: './example-ckeditor.component.html',
  styleUrls: ['./example-ckeditor.component.scss']
})
export class ExampleCkeditorComponent implements OnInit {
  ckeditorContent = `<p>My HTML</p>`;

  constructor() { }

  ngOnInit(): void {
  }

}
