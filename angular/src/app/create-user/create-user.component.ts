import { Router } from '@angular/router';
<<<<<<< HEAD
import { Component, OnInit , Input ,Output ,EventEmitter} from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { EventEmitter } from 'protractor';
=======
import { Component, OnInit , Input} from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
>>>>>>> 3a242599b273b91980ad869744b5f1339f2af3a8

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  @Input() name;
  user: User = new User();
  submitted = false;

<<<<<<< HEAD
  @Output()
  Confrim: EventEmitter<User> = new EventEmitter<User>();


=======
>>>>>>> 3a242599b273b91980ad869744b5f1339f2af3a8
  constructor(private userService: UserService, private router: Router
    , public activeModal: NgbActiveModal
    ) {}

  ngOnInit() {
  }

  newUser(): void {
    this.submitted = false;
    this.user = new User();
  }

  save(){
    this.userService.createUser(this.user)
<<<<<<< HEAD
      .subscribe(data => {
        console.log(data)
        this.user = new User();
        this.Confrim.emit(data);
        // this.gotoList();
        this.activeModal.close('Close click');
      },error => console.log(error));
  }

  onSubmit(){
    // window.alert(111);
=======
      .subscribe(data => console.log(data),error => console.log(error));
      this.user = new User();
      this.gotoList();
  }

  onSubmit(){
    window.alert(111);
>>>>>>> 3a242599b273b91980ad869744b5f1339f2af3a8
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/home']);
  }

}
