import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  showMessage(msg: string): void{
    console.log(msg)
  }
}
