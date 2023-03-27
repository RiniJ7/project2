#PROJECT TITLE
A culinary journey through Canadian Provinces and Territories

#PROJECT DESCRIPTION
This is a command line based educator tool that displays the top two iconic foods of every province and territory of Canada

-What the app does?
The app let the user to get, delete, change and add province and their food details in the data object

-Technologies used?
npm,postman,figma

-Features to be implemented in future?
1)Create a front end that allows customer interaction with the data base
2)Store the information in a data base and retrieve the data. Also add recipes to the information
3)Gamefication of the tool where scores are recorded for the educator quiz.

#HOW TO INSTALL AND RUN THE PROJECT
1)clone the git file from git repository to local computer
command key: git clone
2)npm installation required as node modules are stored locally
command key : npm install
3)start the local server configured with the program
command key: npm start
4)Install Postman to test the project

#HOW TO USE THE PROJECT

1. List all the Provinces and their short codes
2. Select the province and display the top 2 iconic dishes
3. Select an iconic dish and get the description of the dish
4. Add a new province and their top iconic foods in the data object
5. Change the iconic foods of a province
6. Delete a province and its iconic foods front he data object

#AUTHOR
@Rini Joy

#LICENSE
none

#TESTS
The following are the list of test case scenarios. The expected outputs are also described here:

#Case1: GET Welcome message
input : http://localhost:5051/
output : Welcome to the Taste of Canada,
a culinary journey through Canadian provinces ..

#Case2: GET List of All Provinces with short codes
input: http://localhost:5051/intro
output:Please choose a province or territory from the list:
NL(Newfoundland and Labrador)
QC(Quebec)
MB(Manitoba)
PE(Prince Edward Island)
ON(Ontario)
NS(Nova Scotia)
NB(New Brunswick)
SK(Saskatchewan)
AB(Alberta)
BC(British Columbia)
YT(Yukon)
NT(Northwest Territories)
NU(Nunavut)

#Case3: POST Add a new province to the database
input: http://localhost:5051/choose
output:New item added

#Case4: GET Display iconic food by province
input: http://localhost:5051/choose/BC
raw data in JSON format:{
"name": "BC",
"food1": "Pacific Salmon",
"food2": "Dungeness Crab"
}

output: displays the list with the amended changes

#Case5: PATCH Change the iconic food of selected province
input: http://localhost:5051/choose/NT
raw data in JSON format:
{
"food1": "Smoked Salmon"
}
output: displays the list with the amended changes

#Case6: DELETE Delete a province and its details from the data object
input: http://localhost:5051/choose/SK
output : displays the list after deleted province

#Case7: GET Get all food description
input: http://localhost:5051/des
output: displays the list of all food names and description

#Case8: GET Get food description by food name
input: http://localhost:5051/des/Fiddleheads
output: {
"name": "Fiddleheads",
"description": "Very good food!"
}
