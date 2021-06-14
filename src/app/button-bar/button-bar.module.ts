import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ButtonBarComponent } from './button-bar.component';

@NgModule({
    declarations: [
        ButtonBarComponent
    ],
    imports: [
        CommonModule,
        IonicModule
    ],
    exports: [
        ButtonBarComponent
    ]
})
export class ButtonBarModule {}
