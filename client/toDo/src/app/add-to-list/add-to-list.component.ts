import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-add-to-list',
  templateUrl: './add-to-list.component.html',
  styleUrls: ['./add-to-list.component.css']
})
export class AddToListComponent {

  toDoItem = this.formBuilder.group({
    dueDate: '',
    description: ''
  })

  constructor(private formBuilder: FormBuilder, private backendService: BackendService) {

  }

  handleSubmit() {
    this.backendService.addToList(this.toDoItem.value).subscribe(res => {
      console.log(res);
    });
  }
}
