import { TestBed } from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { SearchFilterPipe } from './shared/pipes/search-filter.pipe';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        
      ],
      declarations: [
        AppComponent,
        SearchFilterPipe
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ir-dev-test'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ir-dev-test');
  });

  it("should render title", () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector(".content h2").textContent).toContain("Products");
  });
});
