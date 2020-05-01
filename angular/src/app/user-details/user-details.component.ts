import { UserService } from './../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  @Input() idFromHome;
  id:number;
  user: User;

  constructor(private route: ActivatedRoute,private router: Router, private userService: UserService  , public activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.user = new User();
    // this.id = this.route.snapshot.params['id'];
    this.id = this.idFromHome;
    this.userService.getUser(this.id)
      .subscribe(data => {
        console.log(data)
        this.user = data;
      },error => console.log(error));
  }

  list(){
    this.router.navigate(['home']);
  }

}
