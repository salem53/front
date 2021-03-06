import { FeedbacksFreelancerService } from './../services/reviews/feedbacks-freelancer.service';
import { CertificationService } from './../services/InfosFreelancer/certification.service';
import { ServiceExperienceService } from './../services/InfosFreelancer/service-experience.service';

import { StudyService } from './../services/InfosFreelancer/study.service';
import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { SkillService } from '../services/InfosFreelancer/skill.service';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-freelancer-newsfeed',
  templateUrl: './freelancer-newsfeed.component.html',
  styleUrls: ['./freelancer-newsfeed.component.css']
})
export class FreelancerNewsfeedComponent implements OnInit {

  // Gets called when the user clicks on retieve image button to get the image from back end


  // pdf contenent

  constructor(private httpClient: HttpClient, private studyService: StudyService,private experienceService: ServiceExperienceService,private certificationService: CertificationService,private skillService:SkillService, private feedbackService:FeedbacksFreelancerService ) {
    //this.getInformations();
    this.getImage();
    this.idFreelancer=sessionStorage.getItem("id");
    this.studyService.getListOfEducation(this.idFreelancer).subscribe(response=>{this.listStudies=response;});
  this.experienceService.getListOfExperiences(this.idFreelancer).subscribe(response=>{this.listExperiences=response;});
  this.certificationService.getListOfCertification(this.idFreelancer).subscribe(response=>{this.listCertifications=response;});
  this.skillService.getAllSkill(this.idFreelancer).subscribe(response=>{this.listSkills=response;});

  this.feedbackService.getFreelancerFeedback(parseInt(this.idFreelancer)).subscribe(response=>{console.log("freelancer feed done");this.listFeedbacks=response;console.log(this.listFeedbacks);});
      
  }
  listStudies:any;
  listExperiences:any;
  listCertifications:any;
  idFreelancer : string;
  listSkills:any;
  listFeedbacks:any;
  // image details
  selectedFile: File;

  Image = 'data:image/jpeg;base64,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';

  base64Data: any;

  freelancer: any;

  message: string;
  // session variables
  imageName: any;
  id;
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  description: string;
  earning: any;
  inscription_date: string;
  job: any;
  rating: any;
  sexe: any;
  telephone_number: any;
  nationality: any;
  //Gets called when the user clicks on retieve image button to get the image from back end



  //pdf content

  public docDefinition = {
    /*header: 'Resume',*/
    content: [
      {
        text: 'Resume',
        fontSize: 16,
        alignment: 'center',
        color: '#047886'
      },
      {
        text: sessionStorage.getItem('firstName') + ' ' + sessionStorage.getItem('lastName'),
        fontSize: 20,
        bold: true,
        alignment: 'center',
        decoration: 'underline',
        color: 'skyblue'
      },
      {
        text: 'Freelancer Details',
        style: 'sectionHeader'
      },
      {
        columns: [
          [
            {
              text: sessionStorage.getItem('firstName') + ' ' + sessionStorage.getItem('lastName'),
              bold: true
            },
            { text: sessionStorage.getItem('address')},
            { text: sessionStorage.getItem('username') },
            { text: sessionStorage.getItem('telephone_number') }
          ],
          [
            {
              text: `Date: ${new Date().toLocaleString()}`,
              alignment: 'right'
            },
            {
              text: `Bill No : ${((Math.random() * 1000).toFixed(0))}`,
              alignment: 'right'
            }
          ]
        ]
      },
      {
        text: 'Freelancer Details',
        style: 'sectionHeader'
      },
      {
        ul: [
          sessionStorage.getItem('description'),

        ],
      },
      {
        text: 'Skills Details',
        style: 'sectionHeader'
      },
      {
        table: {
          headerRows: 1,
          widths: ['*', 'auto', 'auto', 'auto'],
          body: [
            ['Language', 'skills', 'education', 'date'],
            ['French', 'Java', 'ensi', '19/05/2020'],
            ['english', 'c++', 'ensi', '29/05/2020'],
            ['arabic', 'linux', 'ensi', '29/05/2021'],

          ]
        }
      },
      {
        columns: [
          [{ qr: 'salem', fit: '50' }],
          [{ text: 'Signature', alignment: 'right', italics: true }],
        ]
      },

    ],
    styles: {
      sectionHeader: {
        bold: true,
        decoration: 'underline',
        fontSize: 14,
        margin: [0, 15, 0, 15]
      }
    }
  };

  
  ngOnInit(): void {
    this.email = sessionStorage.getItem("username");
    this.firstName = sessionStorage.getItem("firstName");
    this.lastName = sessionStorage.getItem("lastName");
    this.address=sessionStorage.getItem('address');
    this.description=sessionStorage.getItem('description');
    this.earning=sessionStorage.getItem('earning');
    this.inscription_date=sessionStorage.getItem('inscription_date');
    this.job=sessionStorage.getItem('job');
    this.rating=sessionStorage.getItem('rating');
    this.sexe=sessionStorage.getItem('sexe');
    this.telephone_number=sessionStorage.getItem('telephone_number');
    this.nationality=sessionStorage.getItem('nationality');

  
    

  }





