import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { IProfile } from '../models/user/profile.model'
import { delay } from 'rxjs/operators'
import { IUser } from '../models/user/user.model'

@Injectable({
  providedIn: 'root'
})
export class UserApiService {
  profileUrl = 'assets/mock-data/mock-profiles.json'
  userUrl = 'assets/mock-data/mock-users.json'

  constructor(private http: HttpClient) {}

  getProfiles$() {
    return this.http.get<IProfile[]>(this.profileUrl).pipe(delay(2000))
  }

  getUsers$() {
    return this.http.get<IUser[]>(this.userUrl).pipe(delay(2000))
  }
}
