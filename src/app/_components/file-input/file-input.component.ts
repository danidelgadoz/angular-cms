import { Component, Input, Output, forwardRef, EventEmitter  } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormControl, Validator } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-file-input',
  templateUrl: './file-input.component.html',
  styleUrls: ['./file-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FileInputComponent),
      multi: true,
    }
  ],  
})
export class FileInputComponent implements ControlValueAccessor {  
  @Output() change: EventEmitter<any[]> = new EventEmitter<any[]>();

  private inputValue: any;
  gallery: any[] = [];

  constructor(private sanitizer:DomSanitizer){}

  public writeValue(initialValue: any) {
    if(initialValue){
      this.inputValue = initialValue;
    }
  }

  public registerOnChange(fn: any) {
    this.propagateChange = fn;
  }

  public registerOnTouched() { }

  private propagateChange = (_: any) => {};

  private onChange(event) {    
    if (event.target.files && event.target.files.length>0) {
      var files = event.target.files;

      for (var i = 0; i < files.length; i++) {
        var file = files[i];
        var reader = new FileReader();
        
        reader.onload = (function(_file, _this){
          return function(e){
              _this.gallery.push(_file);
          };
        })(file, this);
        reader.readAsDataURL(file);

        this.propagateChange(this.gallery);
      }
    }
  }

  /*private onChange(event) {    
    if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();

        reader.onload = (_event:any) => {
            this.gallery.push({
                link: _event.target.result,
                file: event.srcElement.files[0],
                name: event.srcElement.files[0].name
            });
        }
        reader.readAsDataURL(event.target.files[0]);
        this.propagateChange(this.gallery);
    }
  }*/

  private removeFromGallery(index) {
    this.gallery.splice(index, 1);
    this.change.emit();
  }

  private transform(html) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(html));
  }

  onFilesChange(fileList : FileList){
    console.log("In component:", fileList)
  }
  
}