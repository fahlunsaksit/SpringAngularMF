import { ContentService } from './../content.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { Content } from '../content';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.css']
})
export class CreateContentComponent implements OnInit {

  content:Content = new Content();

  @Output()
  confirm: EventEmitter<Content> = new EventEmitter<Content>();

  constructor(private contentService:ContentService,  private router: Router
    , public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  save(){
    this.contentService.createContent(this.content)
    .subscribe(data => {
      console.log(data);
      this.confirm.emit();
      this.activeModal.close('Close click');
    },error=>console.log(error));
  }

  onSubmit(){
    // window.alert(111);
    this.save();
  }

}
