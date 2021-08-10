import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Component, OnChanges, Input, ViewChild } from '@angular/core';
// import { By } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';

import { ButtonBarComponent } from './button-bar.component';

// See https://stackoverflow.com/questions/37408801/ for testing ngOnChanges

@Component({
    selector: 'host-component',
    template:
    '<div><app-button-bar [buttons]="hostButtons"></app-button-bar></div>'
})
export class TestHostComponent {
    // using viewChild we get access to the ButtonBarComponent which is a
    // child of TestHostComponent
    @ViewChild(ButtonBarComponent)
    public buttonBar: ButtonBarComponent;
    public hostButtons: any = [{
        text: 'Button text',
        icon: 'folder-open',
        clickCB: () => console.log('test'),
        disabledCB: () => false
    }];
}

describe('ButtonBarComponent', () => {
    // let component: ButtonBarComponent;
    // let fixture: ComponentFixture<ButtonBarComponent>;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ ButtonBarComponent, TestHostComponent ],
            imports: [IonicModule.forRoot()]
        }); //.compileComponents();
    }));

    it('should call ngOnChanges', ()=> {
        const fixture = TestBed.createComponent(TestHostComponent);
        const hostComponent = fixture.componentInstance;
        // hostComponent.valueFromHost = 'Test';
        const component = hostComponent.buttonBar;
        expect(component).toBeTruthy();
        console.log(component);
        /*
        spyOn(component, 'ngOnChanges').and.callThrough();
        fixture.detectChanges();
        expect(component.ngOnChanges).toHaveBeenCalled();
        */
    });
});
