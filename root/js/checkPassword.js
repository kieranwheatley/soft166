//Function to check the inputted password against a defined criteria
function validatePassword(){
  var password = document.getElementById('passwordToTest').value;
//Check length is greater than 9
  var count = document.getElementById('1').getElementsByClassName('fa')[0];
  count.className = password.length > 9 ? "fa fa-check" : "fa fa-times";
  count.style.color = password.length > 9 ? "green" : "red";
  var hue = hasPass ? "25500" : "65535";
  var check = password.length > 9 ? true : false;

  if (check === true)
  {
    turnLightGreen(1);
  }
  else
  {
    turnLightRed(1);
  }

//Check the password contains a special character
  var hasSpecialChar = new RegExp('[!@#$%^&*(),.?":{}|<>]').test(password);
  var special = document.getElementById('4').getElementsByClassName('fa')[0];
  special.className = hasSpecialChar ? "fa fa-check" : "fa fa-times";
  special.style.color = hasSpecialChar ? "green" : "red";
  if (hasSpecialChar === true)
  {
    turnLightGreen(4);
  }
  else
  {
    turnLightRed(4);
  }
//Check the password contains an uppercase character
  var hasUpper = new RegExp('[A-Z]').test(password);
  var upper = document.getElementById('2').getElementsByClassName('fa')[0];
  upper.className = hasUpper ? "fa fa-check" : "fa fa-times";
  upper.style.color = hasUpper ? "green" : "red";
  toggleLight(document.getElementById('2'), hasUpper);
  if (hasUpper === true)
  {
    turnLightGreen(2);
  }
  else
  {
    turnLightRed(2);
  }

//Check the password contains a lowercase character
  var hasLower = new RegExp('[a-z]').test(password);
  var lower = document.getElementById('3').getElementsByClassName('fa')[0];
  lower.className = hasLower ? "fa fa-check" : "fa fa-times";
  lower.style.color = hasLower ? "green" : "red";
  toggleLight(document.getElementById('3'), hasLower);
  if (hasLower === true)
  {
    turnLightGreen(3);
  }
  else
  {
    turnLightRed(3);
  }
//Check the password contains a number
  var hasNum = new RegExp('[0-9]').test(password);
  var num = document.getElementById('5').getElementsByClassName('fa')[0];
  num.className = hasNum ? "fa fa-check" : "fa fa-times";
  num.style.color = hasNum ? "green" : "red";
  toggleLight(document.getElementById('5'), hasNum);
  if (hasNum === true)
  {
    turnLightGreen(5);
  }
  else
  {
    turnLightRed(5);
  }

//Checks that the password does NOT contain the word 'Password'
  var hasPass = password.toLowerCase().includes('password');
  var pass = document.getElementById('6').getElementsByClassName('fa')[0];
  pass.className = hasPass ? "fa fa-times" : "fa fa-check";
  pass.style.color = hasPass ? "red" : "green";
  var hue = hasPass ? "65535" : "25500";
  toggleLight(document.getElementById('6'), hasPass);
  if (hasPass === true)
  {
    turnLightRed(6);
  }
  else
  {
    turnLightGreen(6);
  }
}
//Function for toggling the light's state
function toggleLight(element, state){
  $.ajax({
    url: getLightURI(element) + "state/",
    type: "PUT",
    data: JSON.stringify({"on" : state})
  });
}
//Function for adding the Hue lights bridge details together for the PUT command for API
function getLightURI(element)
{
  var IP = "http://192.168.0.50/api/";
  var username = "stlaB2I6VZ8O80Qepc-1xfmLrHgyTFvB9IGupaQz";
  var lights = "/lights/";
  var URI = IP + username + lights;
  return URI + element + "/";
}
//Function for setting the light to green
function turnLightGreen(element){
  var lightState = {hue: 25500, "on":true, "sat":255, "bri":120};
  $.ajax({
    url: getLightURI(element) + "state/",
    type: "PUT",
    data: JSON.stringify(lightState)
  });
}
//Function for setting the light to red
function turnLightRed(element){
  var lightState = {hue: 65535, "on":true, "sat":255, "bri":120};
  $.ajax({
    url: getLightURI(element) + "state/",
    type: "PUT",
    data: JSON.stringify(lightState)
  });
}
