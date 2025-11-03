import { Component, OnInit } from '@angular/core';
import { VehiculoService } from '../vehiculo.service';
import { Vehiculo } from '../vehiculo';

@Component({
  selector: 'app-vehiculo-list',
  templateUrl: './vehiculo-list.component.html',
  styleUrls: ['./vehiculo-list.component.css']
})
export class VehiculoListComponent implements OnInit {
  vehiculos: Vehiculo[] = [];
  conteoMarcas: { [marca: string]: number } = {};

  constructor(private vehiculoService: VehiculoService) { }

  getVehiculos(): void {
    this.vehiculoService.getVehiculos().subscribe((vehiculos) => {
      this.vehiculos = vehiculos;
      this.conteoMarcas = vehiculos.reduce((acc, v) => {
        acc[v.marca] = (acc[v.marca] || 0) + 1;
        return acc;
      }, {} as { [marca: string]: number });
    });
  }

  ngOnInit() {
    this.getVehiculos();
  }
}