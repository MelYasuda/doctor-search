import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DoctorSearch } from './doctor-search.js';

$(document).ready(function() {
  $("#name-search-form").submit(function(event) {
    event.preventDefault();
    $("#result").show();
    let nameInput = $("#name").val();
    let doctorList = new DoctorSearch();
    let promise = doctorList.getDoctorByName(nameInput);

    promise.then(function(response) {
      let body = JSON.parse(response);

      // for(var i=0; i < body.data.length; i++) {
      //   let title = body.bikes[i].title;
      //   $(".list").append("<li>" + title +"</li>");
      // }

      $(".list").append("<li>" + body.profile.first_name +"</li>");

// .data.profile.first_name

    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });
});
