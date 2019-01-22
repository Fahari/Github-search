import { Injectable } from '@angular/core';
import { Users } from '../users';
import { Repo } from '../repo';
@Injectable({
  providedIn: 'root'
})
export class RequestService {
  users:Users;
  repo:Repo;
  newRepo:any;
  searchRepo:any;

  constructor() { }
}
