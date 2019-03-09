import { TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';
import {
  EmployeeListComponent,
  EmployeeViewComponent,
  SearchComponent,
} from './components';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        EmployeeListComponent,
        EmployeeViewComponent,
        SearchComponent,
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render visma logo', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('img').alt).toContain('Visma');
  });
});
