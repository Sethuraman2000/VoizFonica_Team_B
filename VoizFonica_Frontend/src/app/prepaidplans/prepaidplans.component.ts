import { Component, OnInit } from '@angular/core';
import { Plans } from '../plans';
import { PlanserviceService } from '../planservice.service';

@Component({
  selector: 'app-prepaidplans',
  templateUrl: './prepaidplans.component.html',
  styleUrls: ['./prepaidplans.component.css']
})

export class PrepaidplansComponent implements OnInit {
  plans: any;
  sethu: any;
  deleteMessage: any;
  profileForm: any;

  constructor(private planService: PlanserviceService) {}

  ngOnInit(): void {
    this.sethu = 'sethu';
    this.planService.getPlanList().subscribe((data: any) => {
      console.log('Hii all');
      this.plans = data;
    });

  }

  plan: Plans = new Plans();
 

 
    
  

  deletedata(id:any){
    this.planService.deletePlan(id)
    .subscribe(
      data => {
        console.log(data);
        this.deleteMessage=true;
        this.planService.getPlanList().subscribe(data =>{
        this.plans =data
          })
      },
      error => console.log(error));
  }

  addplan() {
 
    this.planService.createPlan(this.plan)
      .subscribe(data => console.log(data), error => console.log(error));
    this.plan= new Plans();

  }
}

