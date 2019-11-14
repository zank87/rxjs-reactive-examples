import { Injectable } from '@angular/core'
import { UserApiService } from './user-api.service'
import { BehaviorSubject } from 'rxjs'
import { IProfile } from '../models/user/profile.model'
import { IUser } from '../models/user/user.model'

@Injectable({
  providedIn: 'root'
})
export class UserFacadeService {
  private userProfilesSource = new BehaviorSubject<IProfile[]>(null)
  userProfiles$ = this.userProfilesSource.asObservable()

  private usersSource = new BehaviorSubject<IUser[]>(null)
  users$ = this.usersSource.asObservable()

  private loadingSource = new BehaviorSubject<boolean>(false)
  loading$ = this.loadingSource.asObservable()

  constructor(private userApi: UserApiService) {}

  getProfiles() {
    this.loadingSource.next(true)
    this.userApi.getProfiles$().subscribe(profiles => {
      this.userProfilesSource.next(profiles)
      this.loadingSource.next(false)
    })
  }

  getUsers() {
    this.loadingSource.next(true)
    this.userApi.getUsers$().subscribe(users => {
      this.usersSource.next(users)
      this.loadingSource.next(false)
    })
  }
}
