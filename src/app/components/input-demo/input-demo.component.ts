import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
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
                [value]="inputValue"
                (change)="onChange($event)"
                (keyup)="onChange($event)"
            >
            </textarea>
            <span>demo2: {{demo2Value}}</span>`,
  styles: [
    `textarea {
      width: 100%;
    }`
  ]
})
export class InputDemoComponent implements ControlValueAccessor, Validator {
  private parseError: boolean;
  private inputValue: any = '';
  demo2Value = "";

  @Output() counterChange = new EventEmitter();


  @Input()
  set demo2(val) {
    console.log(val);
    this.demo2Value = val;
    // this.counterChange.emit(this.demo2Value);
  }

  // this is the initial value set to the component
  public writeValue(initialValue: any) {
    if (initialValue) {
      this.inputValue = initialValue;
    }
  }

  // registers 'fn' that will be fired wheb changes are made
  // this is how we emit the changes back to the form
  public registerOnChange(fn: any) {
    this.propagateChange = fn;
  }

  // not used, used for touch input
  public registerOnTouched() { }

  // the method set in registerOnChange to emit changes back to the form
  private propagateChange = (_: any) => {};

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
    let newValue = event.target.value;
    this.inputValue = newValue;

    if (newValue.length >2 && newValue.length < 5)
        this.parseError = false;
    else
        this.parseError = true;

    // update the form
    this.propagateChange(this.inputValue);
  }

}
