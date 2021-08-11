import { OnChanges, SimpleChanges, Component, Input } from '@angular/core';

export interface ButtonBarButton {
    text: string;
    icon?: string;
    rightIcon?: string;
    iconSrc?: string;
    rightIconSrc?: string;
    active?: boolean;
    selected?: boolean;
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
    @Input() public radioMode: boolean = false;
    public buttonWidth: string;

    /**
     * Dynamically change the button bar when the button @Input changes.
     */
    public ngOnChanges(changes: SimpleChanges): void {
        // console.log('dude 0');
        if (changes.buttons && this.buttons) {
            this.buttonWidth = (100 / this.buttons.length).toString() + '%';
            let nSelectedRadioButtons: number = 0;
            this.buttons.forEach((button: ButtonBarButton) => {
                if (button.icon && button.iconSrc) {
                    throw new Error('one of icon & iconSrc must be null');
                }
                if (button.selected) {
                    nSelectedRadioButtons++;
                    if (this.radioMode) {
                        this.selectRadioButton(button);
                    } else {
                        throw new Error('not radio mode but button selected');
                    }
                    if (nSelectedRadioButtons > 1) {
                        throw new Error('> 1 selected radio button');
                    }
                }
            });
        }
    }

    public commonCB(button: ButtonBarButton): void {
        if (this.radioMode) {
            this.selectRadioButton(button);
        }
        button.clickCB();
    }

    private selectRadioButton(button: ButtonBarButton): void {
        // TODO: use map() here
        this.buttons.forEach((candidateButton: ButtonBarButton) => {
            candidateButton.active = (candidateButton === button);
            // if (candidateButton.active) {
            //     console.log('active: ', button);
            // }
        });
    }
}
