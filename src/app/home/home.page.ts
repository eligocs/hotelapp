import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // default seclect option as placeholder
  booking = {
    filter: null
  };
  
  pending = {
    payment: null
  };

  constructor() {
    // get placeholder value
    this.booking.filter = "today";
    this.pending.payment = "today";
  }

  ngOnInit() {

    $(document).ready(function () {
      $(function () {
        $('.acc_title').click(function (j) {
          // const numItems = $('.bg-white').length;     
          // if(numItems == 0){
          //    $(this).closest('.main_div').find('.card_payments').toggleClass("bg-white");
          // }else{
          //   $(this).closest('.main_div').find('.card_payments').removeClass("bg-white");
          // }
          var dropDown = $(this).closest('.accordion').find('.accordion_body');
          $(this).closest('.acc_group').find('.accordion_body').not(dropDown).slideUp();

          if ($(this).hasClass('active')) {
            $(this).removeClass('active');
          } else {
            $(this).closest('.acc_group').find('.acc_title.active').removeClass('active');
            $(this).addClass('active');
          }

          dropDown.stop(false, true).slideToggle();
          j.preventDefault();
        });
      });
    });

  }

}
