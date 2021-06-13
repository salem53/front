import { Component, OnInit } from '@angular/core';
import { render } from 'creditcardpayments/creditCardPayments';
import {ActivatedRoute, Router} from '@angular/router';
import {MissionService} from '../services/missions/mission.service';
@Component({
  selector: 'app-paypal-test',
  templateUrl: './paypal-test.component.html',
  styleUrls: ['./paypal-test.component.css']
})
export class PaypalTestComponent implements OnInit {
  money: string;
  id;
  idMission;

  constructor(public router: Router ,public missionService : MissionService,public route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        this.money = params.get('money');
        this.id = params.get('id');
        console.log(this.money);
        console.log(this.id);

      }
    );
    render({
      currency: "USD",
        id:"#myPaypalButtons",
        value:this.money,

      onApprove: (details ) => {
        this.missionService.setMissionAsCompleted(this.id).subscribe(
          value => {
            alert("transaction completed successfully");
            //this.router.navigate(['post-project'])
           // this.router.navigate(['giveFeedbackClient/'+this.id+'/'+this.idMission]);
          }
        )



    }
    });

  }

}
