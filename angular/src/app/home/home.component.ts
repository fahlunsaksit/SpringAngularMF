import { UserDetailsComponent } from './../user-details/user-details.component';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UpdateUserComponent } from '../update-user/update-user.component';
import { Observable, from } from 'rxjs';
import { UserService } from '../user.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateUserComponent } from '../create-user/create-user.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users: Observable<User[]>;
  closeResult = '';
  comment:string;
  strA: string = '';

  str(user: User[]){
    this.strA= '';
    user.forEach(element => {
      this.strA += element.username +" /"; 
    });

  }



  constructor(private userService: UserService, private router: Router,private modalService: NgbModal) { }

  reloadData(){
    this.users = this.userService.getUserList();
    // this.users.subscribe(e =>{
    //   this.str(e);
    // });
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
    modalRef.componentInstance.idFromHome = id;
  }

  openUserUpdate(id: number){
    // this.router.navigate(['update', id]);
    const modalRef = this.modalService.open(UpdateUserComponent,{size: 'lg'});
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


}


