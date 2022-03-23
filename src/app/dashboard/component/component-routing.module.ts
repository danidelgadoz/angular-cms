import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExampleCkeditorComponent } from './example-ckeditor/example-ckeditor.component';
import { ExampleFileInputMultipleComponent } from './example-file-input-multiple/example-file-input-multiple.component';

const routes: Routes = [
  {
    path: 'ckeditor',
    component: ExampleCkeditorComponent
  },
  {
    path: 'file-input-multiple',
    component: ExampleFileInputMultipleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ComponentRoutingModule {
  static components = [ExampleCkeditorComponent, ExampleFileInputMultipleComponent];
}
