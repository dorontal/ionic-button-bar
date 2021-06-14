import { Component, OnInit } from '@angular/core';

import {
    ButtonBarButton
} from '../button-bar/button-bar.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
    public message: string = 'Last click = (none)';
    public bar1Buttons: ButtonBarButton[] = [
        {
            text: 'Tab 1',
            leftIcon: 'triangle',
            clickCB: (): void => { this.message = 'Last click = Tab 1'; }
        },
        {
            text: 'Tab 2',
            leftIcon: 'ellipse',
            rightIcon: 'square',
            clickCB: (): void => { this.message = 'Last click = Tab 2'; }
        },
        {
            text: 'Tab 3',
            leftIcon: 'square',
            clickCB: (): void => { this.message = 'Last click = Tab 3'; }
        }
    ];

    constructor() { }

    ngOnInit() {
    }

}
