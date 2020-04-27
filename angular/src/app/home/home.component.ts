import { UserDetailsComponent } from './../user-details/user-details.component';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';
import { UserService } from '../user.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { CreateUserComponent } from '../create-user/create-user.component';
import { UpdateUserComponent } from '../update-user/update-user.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users: Observable<User[]>;
  closeResult = '';

  constructor(private userService: UserService, private router: Router,private modalService: NgbModal) { }

  reloadData(){
    this.users = this.userService.getUserList(); 
  }

  ngOnInit() {
    this.reloadData();
  }



  deleteUser(id: number) {
    this.userService.deleteUser(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  openUserDetails(id: number){
    // alert('ssssss');
    // this.router.navigate(['details', id]);
    const modalRef = this.modalService.open(UserDetailsComponent,{size: 'lg'});
    modalRef.componentInstance.name = 'fah';
  }

  openUserUpdate(id: number){
    // this.router.navigate(['update', id]);
    const modalRef = this.modalService.open(UpdateUserComponent,{size: 'lg'});
    modalRef.componentInstance.name = 'fah';
  }

  // open(content) {
  //   this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
  //     this.closeResult = `Closed with: ${result}`;
  //   }, (reason) => {
  //     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  //   });
  // }

  // private getDismissReason(reason: any): string {
  //   if (reason === ModalDismissReasons.ESC) {
  //     return 'by pressing ESC';
  //   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  //     return 'by clicking on a backdrop';
  //   } else {
  //     return `with: ${reason}`;
  //   }
  // }


  open(content) {
    console.log('home');
    const modalRef = this.modalService.open(CreateUserComponent,{size: 'lg'});
    modalRef.componentInstance.name = 'fah';
  }
}


