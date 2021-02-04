import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditShiftComponent } from './edit-shift.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { Shift } from 'src/app/models/shift';
import { User } from 'src/app/models/user';
import { DummyData } from 'src/app/dummydata';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

describe('EditShiftComponent', () => {
  let component: EditShiftComponent;
  let fixture: ComponentFixture<EditShiftComponent>;

  beforeEach(async () => {
    TestBed.resetTestEnvironment();
    TestBed.initTestEnvironment(BrowserDynamicTestingModule,
       platformBrowserDynamicTesting());
    await TestBed.configureTestingModule({
      declarations: [ EditShiftComponent ],
      imports: [ RouterTestingModule, HttpClientTestingModule, FormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditShiftComponent);
    component = fixture.componentInstance;
    TestBed.resetTestEnvironment();
    TestBed.initTestEnvironment(BrowserDynamicTestingModule,
       platformBrowserDynamicTesting());
    let data: DummyData  = new DummyData();
    const shift: Shift = data.getShift();
    component.shift = shift;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have input info', () => {
    expect(component.shift instanceof Shift).toBeTruthy();
  });
});
