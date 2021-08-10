import {Component, OnChanges, Input, ViewChild} from '@angular/core';
import { TestBed }      from '@angular/core/testing';

@Component({
    selector: 'test',
    template: `<p>{{value}}</p>`,
})
export class ButtonBarComponent implements OnChanges {
    @Input() value: string;

    ngOnChanges(changes: {}): any {
        // should be called
    }
}
/* In the host component's template we will pass the inputs to the actual
 * component to test, that is ButtonBarComponent in this case
 */
@Component({
    selector : `test-host-component`,
    template :
    `<div><test [value]="valueFromHost"></test></div>`
})
export class TestHostComponent {
    @ViewChild(ButtonBarComponent) /* using viewChild we get access to the ButtonBarComponent which is a child of TestHostComponent */
    public testComponent: any;
    public valueFromHost: string; /* this is the variable which is passed as input to the ButtonBarComponent */
}

describe('ButtonBarComponent', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({declarations: [ButtonBarComponent,TestHostComponent]}); /* We declare both the components as part of the testing module */
    });

    it('should call ngOnChanges', ()=> {
        const fixture = TestBed.createComponent(TestHostComponent);
        const hostComponent = fixture.componentInstance;
        hostComponent.valueFromHost = 'Test';
        const component = hostComponent.testComponent;
        spyOn(component, 'ngOnChanges').and.callThrough();
        fixture.detectChanges();
        expect(component.ngOnChanges).toHaveBeenCalled();
    })


});
