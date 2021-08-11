import { Component } from '@angular/core';

import {
    ButtonBarButton
} from '../../components/button-bar/button-bar.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})
export class HomePage {
    public message: string = 'Last button click = (none)';
    public footerButtons: ButtonBarButton[] = [
        {
            selected: true,
            text: 'Tab 1',
            icon: 'triangle',
            clickCB: (): void => { this.message = 'Last button click = Tab 1'; }
        },
        {
            text: 'Tab 2',
            icon: 'ellipse',
            clickCB: (): void => { this.message = 'Last button click = Tab 2'; }
        },
        {
            text: 'Tab 3',
            icon: 'square',
            clickCB: (): void => { this.message = 'Last button click = Tab 3'; }
        }
    ];
}
