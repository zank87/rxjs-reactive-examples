import { Injectable } from '@angular/core'
import { UserApiService } from './user-api.service'
import { BehaviorSubject } from 'rxjs'
import { IProfile } from '../models/user/user.model'

@Injectable({
  providedIn: 'root'
})
export class UserFacadeService {
  baseSearchData = ['']

  private userProfilesSource = new BehaviorSubject<IProfile[]>(null)
  userProfiles$ = this.userProfilesSource.asObservable()

  private loadingSource = new BehaviorSubject<boolean>(false)
  loading$ = this.loadingSource.asObservable()

  constructor(private userApi: UserApiService) {}

  getProfiles() {
    this.loadingSource.next(true)
    this.userApi.getProfiles$().subscribe(users => {
      this.userProfilesSource.next(users)
      this.loadingSource.next(false)
    })
  }
}
