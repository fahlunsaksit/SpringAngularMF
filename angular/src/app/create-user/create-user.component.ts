import { Router } from '@angular/router';
import { Component, OnInit , Input} from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  @Input() name;
  user: User = new User();
  submitted = false;

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
      .subscribe(data => console.log(data),error => console.log(error));
      this.user = new User();
      this.gotoList();
  }

  onSubmit(){
    window.alert(111);
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/home']);
  }

}
