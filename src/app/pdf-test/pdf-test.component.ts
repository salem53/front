import { Component, OnInit } from '@angular/core';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-pdf-test',
  templateUrl: './pdf-test.component.html',
  styleUrls: ['./pdf-test.component.css']
})
export class PdfTestComponent implements OnInit {
  //pdf content
  docDefinition = {
    pageMargins: [0, 0, 30, 0],
    info: {
      title: 'My CV',
      author: 'Muhammed Athimannil',
      subject: 'CV',
    },
    content: [{
      table: {
        headerRows: 1,
        widths: [160, '*' ],
        body: [
          [ {
            fillColor: '#ebebeb',
            color: '#000',
            text: '',
          }, {
            fontSize: 24,
            fillColor: '#fff',
            margin: [10, 25, 0, 20],
            text: 'Muhammed Athimannil'
          }],
          [{
            fillColor: '#ebebeb',
            color: '#000',
            fontSize: 10,
            bold: true,
            margin: [10, -30, 0, 0],
            text: ['M: +971 50 794368\n', 'hello@athimannil.com\n', 'www.athimannil.com\n\n', 'Dubai - UAE']
          },
            [
              {
                margin: [-5, 0, 0, 0],
                table: {
                  widths: ['140'],
                  body: [
                    [{
                      fontSize: 11,
                      bold: true,
                      fillColor: '#ebebeb',
                      margin: [15, 3, 0, 3],
                      text: 'PROFILE'
                    }]
                  ]
                },
                layout: 'noBorders'
              }, {
              text: [
                'I am a technical enthusiast having outstanding skills and passion for Web Development. I find it really thrilling to collaborate designing & programming and to be a web developer. I have experience in developing Front-End, with the goal of delivering cutting edge user interface. \n\n',
                'I am fond of  implementing modern emerging  technologies such as HTML5, CSS3, AngularJS, Gulp and different kinds of frameworks and integrating them together to keep cross browser compatibility with pixel perfection. I strive to write codes of the highest standard and bug fix in an efficient and extensible way. I would like to have bright career in the same field where I can contribute my skills to the maximum. \n'
              ],
              style: ['summaryStyle']
            }, {
              margin: [-5, 0, 0, 0],
              table: {
                widths: ['140'],
                body: [
                  [{
                    fontSize: 11,
                    bold: true,
                    fillColor: '#ebebeb',
                    margin: [15, 3, 0, 3],
                    text: 'WORK EXPERIENCE'
                  }]
                ]
              },
              layout: 'noBorders'
            }, {
              table: {
                widths: ['60%', '40%'],
                body: [
                  [{
                    text: 'Front End Software Developer, Brndstr',
                    style: 'titleStyle'
                  }, {
                    text: 'Aug 2013 - Present',
                    style: 'titleStyle'
                  }],
                  [{
                    text: 'Translating complex UX/UI designs, focusing on HTML5, SVG, CSS3, JavaScript and AngularJS.',
                    colSpan: 2,
                    style: ['experienceStyle']
                  }],
                  [{
                    text: 'UI Developer, Psybo Technologies',
                    style: 'titleStyle'
                  }, {
                    text: 'Feb 2015 - Aug 2015',
                    style: 'titleStyle'
                  }],
                  [{
                    text: 'As one of the key front end developer in a start up company I am responsible for developing Web Applications and App building platform for "my money management" web app. I used to build fully responsive single page web app using HTML5, CSS3, Bootstrap 3, Sass and AngularJS, for a personal money management system.',
                    colSpan: 2,
                    style: ['experienceStyle']

                  }],
                  [{
                    text: 'Developer, LEO',
                    style: 'titleStyle'
                  }, {
                    text: 'Nov 2013 - Dec 2014',
                    style: 'titleStyle'
                  }],
                  [{
                    text: 'I work with the e-learning web app(gomolearning.com) team for making beautiful interface in HTML for multi-device. And also participating the Moodle development team for theme building in twitter bootstrap.',
                    colSpan: 2,
                    style: ['experienceStyle']
                  }],
                  [{
                    text: 'Front-End Developer, Design-Portfolio',
                    style: 'titleStyle'
                  }, {
                    text: 'Aug 2013 - Sep 2013',
                    style: 'titleStyle'
                  }],
                  [{
                    text: 'I responsible to crop/slice the designs and develop all the Web Interfaces in HTML5, CSS3, Javascript, jQuery and Google Maps API.',
                    colSpan: 2,
                    style: ['experienceStyle']
                  }],
                  [{
                    text: 'Front-End Developer, Huntsworth Health',
                    style: 'titleStyle'
                  }, {
                    text: 'Apr 2013 - Jun 2013',
                    style: 'titleStyle'
                  }],
                  [{
                    text: 'I build HTML5 iPad application that is distributed via a 3rd party solution. The  application is in landscape and is animated with graphs and diagrams. Further more I have done responsive design with twitter bootstrap and cross browser compatibility ',
                    colSpan: 2,
                    style: ['experienceStyle']
                  }],
                  [{
                    text: 'Front-End Developer, UI Centric',
                    style: 'titleStyle'
                  }, {
                    text: 'Sep 2011 - Mar 2013',
                    style: 'titleStyle'
                  }],
                  [{
                    text: 'I work primarily on BT project with charismatic group of UX designers where I was responsible for the front-end development. I constantly keep in touch with the back-end developers abroad, and our clients based in London. Moreover I have given HTML5, CSS3 & Javascript support on application for Microsoft too.',
                    colSpan: 2,
                    style: ['experienceStyle']
                  }],
                  [{
                    text: 'Web Developer, Digimobjobs ',
                    style: 'titleStyle'
                  }, {
                    text: 'Apr 2011 - Sep 2011',
                    style: 'titleStyle'
                  }],
                  [{
                    text: 'The website was really outdated by not using any recent advancements in the web developing. I did completely redesign it with latest state-of-the-art technologies. I was responsible for a variety of tasks including Front-End, Back-End, User Experience, Server setup and maintenance.',
                    colSpan: 2,
                    style: ['experienceStyle']
                  }],
                  [{
                    text: 'Freelance Web Developer',
                    style: 'titleStyle'
                  }, {
                    text: 'Feb 2009 - Dec 2010',
                    style: 'titleStyle'
                  }],
                  [{
                    text: 'As a freelance developer I used to work on short term and long term projects.',
                    colSpan: 2,
                    style: ['experienceStyle']
                  }],
                ]
              },
              style: ['summaryStyle'],
              layout: 'noBorders'
            }, {
              margin: [-5, 0, 0, 0],
              table: {
                widths: ['140'],
                body: [
                  [{
                    fontSize: 11,
                    bold: true,
                    fillColor: '#ebebeb',
                    margin: [15, 3, 0, 3],
                    text: 'EDUCATION'
                  }]
                ]
              },
              layout: 'noBorders'
            }, {
              table: {
                widths: ['60%', '40%'],
                body: [
                  [{
                    text: 'MSc Internet Applications Development',
                    style: 'titleStyle'
                  }, {
                    text: 'Sep 2009 - Sep 2010',
                    style: 'titleStyle'
                  }],
                  [{
                    text: 'London Metropolitan University',
                    colSpan: 2,
                    style: ['experienceStyle']
                  }],
                  [{
                    text: 'Graduation Certificate in Computing',
                    style: 'titleStyle'
                  }, {
                    text: 'Jan 2009 - Aug 2009',
                    style: 'titleStyle'
                  }],
                  [{
                    text: 'London Metropolitan University',
                    colSpan: 2,
                    style: ['experienceStyle']

                  }]
                ]
              },
              style: ['summaryStyle'],
              layout: 'noBorders'
            }, {
              margin: [-5, 0, 0, 0],
              table: {
                widths: ['140'],
                body: [
                  [{
                    fontSize: 11,
                    bold: true,
                    fillColor: '#ebebeb',
                    margin: [15, 3, 0, 3],
                    text: 'SKILLS'
                  }]
                ]
              },
              layout: 'noBorders'
            }, {
              table: {
                widths: [60, '*'],
                body: [
                  [{
                    text: 'Excellent:',
                    style: 'titleStyle'
                  }, {
                    text: 'HTML/CSS, HTML5/CSS3, JavaScript/jQuery, Bootstrap and Sass/Compass'
                  }],
                  [{
                    text: 'Advanced:',
                    style: 'titleStyle'
                  }, {
                    text: 'AngularJS , JSON,  API, SVG, Gulp, Bower and Moodle'
                  }],
                  [{
                    text: 'Basic:',
                    style: 'titleStyle'
                  }, {
                    text: 'PHP/MySQL, Wordpress, Rapha??l and Cordova'
                  }]
                ]
              },
              style: ['summaryStyle'],
              layout: 'noBorders'
            }, {
              margin: [-5, 0, 0, 0],
              table: {
                widths: ['140'],
                body: [
                  [{
                    fontSize: 11,
                    bold: true,
                    fillColor: '#ebebeb',
                    margin: [15, 3, 0, 3],
                    text: 'REFERENCES'
                  }]
                ]
              },
              layout: 'noBorders'
            }, {
              text: [
                'Available up on request',
              ],
              style: ['summaryStyle']
            }
            ]
          ]
        ]
      },
      layout: 'noBorders'
    }],
    styles: {
      summaryStyle: {
        fontSize: 10,
        alignment: 'justify',
        margin: [10, 10, 0, 10],
      },
      titleStyle: {
        bold: true,
        margin: [0, 0, 0, -2]
      },
      experienceStyle: {
        margin: [0, 0, 0, 10]
      }
    },
    defaultStyle: {
      color: '#000'
    }
  };
  /*public docDefinition = {
    header: 'Resume',
    content: [
      {
        text: 'Salem DH',
        fontSize: 16,
        alignment: 'center',
        color: '#047886'
      },
      {
        text: 'INVOICE',
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
              text: "Salem Dhouimir",
              bold: true
            },
            { text: "street of sousse 5021"},
            { text: "salem.dhouimir@ensi-uma.tn" },
            { text: "+216 29 161 373" }
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
        text: 'Order Details',
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
          [{ qr: "salem", fit: '50' }],
          [{ text: 'Signature', alignment: 'right', italics: true }],
        ]
      },
      {
        ul: [
          'Order can be return in max 10 days.',
          'Warrenty of the product will be subject to the manufacturer terms and conditions.',
          'This is system generated invoice.',
        ],
      }
    ],
    styles: {
      sectionHeader: {
        bold: true,
        decoration: 'underline',
        fontSize: 14,
        margin: [0, 15, 0, 15]
      }
    }
  };*/
  constructor() { }

  ngOnInit(): void {
  }

  //create and open pdf in new window
  onOpen() {

    pdfMake.createPdf(this.docDefinition).open();

  }
  //create and print pdf
  onPrint() {

    pdfMake.createPdf(this.docDefinition).print();
  }
  //create and download pdf
  onDownload() {

    pdfMake.createPdf(this.docDefinition).download();
  }
}
