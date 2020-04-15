import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CongratulationsPage } from './congratulations.page';

describe('CongratulationsPage', () => {
  let component: CongratulationsPage;
  let fixture: ComponentFixture<CongratulationsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CongratulationsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CongratulationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
