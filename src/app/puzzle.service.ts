import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PuzzleService {

  constructor( private httpClient: HttpClient ) { }

  getPuzzle() {
  
    return this.httpClient.get('../assets/puzzle.json');
 
  }
}
