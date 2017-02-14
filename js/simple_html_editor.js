var response = function(){
 $('#output_area').html($('#original_text').val()); 
}

$(document).on('keyup', '#original_text',function(){
  response();
});

var reshape_input = function(){
  var input_area = $('#input_area');
  input_area.show();
  $('textarea').css('height', 600);
  if (!input_area.hasClass('col-md-6')) { input_area.addClass('col-md-6'); }
};

var reshape_output = function(){
  var output_area = $('#output_area');
  if(output_area.hasClass('col-md-12')) { output_area.removeClass('col-md-12');}
  if(!output_area.hasClass('col-md-6')) { output_area.addClass('col-md-6');}
}

$(document).ready(function(){
  reshape_input();
  reshape_output();
});

var reset_screen = function () {
  $('#original_text').html(null);
  $('#output_area').html(null);
};


$(document).on('change', '#mode-select',function(){
  var mode = $('#mode-select option:selected').val();
  reshape_input();
  reshape_output();
  if(mode == "full"){
    $('#input_area').hide();
    $('#output_area').removeClass('col-md-6').addClass('col-md-12');
  } else if(mode == "vertical"){
    var half = parseInt($('textarea').css("height"))/2;
    $('#input_area').removeClass('col-md-6');
    $('textarea').css('height',half);
    $('#output_area').removeClass('col-md-6');
  } else {}
});

$(document).on('change', '#sample-select', function(){
    var sample = $('#sample-select option:selected').val();
    if(sample == 'reset'){
      reset_screen();
    } else {
      $("#original_text").load("./html_sample/" + sample + ".txt", function(responseTxt, statusTxt, xhr){
        if(statusTxt == "success"){
          response();
        }
      });
    }
});
