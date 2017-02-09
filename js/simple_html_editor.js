$(document).on('keyup', '#original_text',function(){
  var text_ori = $('#original_text').val();
  $('#output_area').html(text_ori);
});
var reset_input = function(){
  var input_area = $('#input_area');
  input_area.show();
  $('textarea').css('height', 600);
  if (!input_area.hasClass('col-md-6')) { input_area.addClass('col-md-6'); }
};
var reset_output = function(){
  var output_area = $('#output_area');
  if(output_area.hasClass('col-md-12')) { output_area.removeClass('col-md-12');}
  if(!output_area.hasClass('col-md-6')) { output_area.addClass('col-md-6');}
}
$(document).ready(function(){
  reset_input();
  reset_uotput();
});
$(document).on('change', '#mode-select',function(){
  var mode = $('#mode-select option:selected').val();
  reset_input();
  reset_output();
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
