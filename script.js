function myFunc(){
   const fn = document.getElementById("fn").value;
   const ln = document.getElementById("ln").value;
   const un = document.getElementById("un").value;
   const ea = document.getElementById("ea").value;
   const ce = document.getElementById("ce").value;
   const pass = document.getElementById("pass").value;
   const cpass = document.getElementById("cpass").value;
   if(fn== ""){
      document.getElementById("err1").innerHTML = " Please enter your first name"
   }
   if(ln==""){
      document.getElementById("err2").innerHTML = " Please enter your last name"
   }
   if(un==""){
      document.getElementById("err3").innerHTML = " Please enter your username"
   }
   if(ea==""){
      document.getElementById("err4").innerHTML = " Please enter your Email Address"
   }
   if(ce==""){
      document.getElementById("err5").innerHTML = " Please Confirm Your Email Address"
   }
   if(ea === ce){
      document.getElementById("err5").innerHTML = ""
   }
   else{
      document.getElementById("err5").innerHTML = " Email Address doesn't match"
   }
   if(pass==""){
      document.getElementById("err6").innerHTML = " Please enter your Password"
   }
   if(cpass==""){
      document.getElementById("err7").innerHTML = " Please confirm Your password"
   }
   if(pass === cpass){
      document.getElementById("err7").innerHTML = ""
   }
   else{
      document.getElementById("err7").innerHTML = " Password doesn't match!"
   }
  if(pass.length < 7){
   document.getElementById("err6").innerHTML = " Minimum Password reqired 7 charecters"
  }
  if(cpass.length > 20){
   document.getElementById("err7").innerHTML = " Maximum Allowed 20 charecters"
  }
  
   
   return false;



}