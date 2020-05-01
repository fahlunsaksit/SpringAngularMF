import { UserService } from './../user.service';
import { ActivatedRoute, Router } from '@angular/router';
<<<<<<< HEAD
import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
=======
import { Component, OnInit } from '@angular/core';
import { User } from '../user';
>>>>>>> 3a242599b273b91980ad869744b5f1339f2af3a8

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
<<<<<<< HEAD
  @Input() idFromHome;
  id:number;
  user: User;

  constructor(private route: ActivatedRoute,private router: Router, private userService: UserService  , public activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.user = new User();
    // this.id = this.route.snapshot.params['id'];
    this.id = this.idFromHome;
=======
  id: number;
  user: User;

  constructor(private route: ActivatedRoute,private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.user = new User();
    this.id = this.route.snapshot.params['id'];

>>>>>>> 3a242599b273b91980ad869744b5f1339f2af3a8
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
