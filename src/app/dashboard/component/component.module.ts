import { NgModule } from '@angular/core';

import { ComponentRoutingModule } from './component-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    ...ComponentRoutingModule.components
  ],
  imports: [
    ComponentRoutingModule,
    SharedModule,
  ]
})
export class ComponentModule { }
