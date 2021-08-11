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
}

describe('ButtonBarComponent', () => {
    let component: HostComponent;
    let fixture: ComponentFixture<HostComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ ButtonBarComponent, HostComponent ],
            imports: [ IonicModule.forRoot() ],
            schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
        }).compileComponents();        
        fixture = TestBed.createComponent(HostComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', ()=> {
        expect(component).toBeTruthy();
    });

    it('should call ngOnChanges', ()=> {
        // const fixture = TestBed.createComponent(HostComponent);
        // const hostComponent = fixture.componentInstance;
        // fixture.detectChanges();
        component.buttons = [{
            text: 'Button text',
            icon: 'folder-open',
            clickCB: () => console.log('test'),
            disabledCB: () => false
        }];
        const childComponent = component.buttonBar;
        console.log(childComponent);
        spyOn(childComponent, 'ngOnChanges').and.callThrough();
        fixture.detectChanges();
        expect(childComponent.ngOnChanges).toHaveBeenCalled();
    });
});
