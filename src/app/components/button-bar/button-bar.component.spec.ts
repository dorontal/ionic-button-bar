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
    public buttonBarComponent: any;
    public hostButtons: any = [{
        text: 'Button text',
        icon: 'folder-open',
        clickCB: () => console.log('test'),
        disabledCB: () => false
    }];
}
/*
describe('ButtonBarComponent', () => {
    let component: ButtonBarComponent;
    let fixture: ComponentFixture<ButtonBarComponent>;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ ButtonBarComponent ],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ButtonBarComponent);
        component = fixture.componentInstance;
        component.buttons = BUTTONS1;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should correctly render buttons', () => {
        expect(component.buttons).toBeTruthy();
        let span = fixture.nativeElement.querySelector('span');
        expect(span.textContent).toContain(BUTTONS1_TEXT);
    });

    it('should correctly re-render buttons', () => {
        component.buttons = BUTTONS2;
        fixture.detectChanges();
        let span = fixture.nativeElement.querySelector('span');
        expect(span.textContent).toContain(BUTTONS2_TEXT);
    });



});
*/
