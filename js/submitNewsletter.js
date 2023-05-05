function submitNewsletterToAPI(e) {


    e.preventDefault();

         if ($("#newsletter-text").val()=="") {
             alert ("Please enter your email id");
             return;
         }
         var reeamil = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;
         if (!reeamil.test($("#newsletter-text").val())) {
             alert ("Please enter valid email address");
             return;
         }


    var email = $("#newsletter-text").val();
    var data = {
       "email" : email
     };

    $.ajax({
      type: "POST",
      url : "https://s2q68t5ax5.execute-api.us-east-1.amazonaws.com/dev/sendNewsletterEmail",
      dataType: "json",
      crossDomain: "true",
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify(data),

      
      success: function () {
        // clear form and show a success message
        alert("Successfull");
        document.getElementById("newsletter-text").value='';
      },
      error: function () {
        // show an error message
        alert("UnSuccessfull");
      }});

  }