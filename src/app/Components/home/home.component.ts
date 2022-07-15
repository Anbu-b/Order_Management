import { DatePipe } from '@angular/common';
import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Authentication/auth.service';
import { PagerService } from 'src/app/pager.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  selectedPageSize: any = 5;
  pagedItems: any = [];
  pager: any = {};
  HighlightRow: any;
  Fulllist: any = [
    { "orderNum": 10012321323, "orderDueDate": new Date('2022-04-12'), "custName": 'Arun', "custAdd": 'Chennai', "custPhn": 9843653432, "total": 1500 },
    { "orderNum": 10012321344, "orderDueDate": new Date('2023-11-11'), "custName": 'Raju', "custAdd": 'Mumbai', "custPhn": 9843653432, "total": 2700 },
    { "orderNum": 10012321555, "orderDueDate": new Date('2022-11-14'), "custName": 'Ram', "custAdd": 'Jaipur', "custPhn": 984443432, "total": 15400 },
    { "orderNum": 10012321239, "orderDueDate": new Date('2022-11-28'), "custName": 'Selva', "custAdd": 'Vishak', "custPhn": 9843653432, "total": 4500 },
    { "orderNum": 10012321367, "orderDueDate": new Date('2022-09-12'), "custName": 'Durai', "custAdd": 'Andhra', "custPhn": 9843653432, "total": 1533 },
    { "orderNum": 10012321555, "orderDueDate": new Date('2022-04-30'), "custName": 'Ram', "custAdd": 'Jaipur', "custPhn": 984443432, "total": 15400 },
    { "orderNum": 10012321239, "orderDueDate": new Date('2022-08-02'), "custName": 'Selva', "custAdd": 'Vishak', "custPhn": 9843653432, "total": 4500 },
    { "orderNum": 10012321367, "orderDueDate": new Date('2022-07-28'), "custName": 'Durai', "custAdd": 'Andhra', "custPhn": 9843653432, "total": 1533 }
  ];
  Model: string = '';
  showOverlay: string = '';
  btnname: string = 'Save';
  ModelList: any = {};
  Deletelist: any = {};
  ConfirmModal: boolean = false;
  confrmmsg: string = '';
  @ViewChild('orderform') CurrentForm: any = [];
  // orderform: NgForm=NgForm;
  constructor(
    private pagerService: PagerService, private router: Router, public datepipe: DatePipe,
    public authservice: AuthService) {
    this.pagerService.pageSize = this.selectedPageSize;
    this.pagedItems = [];
    this.ModelList = {};
  }
  ngOnInit(): void {
    this.setPage(1);
  }

  changePageSize() {
    this.pagerService.pageSize = parseInt(this.selectedPageSize);
    this.setPage(1);
  }
  setPage(page: number) {
    this.pager = this.pagerService.getPager(this.Fulllist.length, page);
    this.pagedItems = this.Fulllist.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }
  editfactor(list: any, index: any) {
    this.Model = 'block';
    this.showOverlay = 'yes';
    this.btnname = 'Update';
    this.ConfirmModal = false;
    this.ModelList = list;
    this.ModelList.orderDueDate = this.datepipe.transform(list.orderDueDate, 'yyyy-MM-dd');
  }
  NewOrder() {
    this.Model = 'block';
    this.showOverlay = 'yes';
    this.btnname = 'Save';
  }
  confirm() {
    if(this.confrmmsg == 'logout'){
      this.logout();
    }
    else{
      this.confrmmsg='';
     this.Delete();
    }
   
  }
  Delete(){
    let list = this.Deletelist;
    if (this.Fulllist.findIndex((xx: any) => xx.orderNum == list.orderNum) != -1) {
      let index = this.Fulllist.findIndex((xx: any) => xx.orderNum == list.orderNum);
      this.Fulllist.splice(index, 1);
    }
    this.close();
    this.setPage(1);
  }
  DeleteConfirm(list: any, index: any) {
    this.Deletelist = list;
    this.Model = 'block';
    this.showOverlay = 'yes';
    this.ConfirmModal = true;
    this.confrmmsg = 'delete';

  }
  submit() {
    if (this.btnname == 'Save') {
      this.Fulllist.push(this.ModelList);
    }
    else {
      if (this.Fulllist.findIndex((xx: any) => xx.orderNum == this.ModelList.orderNum) != -1) {
        let index = this.Fulllist.findIndex((xx: any) => xx.orderNum == this.ModelList.orderNum);
        this.Fulllist[index] = this.ModelList;
      }

    }
    this.close();
  }
  close() {
    this.Model = 'none';
    this.showOverlay = 'no';
    this.ModelList = {};
    this.ConfirmModal = false;
    this.Deletelist = {};
  }
  logout() {
    this.authservice.isloggedIn = false;
    this.authservice.postlogin = null;
    this.authservice.allowroute = true;
    this.router.navigate(['/Login']);

  }
  logoutconfirm() {
    this.confrmmsg = 'logout';
    this.Model = 'block';
    this.showOverlay = 'yes';
    this.ConfirmModal = true;

  }
}
