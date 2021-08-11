import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnChanges, Input, ViewChild } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { ButtonBarComponent } from './button-bar.component';

// See https://stackoverflow.com/questions/37408801/ for testing ngOnChanges

@Component({
    selector: 'host-component',
    template:
    '<div><app-button-bar [buttons]="buttons"></app-button-bar></div>'
})
class HostComponent {
    // using viewChild we get access to the ButtonBarComponent which is a
    // child of HostComponent
    @ViewChild(ButtonBarComponent) public buttonBar: ButtonBarComponent;
    public buttons: any;

    constructor() {
        console.warn('buttonBar: ', JSON.stringify(this.buttonBar, null, 2));
    }

}

describe('ButtonBarComponent', () => {

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ ButtonBarComponent, HostComponent ],
            imports: [ IonicModule.forRoot() ],
            schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
        }).compileComponents(); // });
    }));

    it('should call ngOnChanges', ()=> {
        const fixture = TestBed.createComponent(HostComponent);
        const hostComponent = fixture.componentInstance;
        fixture.detectChanges();
        hostComponent.buttons = [{
            text: 'Button text',
            icon: 'folder-open',
            clickCB: () => console.log('test'),
            disabledCB: () => false
        }];
        const component = hostComponent.buttonBar;
        console.log(component);
        spyOn(component, 'ngOnChanges').and.callThrough();
        fixture.detectChanges();
        expect(component.ngOnChanges).toHaveBeenCalled();
    });

});
