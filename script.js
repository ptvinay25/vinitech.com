
function disp_alert(){
    if (confirm("click ok to continue"))
     window.location = "https://youtu.be/MOkDbOargB8";}

     function disp_alert(){
        if (confirm("click ok to continue"))
         window.location = "https://youtu.be/MOkDbOargB8";}
       


         function showrpwd() {
            var x = document.getElementById("pswd");
            if (x.type === "password") {
              x.type = "text";
            } else {
              x.type = "password";
            }
          }
      
          function showcpwd() {
            var x = document.getElementById("rswd");
            if (x.type === "password") {
              x.type = "text";
            } else {
              x.type = "password";
            }
          }
      
          function resetfunc()
      {
        document.getElementById("na").value="";
        document.getElementById("phno").value="";
        document.getElementById("eml").value="";
        document.getElementById("un").value="";
        document.getElementById("pswd").value="";
        document.getElementById("rswd").value="";
      }
      
        function registration()
      {
      
        var name= document.getElementById("na").value;
        var num= document.getElementById("phno").value;
        var email= document.getElementById("eml").value;
        var uname= document.getElementById("un").value;
        var pwd= document.getElementById("pswd").value;			
        var cpwd= document.getElementById("rswd").value;
        
        var phoneno = /^\d{10}$/;
            //email id expression code
        var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
        var letters = /^[A-Za-z]+$/;
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      
        if(name=='')
        {
          alert('Please enter your name');
        }
        else if(!letters.test(name))
        {
          alert('Name field required only alphabet characters');
        }
        else if(num==''){
          alert('enter phone number');
        }
        else if(!phoneno.test(num)){
          alert('enter valid phone number');
        }
        else if(email=='')
        {
          alert('Please enter your user email id');
        }
        else if (!filter.test(email))
        {
          alert('Invalid email');
        }
        else if(uname=='')
        {
          alert('Please enter the user name.');
        }
        else if(!letters.test(uname))
        {
          alert('User name field required only alphabet characters');
        }
        else if(pwd=='')
        {
          alert('Please enter Password');
        }
        else if(document.getElementById("pswd").value.length < 6)
        {
          alert ('Password minimum length is 6');
        }
        else if(document.getElementById("pswd").value.length > 12)
        {
          alert ('Password max length is 12');
        }
            else if(!pwd_expression.test(pwd))
        {
          alert ('Upper case, Lower case, Special character and Numeric letter are required in Password filed');
        }
        else if(cpwd=='')
        {
          alert('Enter Confirm Password');
        }
        else if(pwd != cpwd)
        {
          alert ('Password not Matched');
        }
        else
        {				                            
              alert('Thank You for Regestering & You are Redirecting to login page');
             // Redirecting to other page or webste code. 
             window.location = "#page-5"; 
        }
      }
      
      
      // script for login function.
      
      
      function showpwd() {
            var x = document.getElementById("lpswd");
            if (x.type === "password") {
              x.type = "text";
            } else {
              x.type = "password";
            }
          }
      
          function lesetfunc() {
            document.getElementById("lun").value="";
            document.getElementById("lpswd").value="";
            
          }
      
          function legistration()
      {
        var lmail= document.getElementById("lml").value;
        var lname= document.getElementById("lun").value;
        var lpwd= document.getElementById("lpswd").value;			
        
            //email id expression code
        var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
        var letters = /^[A-Za-z]+$/;
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        
        if(lmail=='')
        {
          alert('Please enter your user email id');
        }
        else if (!filter.test(lmail))
        {
          alert('Invalid email');
        }
        else if(lname=='')
        {
          alert('Please enter the user name.');
        }
        else if(!letters.test(lname))
        {
          alert('User name field required only alphabet characters');
        }
        else if(lpwd=='')
        {
          alert('Please enter Password');
        }
        else if(document.getElementById("lpswd").value.length < 6)
        {
          alert ('Password minimum length is 6');
        }
        else if(document.getElementById("lpswd").value.length > 12)
        {
          alert ('Password max length is 12');
        }
            else if(!pwd_expression.test(lpwd))
        {
          alert ('Upper case, Lower case, Special character and Numeric letter are required in Password filed');
        }
        else
        {				                            
              alert('Thank You for logging & You are Redirecting to home page');
             // Redirecting to other page or webste code. 
             window.location = "#page-1"; 
        }
      }

      /* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('i')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }