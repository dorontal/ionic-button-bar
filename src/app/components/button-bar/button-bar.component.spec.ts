import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Component, OnChanges, Input, ViewChild } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { ButtonBarComponent } from './button-bar.component';

// See https://stackoverflow.com/questions/37408801/ for testing ngOnChanges

@Component({
    selector: 'host-component',
    template: '<div><app-button-bar [buttons]="buttons"></app-button-bar></div>'
})
class HostComponent {
    @ViewChild(ButtonBarComponent) public buttonBar: ButtonBarComponent;
    public buttons: any;
}

describe('ButtonBarComponent', () => {
    let hostComponent: HostComponent;
    let hostFixture: ComponentFixture<HostComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ ButtonBarComponent, HostComponent ],
            imports: [ IonicModule.forRoot() ]
        }).compileComponents();
        hostFixture = TestBed.createComponent(HostComponent);
        hostComponent = hostFixture.componentInstance;
        hostFixture.detectChanges();
    }));

    it('should create', ()=> {
        expect(hostComponent).toBeTruthy();
    });

    it('should call ngOnChanges', ()=> {
        hostComponent.buttons = [{
            text: 'Button text',
            icon: 'folder-open',
            clickCB: () => console.log('test'),
            disabledCB: () => false
        }];
        const buttonBarComponent = hostComponent.buttonBar;
        spyOn(buttonBarComponent, 'ngOnChanges').and.callThrough();
        hostFixture.detectChanges();
        expect(buttonBarComponent.ngOnChanges).toHaveBeenCalled();
    });
});
