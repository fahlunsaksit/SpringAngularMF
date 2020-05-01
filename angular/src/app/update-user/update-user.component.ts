<<<<<<< HEAD
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
 
=======
import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
>>>>>>> 3a242599b273b91980ad869744b5f1339f2af3a8

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
<<<<<<< HEAD
  @Input() idFromHome;
  @Output()
  Confrim: EventEmitter<User> = new EventEmitter<User>();

  id: number;
  user: User;

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService ,public activeModal: NgbActiveModal) { }
=======
  id: number;
  user: User;

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) { }
>>>>>>> 3a242599b273b91980ad869744b5f1339f2af3a8

  ngOnInit() {
    this.user = new User();

<<<<<<< HEAD
    // this.id = this.route.snapshot.params['id'];
    this.id = this.idFromHome;
=======
    this.id = this.route.snapshot.params['id'];

>>>>>>> 3a242599b273b91980ad869744b5f1339f2af3a8
    this.userService.getUser(this.id)
      .subscribe(data => {
        console.log(data);
        this.user = data;
      }, error => console.log(error));
  }

  updateUser(){
    this.userService.updateUser(this.id, this.user)
<<<<<<< HEAD
    .subscribe(data =>{
      console.log(data);
      this.Confrim.emit(data);
      this.activeModal.close('Close click');
    } , error => console.log(error));
=======
    .subscribe(data => console.log(data), error => console.log(error));
    this.user = new User();
    this.gotoList();
>>>>>>> 3a242599b273b91980ad869744b5f1339f2af3a8
  }

  onSubmit(){
    this.updateUser();    
  }

  gotoList() {
    this.router.navigate(['home']);
  }

}
