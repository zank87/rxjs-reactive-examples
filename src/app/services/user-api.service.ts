import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { IProfile } from '../models/user/user.model'
import { delay } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UserApiService {
  url = 'assets/mock-data/mock-users.json'

  constructor(private http: HttpClient) {}

  getProfiles$() {
    return this.http.get<IProfile[]>(this.url).pipe(delay(2000))
  }

  get;
}
