import { Component, OnInit } from '@angular/core'
import { UserFacadeService } from '../../services/user-facade.service'
import { Observable } from 'rxjs'
import { IProfile } from '../../models/user/profile.model'
import { IUser } from '../../models/user/user.model'
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  userProfiles$: Observable<IProfile[]> = this.usersFacade.userProfiles$
  users$: Observable<IUser[]> = this.usersFacade.users$
  loading$: Observable<boolean> = this.usersFacade.loading$
  filter: FormControl = new FormControl('');

  constructor(private usersFacade: UserFacadeService) {}

  ngOnInit() {}

  loadProfiles() {
    this.usersFacade.getProfiles()
  }

  loadUsers() {
    this.usersFacade.getUsers()
  }

  filterUsers() {
    // Filter user data in table
  }
}
