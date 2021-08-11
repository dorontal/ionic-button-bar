import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Component, OnChanges, Input, ViewChild } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { ButtonBarComponent } from './button-bar.component';

// See https://stackoverflow.com/questions/37408801/ for testing ngOnChanges

@Component({
    selector: 'host-component',
    template: `<div>
                   <app-button-bar [buttons]="buttons" [radioMode]="radioMode">
                   </app-button-bar>
               </div>`
})
class HostComponent {
    @ViewChild(ButtonBarComponent) public buttonBar: ButtonBarComponent;
    public radioMode: boolean = false;
    public buttons: any;
}

describe('ButtonBarComponent init w/a host component', () => {
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

    it('should call ngOnChanges after button assignment', ()=> {
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

    it('should err on wrong button config w/both icon & imgSrc', ()=> {
        const errorThrowingFunction = () => {
            hostComponent.buttons = [
                {
                    text: 'Button text',
                    icon: 'folder-open',
                    iconSrc: 'some/path',
                    clickCB: () => console.log('test'),
                    disabledCB: () => false
                }
            ];
            hostFixture.detectChanges();
        };
        expect(errorThrowingFunction).toThrow();
    });

    it('should fail if selected when not in radio mode', ()=> {
        const errorThrowingFunction = () => {
            hostComponent.radioMode = false;
            hostComponent.buttons = [ { text: 'button text', selected: true } ];
            hostFixture.detectChanges();
        };
        expect(errorThrowingFunction).toThrow();
    });

    it('should err on > 1 radioMode buttons selected', ()=> {
        const errorThrowingFunction = () => {
            hostComponent.radioMode = true;
            hostComponent.buttons = [
                {
                    text: 'Button1 text',
                    selected: true
                },
                {
                    text: 'Button2 text',
                    selected: true
                }
            ];
            hostFixture.detectChanges();
        };
        expect(errorThrowingFunction).toThrow();
    });

});

/*
describe('ButtonBarComponent', () => {
    let fixture: ComponentFixture<ButtonBarComponent>;
    let component: ButtonBarComponent;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ ButtonBarComponent ],
            imports: [ IonicModule.forRoot() ]
        }).compileComponents();
        fixture = TestBed.createComponent(ButtonBarComponent);
        component = fixture.componentInstance;
    }));
    
    it('should call commonCB() on button click', waitForAsync(() => {
        spyOn(component, 'commonCB');

        component.buttons = [{ text: 'Button text' }];
        fixture.detectChanges();
        let button = fixture.debugElement.nativeElement.querySelector('button');
        button.click();
        
        fixture.whenStable().then(() => {
            expect(component.commonCB).toHaveBeenCalled();
        });
    }));
});
*/
