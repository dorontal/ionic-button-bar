import { OnChanges, SimpleChanges, Component, Input } from '@angular/core';

export interface ButtonBarButton {
    text: string;
    icon?: string;
    rightIcon?: string;
    iconSrc?: string;
    rightIconSrc?: string;
    active?: boolean;
    defaultRadio?: boolean;
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
            let nDefaultRadio: number = 0;
            this.buttons.forEach((button: ButtonBarButton) => {
                if (button.icon && button.iconSrc) {
                    throw new Error('do not use both icon & iconSrc');
                }
                if (button.defaultRadio) {
                    if (this.radio) {
                        this.activateRadioButton(button);
                    }
                    if (nDefaultRadio > 1) {
                        throw new Error('more than one default radio button');
                    } else {
                        nDefaultRadio++;
                    }
                }
            });
        }
    }

    public commonCB(button: ButtonBarButton): void {
        if (this.radio) {
            this.activateRadioButton(button);
        }
        button.clickCB();
    }

    private activateRadioButton(button: ButtonBarButton): void {
        this.buttons.forEach((candidateButton: ButtonBarButton) => {
            candidateButton.active = (candidateButton === button);
            if (candidateButton.active) {
                console.log('active: ', button);
            }
        });
    }
}
