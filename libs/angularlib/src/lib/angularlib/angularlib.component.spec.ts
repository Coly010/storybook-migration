import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularlibComponent } from './angularlib.component';

describe('AngularlibComponent', () => {
  let component: AngularlibComponent;
  let fixture: ComponentFixture<AngularlibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularlibComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AngularlibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
