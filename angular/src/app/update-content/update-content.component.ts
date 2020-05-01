import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { ContentService } from '../content.service';
import { Content } from '../content';

@Component({
  selector: 'app-update-content',
  templateUrl: './update-content.component.html',
  styleUrls: ['./update-content.component.css']
})
export class UpdateContentComponent implements OnInit {

  @Input() idFromHome;

  @Output() 
  confirm: EventEmitter<Content> = new EventEmitter<Content>()

  id:number;
  content:Content;


  constructor(private route: ActivatedRoute , private router: Router , private contentService: ContentService , private activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.content = new Content();
    this.id = this.idFromHome;
    this.contentService.getContent(this.id).subscribe(data => {
      console.log(data);
      this.content = data;
    },error => console.log(error));
  }

  updateContent(){
    this.contentService.updateContent(this.id , this.content)
    .subscribe(data => {
      this.confirm.emit();
      this.activeModal.close('Close click');
    },error => console.log(error));
  }
  

  onSubmit(){
    this.updateContent();
  }

}
