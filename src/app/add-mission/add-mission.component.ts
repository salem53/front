import { MissionService } from './../services/missions/mission.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-mission',
  templateUrl: './add-mission.component.html',
  styleUrls: ['./add-mission.component.css']
})
export class AddMissionComponent implements OnInit {

  idMission:number=0;
  constructor(private router : Router, private route: ActivatedRoute,private service: MissionService) { }
  freelancer:any={};
  mission:any={};
  personnes: any;
client:any={};
  ngOnInit(): void {
  }


  newMission(form)
  {
    this.client={
      'id':parseInt(this.route.snapshot.params.idClient)
    }
    this.mission=
    {
      'id':null,
    'beginningDate':form.value.beginningDate,
    'duration':parseInt(form.value.duration),
   'filePath':"",
     'hired':"false",
     'completed':"false",
    'invited':"false",
     'title':form.value.title,
    'description':form.value.description,
    'averagePayment':parseInt(form.value.averagePayment),
     'freelancer':null,
    'client':this.client,
    'technologies':form.value.technologies,
    'contrat':""
    }
    this.service.createMission(this.mission).subscribe(result=>{this.personnes=result;this.idMission=result["id"]; console.log(result["id"]);this.onUpload(result["id"]);
    this.router.navigate(['post-project']);
    });

  }

  message:String;
  selectedFile: File;
  public onFileChanged(event) {
    //Select File
    this.selectedFile = event.target.files[0];
  }

  //Gets called when the user clicks on submit to upload the file
  onUpload(idMission) {
    console.log(this.selectedFile);

    //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
    this.service.updateFileMission(idMission, uploadImageData,this.message)

  }




}
