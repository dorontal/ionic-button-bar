import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ButtonBarComponent } from './button-bar.component';

describe('ButtonBarComponent', () => {
    let component: ButtonBarComponent;
    let fixture: ComponentFixture<ButtonBarComponent>;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ ButtonBarComponent ],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(ButtonBarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });


    it('should correctly render buttons', () => {
        component.buttons = [
            {
                text: 'buttton1',
                icon: 'folder-open',
                clickCB: () => console.log('test'),
                disabledCB: () => false
            }
        ];
        expect(component).toBeTruthy();
    });
});
