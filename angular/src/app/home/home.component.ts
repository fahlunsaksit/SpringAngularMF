import { UserDetailsComponent } from './../user-details/user-details.component';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Observable, from } from 'rxjs';
=======
import { Observable } from 'rxjs';
>>>>>>> 3a242599b273b91980ad869744b5f1339f2af3a8
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
<<<<<<< HEAD
  comment:string;
  strA: string = '';

  str(user: User[]){
    this.strA= '';
    user.forEach(element => {
      this.strA += element.username +" /"; 
    });

  }


=======
>>>>>>> 3a242599b273b91980ad869744b5f1339f2af3a8

  constructor(private userService: UserService, private router: Router,private modalService: NgbModal) { }

  reloadData(){
<<<<<<< HEAD
    this.users = this.userService.getUserList();
    // this.users.subscribe(e =>{
    //   this.str(e);
    // });
=======
    this.users = this.userService.getUserList(); 
>>>>>>> 3a242599b273b91980ad869744b5f1339f2af3a8
  }

  ngOnInit() {
    this.reloadData();
  }


<<<<<<< HEAD
=======

>>>>>>> 3a242599b273b91980ad869744b5f1339f2af3a8
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
<<<<<<< HEAD
    modalRef.componentInstance.idFromHome = id;
=======
    modalRef.componentInstance.name = 'fah';
>>>>>>> 3a242599b273b91980ad869744b5f1339f2af3a8
  }

  openUserUpdate(id: number){
    // this.router.navigate(['update', id]);
    const modalRef = this.modalService.open(UpdateUserComponent,{size: 'lg'});
<<<<<<< HEAD
    modalRef.componentInstance.idFromHome = id;
    from(modalRef.result).subscribe(e =>{
      this.reloadData();
    });
  }

  open() {
    const modalRef = this.modalService.open(CreateUserComponent,{size: 'lg'});
    from(modalRef.result).subscribe(e =>{
      this.reloadData();
    })
    // modalRef.componentInstance.idFromHome = id;
=======
    modalRef.componentInstance.name = 'fah';
>>>>>>> 3a242599b273b91980ad869744b5f1339f2af3a8
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


<<<<<<< HEAD

=======
  open(content) {
    console.log('home');
    const modalRef = this.modalService.open(CreateUserComponent,{size: 'lg'});
    modalRef.componentInstance.name = 'fah';
  }
>>>>>>> 3a242599b273b91980ad869744b5f1339f2af3a8
}


