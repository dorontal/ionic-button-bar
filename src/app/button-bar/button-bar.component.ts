import { OnChanges, SimpleChanges, Component, Input } from '@angular/core';

export interface ButtonBarButton {
    leftIcon?: string;
    rightIcon?: string;
    leftIconSrc?: string;
    rightIconSrc?: string;
    active?: boolean;
    text: string;
    clickCB?: () => void;
    disabledCB?: () => boolean;
}

/**
 * Button bar component with buttons that have double-row labels: 0, 1 or 2
 * icon on top row and text on bottom row of each button.
 */
@Component({
    selector: 'app-button-bar',
    templateUrl: './button-bar.component.html',
    styleUrls: ['./button-bar.component.scss']
})
export class ButtonBarComponent implements OnChanges {
    @Input() public buttons: ButtonBarButton[];
    @Input() public radio: boolean = false;
    public buttonWidth: string;

    /**
     * Dynamically change the button bar when the button @Input changes.
     */
    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.buttons && this.buttons) {
            this.buttonWidth = (100 / this.buttons.length).toString() + '%';
            this.buttons.forEach((button: ButtonBarButton) => {
                if (button.leftIcon && button.leftIconSrc) {
                    throw new Error('do not use both leftIcon & leftIconSrc');
                } else if (button.rightIcon && button.rightIconSrc) {
                    throw new Error('do not use both rightIcon & rightIconSrc');
                }
            });
        }
    }

    public commonCB(button: ButtonBarButton): void {
        if (this.radio) {
            this.buttons.forEach((candidateButton: ButtonBarButton) => {
                candidateButton.active = (candidateButton === button);

                if (candidateButton.active) {
                    console.log('active: ', button);
                }
            });
        }
        button.clickCB();
    }

}
