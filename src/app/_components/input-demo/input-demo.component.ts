import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormControl, Validator } from '@angular/forms';

@Component({
  selector: 'app-input-demo',
  // templateUrl: './input-demo.component.html',
  // styleUrls: ['./input-demo.component.css']
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputDemoComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => InputDemoComponent),
      multi: true,
    }
  ],
  template: `<textarea                                 
                [value]="componentValue" 
                (change)="onChange($event)" 
                (keyup)="onChange($event)"
            >
            </textarea>`,
  styles: [
    `textarea {
      width: 100%;
    }`
  ]
})
export class InputDemoComponent implements ControlValueAccessor, Validator {
  private componentValue: string = '';
  private parseError: boolean;
  private data: any;

  // this is the initial value set to the component
  public writeValue(initialValue: any) {
    if(initialValue){
      this.data = initialValue;
      this.componentValue = initialValue;
    }
  }

  // registers 'fn' that will be fired wheb changes are made
  // this is how we emit the changes back to the form
  public registerOnChange(fn: any) {    
    this.propagateChange = fn;
  }  

  // not used, used for touch input
  public registerOnTouched() { }

  // validates the form, returns null when valid else the validation object
  // in this case we're checking if the json parsing has passed or failed from the onChange method
  public validate(c: FormControl) {
    return (!this.parseError) ? null : {
      lengthError: {
          valid: false,
      },
    };
  }

  // change events from the textarea
  private onChange(event) {    
    // get value from text area
    let newValue = event.target.value;
    this.data = newValue;

    if (newValue.length>2 && newValue.length<5)                    
        this.parseError = false;
    else          
        this.parseError = true;      

    // update the form
    this.propagateChange(this.data);
  }

  // the method set in registerOnChange to emit changes back to the form
  private propagateChange = (_: any) => {};

}
