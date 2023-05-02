function submitToAPI(e) {

   
    e.preventDefault();
    var URL = "https://nq0uxh113h.execute-api.us-east-1.amazonaws.com/01/contact-us";

         var Namere = /[A-Za-z]{1}[A-Za-z]/;
         if (!Namere.test($("#first-name").val())) {
                      alert ("First name can not less than 2 char");
             return;
         }
         if (!Namere.test($("#last-name").val())) {
            alert ("Last Name can not less than 2 char");
            return;
        }
         //var mobilere = /[+,0-9]{8,9,10,11}/;
         var mobilere = /^\+?[0-9][\d\- ]{4,14}\d$/;
         if (!mobilere.test($("#phone").val())) {
             alert ("Please enter valid mobile number");
             return;
         }
         if ($("#email").val()=="") {
             alert ("Please enter your email id");
             return;
         }
         var reeamil = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;
         if (!reeamil.test($("#email").val())) {
             alert ("Please enter valid email address");
             return;
         }

    var first_name = $("#first-name").val();
    var last_name = $("#last-name").val();
    var phone = $("#phone").val();
    var email = $("#email").val();
    var data = {
       "first_name" : first_name,
       "last_name" : last_name,
       "email" : email,
       "phone" : phone
     };

    $.ajax({
      type: "POST",
      url : "https://nq0uxh113h.execute-api.us-east-1.amazonaws.com/01/contact-us",
      dataType: "json",
      crossDomain: "true",
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify(data),

      
      success: function () {
        // clear form and show a success message
        alert("Successfull");
        document.getElementById("contact-form").reset();
        $("#enroll").modal('hide');
        //location.reload();
      },
      error: function () {
        // show an error message
        alert("UnSuccessfull");
      }});
  }