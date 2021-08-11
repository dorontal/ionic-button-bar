import { By } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import {
    ButtonBarComponent
} from '../../components/button-bar//button-bar.component';

import { HomePage } from './home.page';

describe('HomePage', () => {
    let component: HomePage;
    let fixture: ComponentFixture<HomePage>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ HomePage, ButtonBarComponent ],
            imports: [ IonicModule.forRoot() ],
            schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
        }).compileComponents();

        fixture = TestBed.createComponent(HomePage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should run the callbacks', waitForAsync(() => {
        const ionButtonElements = fixture.debugElement.queryAll(
            By.css('ion-button'));

        spyOn(component.footerButtons[0], 'clickCB').and.callThrough();
        spyOn(component.footerButtons[1], 'clickCB').and.callThrough();
        spyOn(component.footerButtons[2], 'clickCB').and.callThrough();

        ionButtonElements.forEach(
            buttonElement => buttonElement.nativeElement.click()
        );

        fixture.whenStable().then(() => {
            expect(component.footerButtons[0].clickCB).toHaveBeenCalled();
            expect(component.footerButtons[1].clickCB).toHaveBeenCalled();
            expect(component.footerButtons[2].clickCB).toHaveBeenCalled();
        });
    }));

});
