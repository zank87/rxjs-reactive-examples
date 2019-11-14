import { Injectable } from '@angular/core';
import { UserApiService } from './user-api.service';
import { BehaviorSubject } from 'rxjs';
import { IUser } from '../models/user/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserFacadeService {

  private userProfilesSource = new BehaviorSubject<IUser[]>(null);
  userProfiles$ = this.userProfilesSource.asObservable();

  private loadingSource = new BehaviorSubject<boolean>(false);
  loading$ = this.loadingSource.asObservable();

  constructor(private userApi: UserApiService) {}

  getUsers() {
    this.loadingSource.next(true);
    this.userApi.getUsers$().subscribe(users => {
      this.userProfilesSource.next(users);
      this.loadingSource.next(false);
      }
    );
  }
}