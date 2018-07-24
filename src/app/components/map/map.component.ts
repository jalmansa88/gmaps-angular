import { Component, OnInit } from '@angular/core';
import { Marcador } from '../classes/marcador.class';
import { MatSnackBar } from '@angular/material';
import { MatDialog, MatDialogRef } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { MapEditComponent } from './map-edit.component';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  
  marcadores: Marcador[] = [];

  lat = 51.678418;
  lng = 7.809007;
  
  constructor(public snackBar: MatSnackBar,
              public dialog: MatDialog) { 

    if (localStorage.getItem('marcadores')) {
      this.marcadores = JSON.parse(localStorage.getItem('marcadores'));
    }
  }

  ngOnInit() {
  }

  agregarMarcador(event) {
    const coords = event.coords;

    const newMark = new Marcador(coords.lat, coords.lng);

    this.marcadores.push(newMark);
    
    this.guardarStorage();
    this.snackBar.open('Marcador agregado', 'Cerrar', {duration: 2000});
  }

  guardarStorage() {
    localStorage.setItem('marcadores', JSON.stringify(this.marcadores));
  }

  borrarMarcador(markIndex: number) {
    this.marcadores.splice(markIndex, 1);
    this.guardarStorage();
    this.snackBar.open('Marcador borrado', 'Cerrar', {duration: 2000});
  }

  editarMarcador(marcador: any) {

    const dialogRef = this.dialog.open(MapEditComponent, {
      width: '250px',
      data: {titulo: marcador.titulo, desc: marcador.desc}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);

      if (!result) {
        return;
      }

      marcador.titulo = result.titulo;
      marcador.desc = result.desc;

      this.guardarStorage();
      this.snackBar.open('Marcador updated', 'Cerrar', {duration: 2000});
    });
  }

}
