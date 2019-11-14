import { Component, OnInit } from '@angular/core';
import { UserFacadeService } from '../../services/user-facade.service';
import { Observable } from 'rxjs';
import { IUser } from '../../models/user/user.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  userProfiles$: Observable<IUser[]> = this.usersFacade.userProfiles$;
  loading$: Observable<boolean> = this.usersFacade.loading$;

  constructor(private usersFacade: UserFacadeService) { }

  ngOnInit() {
  }

  loadUsers() {
    this.usersFacade.getUsers();
  }
}
