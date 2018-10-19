# _Doctor Search_

#### _Advansed Javascript API Personal Project, October 2018_

#### By _**Mel Yasuda**_

## Description
This is a web application that will find a list of doctors for you. It utilizes the BetterDoctor API to retrieve information.

## Specification
* The program allows the user to enter a medical issue to receive a list of doctors in the Portland area that fit the search query.
* The program allows the user to  user to enter a name to receive a list of doctors in the Portland area that fit the search query.
If the query response includes any doctors, the following information about each doctor will be shown: first name, last name, address, phone number, website and whether or not the doctor is accepting new patients (the API provides this data).
* If the API call results in an error (any message not a 200 OK), the application returns a notification that states what the error is.
* If the query response doesn't include any doctors (for instance, if no doctors meet the search criteria), the application should return a notification that states that no doctors meet the criteria. (This is not an error so it should be handled separately from any errors.)

## Setup/Installation Requirements
1. Clone the following repository: https://github.com/MelYasuda/doctor-search
2. On terminal, go to galactic-age-calculator directory
3. Run "npm install"
4. Run "npm run start"

## Known Bugs
TBD

## Support and contact details
* Mel, yasudamel@gmail.com

## Technologies Used
* html
* CSS
* Javascript
* Jasmine
* Karma

### License

Copyright (c) 2018 **_Mel Yasuda, Epicodus_**
