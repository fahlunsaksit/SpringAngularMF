import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
 

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  @Input() idFromHome;
  @Output()
  Confrim: EventEmitter<User> = new EventEmitter<User>();

  id: number;
  user: User;

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService ,public activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.user = new User();

    // this.id = this.route.snapshot.params['id'];
    this.id = this.idFromHome;
    this.userService.getUser(this.id)
      .subscribe(data => {
        console.log(data);
        this.user = data;
      }, error => console.log(error));
  }

  updateUser(){
    this.userService.updateUser(this.id, this.user)
    .subscribe(data =>{
      console.log(data);
      this.Confrim.emit(data);
      this.activeModal.close('Close click');
    } , error => console.log(error));
  }

  onSubmit(){
    this.updateUser();    
  }

  gotoList() {
    this.router.navigate(['home']);
  }

}
