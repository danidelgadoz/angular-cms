import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-file-input-multiple',
  templateUrl: './example-file-input-multiple.component.html',
  styleUrls: ['./example-file-input-multiple.component.scss']
})
export class ExampleFileInputMultipleComponent implements OnInit {
  fileArray!: any[];

  constructor() { }

  ngOnInit(): void {
  }

  filesLoaded() {
    console.log(this.fileArray)
  }

}
