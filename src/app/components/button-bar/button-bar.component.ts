import { OnChanges, SimpleChanges, Component, Input } from '@angular/core';

export interface ButtonBarButton {
    text: string;
    icon?: string;
    rightIcon?: string;
    iconSrc?: string;
    rightIconSrc?: string;
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
            let bFoundSelectedButton: boolean = false;
            this.buttons.forEach((button: ButtonBarButton) => {
                if (button.icon && button.iconSrc) {
                    throw new Error('one of icon & iconSrc must be null');
                }
                if (button.selected) {
                    if (this.radioMode) {
                        if (bFoundSelectedButton) {
                            throw new Error('>1 selected button in radio mode');
                        } else {
                            bFoundSelectedButton = true;
                        }

                    } else {
                        throw new Error('only select buttons in radio mode');
                    }
                }
            });
        }
    }

    public commonCB(button: ButtonBarButton): void {
        if (this.radioMode) {
            this.buttons.forEach((candidateButton: ButtonBarButton) => {
                candidateButton.selected = (candidateButton === button);
            });
        }
        button.clickCB();
    }
}
