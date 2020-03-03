import { NgModule } from '@angular/core';
import { MsComponentsComponent } from './ms-components.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { TextinputComponent } from './textinput/textinput.component';


@NgModule({
  declarations: [MsComponentsComponent, CheckboxComponent, TextinputComponent],
  imports: [
  ],
  exports: [MsComponentsComponent, CheckboxComponent, TextinputComponent]
})
export class MsComponentsModule { }
