import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input('title') title;
  @Output('answer') answer = new EventEmitter<boolean>();

  constructor() {

  }

  ngOnInit(): void {

  }

  cancel() {
    this.answer.emit(false);
  }

  confirm() {
    this.answer.emit(true);
  }


}
