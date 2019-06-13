//selecting and storing my varibles//
const $name=$('#name');
const $colorDiv=$('#colors-js-puns');
const $color=$('#color');
const $button=$('#button');
const $design=$('#design');


//selecting the "name" element and calling focus to it//
$( document ).ready(function() {
  $( "name" ).focus();


 //create a function to target the “other” option to the Job Role section and hide it//                   
$('.basic-info').append('<input type="text" id="other-title" placeholder="Your Job Role" name="user_other_title">');
   $('#other-title').hide();
});
  
//create function to display "other" field//
 $('#title').change(function(){
    if($('#title option:selected').val()==="other") {
    $('#other-title').show();
         }else{
     $('#other-title').hide();   
    }
  });
  
  
  
 //Updating the “Color” field to read “Please select a T-shirt theme”//
 const placeholder_option = $('<option value="" design-theme= "no-selection" selected><--Please select a T-shirt theme</option>');
 const js_puns_options = $('[design-theme="js-puns"]');
 const i_heart_js_options = $('[design-theme="i-heart-js"]');
$color.prepend(placeholder_option);
  

//calling function for the value of the design selection to change the color selector menu.
$design.on('change', function() {
if  ($('.design option:selected').val() === 'js puns') {
		$('.color option').removeAttr('selected');
		$('.color option').show();//if js puns option is selected show selected and hide the heart js option
		$('.color option').filter('[value="tomato,steelblue,dimgrey"]').hide();
		$('.color option[value="cornflowerblue"]').attr('selected', 'selected');
    
	   } else 
      
if ($('.design option:selected').val() === 'heart js') {
		$('.color option 1').removeAttr("selected");//if heart js option is selected hide the js puns option 
		$('.color option 2').show();
		$('.color option 3').filter('[value="darkslategrey,gold,cornflowerblue"]').hide();
		$('.color option[value="tomato"]').attr('selected', 'selected');
  
	   } else {
    //Hide the color menu so it only shows up after the "select theme" is selected//
		$('.color option').removeAttr("selected");
		$('#colors-js-puns').hide();
  };
});
$('.activities').append('<div class="totalDiv"><label name="total-amount" class="total-display">Total: </label></div>');
$('.totalDiv').addClass('is-hidden');


// Display total//
    let $total = 0;
    const activityType = document.querySelector('.activities');


//show Div when any checkbox is active and checked//
$('input:checkbox').on('change', function() {
        if ($(this).is(':checked')) {
          $('.totalDiv').removeClass('is-hidden');//show total//
          $total += +this.value;
          $('.total-display').html('Total: $' + parseInt($total));
          
             } else if ($('#Workshops input:checkbox:checked').length = 1) {
          
          //If the checkbox is not checked subtract the value//
          $total -= +this.value;
          $('.total-display').html('Total: $' + parseInt($total));//show new total amount//
        }
        });

        //Live validation for registration//
        function regValidation() {
          var n = $("input:checked").length;
          if (n === 0) {
            $(".totalDiv").addClass('is-hidden');
            console.log("nothing is selected");
            activityLegend.innerText = "Please choose an activity.";
            activityLegend.classList.add('errorText');
          } else {
            activityLegend.textContent = "Register for Activities";
            activityLegend.classList.remove('errorText');
          }};

          $("input:checkbox").on ("click", regValidation );


//If the "Frameworks" checkbox is checked//
  $jsFrameWorks.change(function() {
    if ($(this).is(':checked')) {
      console.log("i am checked");
      //disable box//
      $express.prop( "disabled", true );
    } else{
      $express.prop( "disabled", false );
    }});

  //If the "Libraries" checkbox has been checked//
  $jslibs.change(function() {
    if ($(this).is(':checked')) {
      $node.prop( "disabled", true );
    } else{
      $node.prop( "disabled", false );
    }});

  //If the "Express" checkbox has been checked//
  $express.change(function() {
    if ($(this).is(':checked')) {
      $jsFrameWorks.prop( "disabled", true );
    } else{
      $jsFrameWorks.prop( "disabled", false );
    }});

  //If the "Node.js" checkbox has been checked//
  $node.change(function() {
    if ($(this).is(':checked')) {
      $jslibs.prop( "disabled", true );
    } else{
      $jslibs.prop( "disabled", false );
    }});  
    
    