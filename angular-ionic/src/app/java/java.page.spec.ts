import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JavaPage } from './java.page';

describe('JavaPage', () => {
  let component: JavaPage;
  let fixture: ComponentFixture<JavaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(JavaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
