import { Component } from '@angular/core';
import {ServiceService} from './service.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  obj:any=[];
  flag:boolean = false
  flag1:boolean = false


  id : string;
  title : string
  author : string
  idEditable : number
  
  constructor(private ServiceService : ServiceService) {}

  getdata()
  {
    this.flag = true;
    this.flag1 = true;
    this.ServiceService.getInfo().subscribe(Response=> this.obj=Response);
  }



  Button_name: String="Edit";
  onClick(id,title,author)
  {
    console.log("id clicked is ",id)   
    this.idEditable = id;
    if(this.Button_name === "Edit")
    {
      this.flag = false;
      this.id = id
      this.title = title
      this.author = author
      this.Button_name = "Ok"
    }
    else
    {
      this.flag = true;
      var data: any = {"id" : this.id,"title" : this.title,"author" : this.author}
      this.ServiceService.submitData(this.id,data).subscribe((Response:any) => {
      console.log("values updated");
      this.getdata()
      })
      this.Button_name ="Edit"
    }
  }


    change(i)
    {
      if(this.Button_name === "Edit")
      {
       return this.flag
      }
      else{
        return !this.flag&& i=== this.idEditable
      }
    }


    onDelete(id)
    {
  
      this.ServiceService.deleteMethod(id).subscribe((Response:any) => { } )

      this.getdata()
    }
   
    
  }
