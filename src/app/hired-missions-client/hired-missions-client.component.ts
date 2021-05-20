import { Component, OnInit } from '@angular/core';
import {ClientService} from '../services/client/client.service';
import {MissionService} from '../services/missions/mission.service';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-hired-missions-client',
  templateUrl: './hired-missions-client.component.html',
  styleUrls: ['./hired-missions-client.component.css']
})
export class HiredMissionsClientComponent implements OnInit {
  missions;
  constructor(public service : MissionService) { }

  ngOnInit(): void {
    this.service.getHiredMissionsForClient(sessionStorage.getItem('id')).subscribe(value =>
    {
      this.missions=value;
    })
  }

  generateContract(mission) {
    console.log(mission);
    const docDefinition = {
      /*header: 'Resume',*/
      content: [
        {
          text: 'Contract',
          fontSize: 18,
          bold: true,
          alignment: 'center',
          color: '#047886'
        },
        {
          text: "Project Name : "+mission.title+"\n\n",
          fontSize: 20,
          decoration: 'underline',
          color: 'skyblue',
          bold: true,
          alignment: 'center',


        },
        {
          text: 'Project Details\n\n',
          bold: true,
          fontSize: 16,
          decoration: 'underline',
          color: 'red',
        },
        {
          columns: [
            [
              {
                text: "Description : "+mission.description +"\n\n",

              },
              { text: "Price :" +mission.averagePayment+"$\n\n"},
              { text: "Technologies :" +mission.technologies +"\n\n"},
            ],
            [
              {
                text: `Date: ${new Date().toLocaleString()}`+"\n\n",
                alignment: 'right'
              },



            ],
          ]
        },
        {
          columns: [ [
            {
              text: 'Client Details\n\n',

              bold: true,
              fontSize: 16,
              decoration: 'underline',
              color: 'red',

            },

            {
              text: "Client Name : " + mission.client.firstName +" "+mission.client.lastName+"\n\n",

            },
            {
              text: "Client Description : " + mission.client.description+"\n\n",

            },
            {
              text: "Client Nationality : " + mission.client.nationality+"\n\n",

            },

            {
              text: "Client Email : " + mission.client.email+"\n\n",

            },
            {
              text: "Client Telephone Number : " + mission.client.telephoneNumber+"\n\n",

            }
          ],
            [
              {
                text: '',

              },
            ],
            [
              {
                text: 'Freelancer Details\n\n',

                bold: true,
                fontSize: 16,
                decoration: 'underline',
                color: 'red',

              },

              {
                text: "Freelancer Name : " + mission.freelancer.firstName +" "+mission.freelancer.lastName+"\n\n",

              },
              {
                text: "Freelancer Description : " + mission.freelancer.description+"\n\n",

              },
              {
                text: "Freelancer Nationality : " + mission.freelancer.nationality+"\n\n",

              },

              {
                text: "Freelancer Email : " + mission.freelancer.email+"\n\n",

              },
              {
                text: "Freelancer Telephone Number : " + mission.freelancer.telephoneNumber+"\n\n",

              }
            ]

          ]
        }
      ],




      styles: {
        sectionHeader: {
          bold: true,
          decoration: 'underline',
          fontSize: 14,

        }
      }
    };
    pdfMake.createPdf(docDefinition).open();


  }
}
