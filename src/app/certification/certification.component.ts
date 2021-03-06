import { Certified, IdCertified } from './../models/infosFreelencer/certification';
import { CertificationService } from './../services/InfosFreelancer/certification.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.css']
})
export class CertificationComponent implements OnInit {

  constructor(private service: CertificationService, private router : Router, private route: ActivatedRoute) { }
  freelancer:any={};
  certified:Certified={};
  idCertified:IdCertified={};
  certif:any={};
  errorMessage = "You already have entered this certification ";
  invalid = false;

  ngOnInit(): void { }

  newCertification(form)
    {
     
      this.certif=
      {
        'name':form.value.name,
        'organism':form.value.organism,
        'id':0
      }
      this.certified.date=form.value.date;  
      this.certified.url=form.value.url;
        
      this.freelancer.id=parseInt(this.route.snapshot.params.idFreelancer);
      this.certified.file="";  
     // console.log(parseInt(this.route.snapshot.params.idFreelancer));
      this.certified.freelancer=this.freelancer;
      this.certified.idCertified=this.idCertified;

      this.service.getCertification(form.value.name,form.value.organism).subscribe(
        response => {
         
          if (response[0]==null)//this certification isn't already registred
           {
          this.service.createNewCertification(this.certif).subscribe( responses => { 
         
            this.certif=
            {
              'name':form.value.name,
              'organism':form.value.organism,
              'id':responses["id"] //idCertification
            }
        //  console.log(this.exp.id);
          this.certified.certification=this.certif; 
          this.service.createCertification(this.certified).subscribe( responsee => {
            this.onUpload(parseInt(this.route.snapshot.params.idFreelancer),responses["id"]);// console.log(responsee);
          }); 
          },error => {console.log('newerror', error),this.invalid=true;});                               
         }
         else
         {
          this.certif=
          {
          'company':form.value.company,
          'positionTitle':form.value.position,
          'id':response[0]["id"] //idCertification
           }
           this.certified.certification=this.certif; 
          //console.log(response[0]["id"]);
          this.service.createCertification(this.certified).subscribe( responsee => { console.log(responsee);this.onUpload(parseInt(this.route.snapshot.params.idFreelancer),response[0]["id"])},error => {console.log('newerror', error),this.invalid=true;});

         }
       
        }
        );
        this.router.navigate(['newsfeed-freelancer']) 
        }


  message:String;
  selectedFile: File;
  public onFileChanged(event) {
    //Select File
    this.selectedFile = event.target.files[0];
  }

  //Gets called when the user clicks on submit to upload the file
  onUpload(idFreelancer,idCertification) {
    console.log(this.selectedFile);
    
    //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
    this.service.updateFileCertification(idFreelancer,idCertification, uploadImageData,this.message);

  }
   
}