  onChange(event) {
    this.selectedFile = event.target.files[0];
   // console.log(this.selectedFile);
    this.onUpload();
  }

  onUpload() {
    /*console.log('upload');
    console.log(this.selectedFile);*/

    // FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
    // Make a call to the Spring Boot Application to save the image
    this.httpClient.post('http://127.0.0.1:8070/freelancers/saveImageByEmail/' + sessionStorage.getItem('username'), uploadImageData, { observe: 'response' })
      .subscribe((response) => {
          if (response.status === 200) {
            this.message = 'Image uploaded successfully';
          } else {
            this.message = 'Image not uploaded successfully';
          }
          this.getImage();
        }
      );
  }
  getImage() {
    // Make a call to Sprinf Boot to get the Image Bytes.
    this.httpClient.get('http://127.0.0.1:8070/freelancers/getImageByEmail/' + sessionStorage.getItem('username'))

      .subscribe(

        res => {

          this.freelancer = res;
          //console.log(this.freelancer.image);
          if(this.freelancer.image != null) {
            this.base64Data = this.freelancer.image;
            this.Image = 'data:image/jpeg;base64,' + this.base64Data;
          }

          this.id = this.freelancer.id;
          this.email = this.freelancer.email;
          this.firstName = this.freelancer.firstName;
          this.lastName = this.freelancer.lastName;
          this.address = this.freelancer.address;
          this.description = this.freelancer.description;
          this.earning = this.freelancer.earning;
          this.inscription_date = this.freelancer.inscriptionDate;
          this.job = this.freelancer.job;
          this.rating = this.freelancer.rating;
          this.sexe = this.freelancer.rating;
          this.telephone_number = this.freelancer.telephoneNumber;
          this.nationality = this.freelancer.nationality;

          sessionStorage.setItem("id",this.id);
          sessionStorage.setItem('username', this.email);
          sessionStorage.setItem('firstName', this.firstName);
          sessionStorage.setItem('lastName', this.lastName);
          sessionStorage.setItem('address', this.address);
          sessionStorage.setItem('description', this.description);
          sessionStorage.setItem('earning', this.earning);
          sessionStorage.setItem('inscription_date', this.inscription_date);
          sessionStorage.setItem('job', this.job);
          sessionStorage.setItem('rating', this.rating);
          sessionStorage.setItem('sexe', this.sexe);
          sessionStorage.setItem('telephone_number', this.telephone_number);
          sessionStorage.setItem('nationality', this.nationality);

        }
      );

  }
  // create and open pdf in new window
  onOpen() {

    pdfMake.createPdf(this.docDefinition).open();

  }
  // create and print pdf
  onPrint() {

    pdfMake.createPdf(this.docDefinition).print();
  }
  // create and download pdf
  onDownload() {

    pdfMake.createPdf(this.docDefinition).download();
  }

  getFeedbacksAboutFreelancer()
  {
   
  }
  

  
  /*getInformations()
  {
   this.idFreelancer=sessionStorage.getItem("id");
    this.studyService.getListOfEducation(this.idFreelancer).subscribe(response=>{this.x=response[1]["education"];//console.log(response[1]["education"])
  });
  console.log(this.x);
  }
*/

}
