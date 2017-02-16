/* reflect from textarea */
var response = function(){
 $('#output_area').html($('#original_text').val()); 
}


/* reflect when keyup */
$(document).on('keyup', '#original_text',function(){
  response();
});


/* initialize size of textarea */
var reshape_input = function(){
  var input_area = $('#input_area');
  input_area.show();
  $('textarea').css('height', 600);
  if (!input_area.hasClass('col-md-6')) { input_area.addClass('col-md-6'); }
};


/* initialize size of html area */
var reshape_output = function(){
  var output_area = $('#output_area');
  if(output_area.hasClass('col-md-12')) { output_area.removeClass('col-md-12');}
  if(!output_area.hasClass('col-md-6')) { output_area.addClass('col-md-6');}
}

/* initialize view mode */
$(document).ready(function(){
  reshape_input();
  reshape_output();
});

/* reset textarea and html area */
var reset_screen = function () {
  $('#original_text').html(null);
  $('#output_area').html(null);
};

/* change view mode */
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


/* load sample html */
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

/* input tab key */
$(function(){
  $("#original_text").keydown(function(e){
    if (e.keyCode === 9) {
      e.preventDefault();
      var elem = e.target;
      var val = elem.value;
      var pos = elem.selectionStart;
      elem.value = val.substr(0, pos) + '\t' + val.substr(pos, val.length);
      elem.setSelectionRange(pos + 1, pos + 1);
    }
  });
});