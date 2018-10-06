import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.css']
})
export class Demo2Component implements OnInit {

  result:string ="";
  category:string = "";
  fileName:string ="";
  fileTyp:string ="";
  imagePath:string="/src/assets/vietnam.png";

  result3:string;
  
  constructor() { }

  ngOnInit() {

  }

  clickMe():void{
    this.result = "Hhu You hit me"
    alert("Hello world");
  }

  display(event:any){
    this.result = "Hello " + event.target.value
  }

  selectCategory(event:any){
    this.category = event.target.value;
  }

  selectFile(event){
    alert("File upload");
    var selectFiles = event.target.file[0];
    this.fileName = "File name: " + selectFiles.name;
    this.fileTyp = "<b> File</b>:" + selectFiles.type
  }

  selectFiles(event:any){
    for (let index = 0; index < event.target.files.length; index++) {
      this.result3 += "<br>File name: " + event.target.files[index].name;
      this.result3 += "<br>File size: " + event.target.files[index].size;
      this.result3 += "<br>File type: " + event.target.files[index].type;
      this.result3 +="<hr>"
    }
  }

  selectNation(event:any){
    this.imagePath = "/src/assets/"+event.target.value
  }
}
