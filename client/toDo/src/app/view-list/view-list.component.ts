import { ChangeDetectorRef, Component } from '@angular/core';
import { BackendService } from '../backend.service';
import { ListItem } from '../types';

@Component({
  selector: 'app-view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.css']
})
export class ViewListComponent {

  list: ListItem[] = [];

  constructor(private backendService: BackendService, private ref:ChangeDetectorRef) {}

  ngOnInit(){
    this.updateList();
    // this.ref.detectChanges();
  }

  updateList () {
    this.backendService.getList().subscribe(res => {
      this.list = res;
      console.log(this.list);
    })

  }

  deleteListItem (event:any, item:any) {
    //use id
    console.log(event, item)
    this.backendService.deleteItem(item._id).subscribe(() => {console.log('deleting item')});

    let found = false;
    let i = 0;
    while(found === false || i > this.list.length) {
      console.log(this.list[i]._id, item._id)
      if (this.list[i]._id === item._id) {
        this.list.splice(i, 1);
        found = true;
      }
      i++;
    }
  }

}
