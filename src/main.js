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
        $(".list").append("Addresses and Phones" + "<br>");

        for(var j = 0; j < body.data[i].practices.length; j++) {
            $(".list").append(body.data[i].practices[j].visit_address.street + " " + body.data[i].practices[j].visit_address.street2);
            $(".list").append(body.data[i].practices[j].visit_address.city);
            $(".list").append(body.data[i].practices[j].visit_address.state + "</br>");
            $(".list").append(body.data[i].practices[0].website + "<br>");
            if(body.data[i].practices[1].accepts_new_patients){
              $(".list").append("Accept new patients: Yes" + "<br>");
            } else {
              $(".list").append("Accept new patients: No" + "<br>");
            }
            $(".list").append("(#" + body.data[i].practices[j].phones[0].number + ")" + "<br>" + "<br>");
          }
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
        for (var i = 0; i < body.data.length; i++)
        {
        $(".list").append("<li>" + body.data[i].profile.first_name + " " + body.data[i].profile.last_name + "</li>");
        $(".list").append("Addresses and Phones" + "<br>");

        for(var j = 0; j < body.data[i].practices.length; j++) {
            $(".list").append(body.data[i].practices[j].visit_address.street + " " + body.data[i].practices[j].visit_address.street2);
            $(".list").append(body.data[i].practices[j].visit_address.city);
            $(".list").append(body.data[i].practices[j].visit_address.state + "</br>");
            $(".list").append("(#" + body.data[i].practices[j].phones[0].number + ")" + "<br>" + "<br>");
          }
          $(".list").append(body.data[i].practices[0].website + "<br>");
          if(body.data[i].practices[0].accepts_new_patients){
            $(".list").append("Accept new patients: Yes" + "<br>");
          } else {
            $(".list").append("Accept new patients: No" + "<br>");
          }
        }
      }
      else {
        $(".list").append("Sorry, there's no match for your search.");
      }

    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });
});
