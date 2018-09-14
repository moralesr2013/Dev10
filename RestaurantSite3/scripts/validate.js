/*
Name: Ricardo Morales
Date Created: 9/14/2018
Most recent revision: 9/14/2018
*/

/*****************************************************************
    *CheckForm()
    *parameters: none
    *Function: This funtion will create values for each of the fields that
               require information to be put it. If any of the fields is empty
               it will send a message to the user that the folllowing field
               needs to be filled. If all fields are filled then it sends a
               message to the use saying all information is valid.
    *Return: none
*****************************************************************/
function CheckForm(){
  // create a value for each of the fields
  var Name = document.forms["ContactForm"]["Name"].value;
  var Email = document.forms["ContactForm"]["Email"].value;
  var Phone = document.forms["ContactForm"]["Phone"].value;
  var Info = document.forms["ContactForm"]["info"].value;
  var Visited = document.forms["ContactForm"]["Visited"];
  var Day = document.forms["ContactForm"]["day"];
  // ValidInfo is used as a flag to see if all values are valid
  var ValidInfo = true;
  // each if statement checks an individual field to see if it has any info
    // if the value is empty it sends a message to user to plase input that info.
  // it also sets the ValidInfo info flag to false since theres invalid info
  if (Name==""){
    alert("Please input Name.");
    ValidInfo = false;
  }
  if(Email==""){
    alert("Please input Email.");
    ValidInfo = false;
  }
  if(Phone==""){
    alert("Please input Phone.");
    ValidInfo = false;
  }
  if(Info==""){
    alert("Please input Additional Information.");
    ValidInfo = false;
  }
  if (Visited[0].checked == false && Visited[1].checked == false) {
    alert("Plase check if you have visit our restaurant.")
    ValidInfo = false;
  }
  if (Day[0].checked==false && Day[1].checked==false && Day[2].checked==false
      && Day[3].checked==false && Day[4].checked==false){
    alert("Please select a day to best contact you.")
    ValidInfo = false;
  }
  // if all the fields are valid it will send the alert to the user
  if (ValidInfo == true) {
    alert("All information is valid. Thank you for contacting us!")
  }



  return false;

}
