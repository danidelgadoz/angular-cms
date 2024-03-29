import {Directive, HostListener, HostBinding, EventEmitter, Output} from '@angular/core';

@Directive({
  selector: '[appDnd]'
})
export class DndDirective {
  @Output() private filesChangeEmiter : EventEmitter<File[]> = new EventEmitter();
  @Output() private filesInvalidEmiter : EventEmitter<File[]> = new EventEmitter();
  @HostBinding('style.background') private background: any;

  constructor() { }

  @HostListener('dragover', ['$event']) public onDragOver(evt: any){
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#999';
  }

  @HostListener('dragleave', ['$event']) public onDragLeave(evt: any){
    evt.preventDefault();
    evt.stopPropagation();
    this.background = null;
  }

  @HostListener('drop', ['$event']) public onDrop(evt: any){
    evt.preventDefault();
    evt.stopPropagation();
    this.background = null;
    this.filesChangeEmiter.emit(evt);
  }

}
