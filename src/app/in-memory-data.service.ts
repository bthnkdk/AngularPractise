import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDATAService implements InMemoryDbService{

  createDb(){
    const movies = [
      {id:11,name:"The Green Mile",description:"TEST 1",imageUrl:"1.jpg"},
      {id:22,name:"The Shawhank Redemption",description:"TEST 2",imageUrl:"2.jpg"},
      {id:33,name:"Sunshine of the Spotless Mind",description:"TEST 3",imageUrl:"3.jpg"},
      {id:44,name:"Interstellar",description:"TEST 4",imageUrl:"4.jpg"}
  ];
  return {movies};
  }
  
  constructor() { }
}
