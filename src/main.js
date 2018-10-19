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

      if (body.meta.total !== 0) {
        for (var i = 0; i < body.data.length; i++)
        {
          $(".list").append("<li>" + body.data[i].profile.first_name + " " + body.data[i].profile.last_name + "</li>");
        }
      }
      else {
        $(".list").append("Sorry, there's no match for your search.");
      }

    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });

  $("#symptom-search-form").submit(function(event) {
    event.preventDefault();
    $("#result").show();
    let symptomInput = $("#symptom").val();
    let doctorList = new DoctorSearch();
    let promise = doctorList.getDoctorBySymptoms(symptomInput);

    promise.then(function(response) {
      let body = JSON.parse(response);

      if (body.meta.total !== 0) {
        for (var i = 0; i < body.data.length; i++){
          $(".list").append("<li>" + body.data[i].profile.first_name + " " + body.data[i].profile.last_name + "</li>");
        }
      } else {
          $(".list").append("Sorry, there's no match for your search.")
        }

    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });
});
