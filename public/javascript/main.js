function parallax() {
    setpos("#pb0");
    setpos("#pb1");
    setpos("#pb2", 4);
    setpos("#pb3");
    setpos("#pb4");
}

function setpos(element, factor) {
    factor = factor || 2;
    
    var offset = $(element).offset();
    var w = $(window);
    
    var posx = (offset.left - w.scrollLeft()) / factor;
    var posy = (offset.top - w.scrollTop()) / factor;

    
    $(element).css('background-position', '50% '+posy+'px');
    
    // use this to have parralax scrolling vertical and horizontal
    //$(element).css('background-position', posx+'px '+posy+'px');
}

$(document).ready(function(){

$("form").submit(function(e){
    e.preventDefault();
  });
$('#submit').click(function(){
    console.log('submitted');
    validateForm();   
});

function validateForm(){

    var nameReg = /^[A-Za-z]+$/;
    var numberReg =  /^[0-9]+$/;
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

    var name = $('#fname').val();
    var company = $('#fcompany').val();
    var email = $('#femail').val();
    var telephone = $('#ftelephone').val();
    var message = $('#fidea').val();

    var inputVal = new Array(name, company, email, telephone, message);

    var inputMessage = new Array("name", "company", "email address", "telephone number", "message");
        var errorCount = 0;
        $('.error').hide();
        if(!nameReg.test(name)){
            $('#lname').after('<span class="error">Only letters</span>');
            errorCount++;
        }

        if(inputVal[1] == ""){
            $('#lcompany').after('<span class="error"> Please enter your ' + inputMessage[1] + '</span>');
            errorCount++;
        }

        if(inputVal[2] == ""){
            $('#lemail').after('<span class="error"> Please enter your ' + inputMessage[2] + '</span>');
            errorCount++;
        } 
        else if(!emailReg.test(email)){
            $('#lemail').after('<span class="error"> Please enter a valid email address</span>');
            errorCount++;
        }

        if(inputVal[3] == ""){
            $('#ltelephone').after('<span class="error"> Please enter your ' + inputMessage[3] + '</span>');
            errorCount++;
        } 
        else if(!numberReg.test(telephone)){
            $('#ltelephone').after('<span class="error"> Numbers only</span>');
            errorCount++;
        }

        if(inputVal[4] == ""){
            $('#lidea').after('<span class="error"> Please enter your ' + inputMessage[4] + '</span>');
            errorCount++;
        }       
    if(!errorCount > 0){
        $.ajax({
          type: "POST",
          url: "http://bakerswenson.com/ajax/mail",
          data: {
            customer: name,
            company: company,
            email: email,
            telephone: telephone,
            message: message
          },
          success: function(){ alert('Summited');},
        });
    }
}   
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1200, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
});