import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { ConfirmDialogComponent } from './utils/dialogs/confirm-dialog/confirm-dialog.component';
import { AlertDialogComponent } from './utils/dialogs/alert-dialog/alert-dialog.component';
import { FileInputComponent } from './components/file-input/file-input.component';
import { DndDirective } from './components/file-input/dnd.directive';
import { CKEditorModule } from 'ng2-ckeditor';

const COMPONENTS = [
  AlertDialogComponent,
  ConfirmDialogComponent,
  FileInputComponent,
];

@NgModule({
  declarations: [
    ...COMPONENTS,
    DndDirective,
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    CommonModule,
    CKEditorModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    PerfectScrollbarModule,
    ...COMPONENTS
  ],
  entryComponents: [
    AlertDialogComponent,
    ConfirmDialogComponent
  ]
})
export class SharedModule { }
