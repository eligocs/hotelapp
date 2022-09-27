import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  ngOnInit() {
    
    $(document).ready(function(){
      $(function() {
        $('.acc_title').click(function(j) {
          
          var dropDown = $(this).closest('.accordion').find('.accordion_body');
          $(this).closest('.acc').find('.accordion_body').not(dropDown).slideUp();
          
          if ($(this).hasClass('active')) {
            $(this).removeClass('active');
          } else {
            $(this).closest('.acc').find('.acc_title.active').removeClass('active');
            $(this).addClass('active');
          }
          
          dropDown.stop(false, true).slideToggle();
          j.preventDefault();
        });
      });
    });

  }

}
