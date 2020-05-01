import { Component, OnInit } from '@angular/core';
import { Observable, from } from 'rxjs';
import { Content } from '../content';
import { ContentService } from '../content.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateContentComponent } from '../create-content/create-content.component';
import { UpdateContentComponent } from '../update-content/update-content.component';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {
  contents: Observable<Content[]>;

  constructor(private contentService: ContentService , private router: Router,private modalService: NgbModal) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData(){
    this.contents = this.contentService.getContentList();
  }

  openCreateContent() {
    const modalRef = this.modalService.open(CreateContentComponent,{size: 'lg'});
    from(modalRef.result).subscribe(e =>{
      this.reloadData();
    })
  }

  deleteContent(id:number){
    this.contentService.deleteContent(id).subscribe(data=>{
      console.log(data);
      this.reloadData();
    })
  }

  editContent(id:number){
    const modalRef = this.modalService.open(UpdateContentComponent,{size: 'lg'});
    modalRef.componentInstance.idFromHome = id;
    from(modalRef.result).subscribe(e =>{
      console.log(e);
      this.reloadData();
    })
  }




}
