import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VehiculoListComponent } from './vehiculo-list.component';
import { HttpClientModule } from '@angular/common/http';
import { Vehiculo } from '../vehiculo';

describe('VehiculoListComponent', () => {
  let component: VehiculoListComponent;
  let fixture: ComponentFixture<VehiculoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [VehiculoListComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(VehiculoListComponent);
    component = fixture.componentInstance;

    component.vehiculos = [
      new Vehiculo(1, 'Renault', 'Kangoo', 'Express', 2018, 25000, 'Blanco', ''),
      new Vehiculo(2, 'Chevrolet', 'Spark', 'Life', 2020, 10000, 'Rojo', ''),
      new Vehiculo(3, 'Mazda', '3', 'Touring', 2019, 30000, 'Negro', '')
    ];

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render 3 rows plus header', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const rows = compiled.querySelectorAll('tbody tr');
    expect(rows.length).toBe(3);
  });
  
});