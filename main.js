$(document).ready(function() {
  $('#inputmessaggio').keypress(function(event){
    if(event.which == 13){
      var thisinput = $(this);
      var testomessaggio = thisinput.val();
      var now = new Date();
      if (testomessaggio) {
        var templateMessaggio = $('.template .message').clone();
        templateMessaggio.children('.mess_text').text(testomessaggio);
        templateMessaggio.children('.mess_time').text(now.getHours() + ':'+ now.getMinutes());
        $('.chat_body').append(templateMessaggio);

        var clearTemp = $('.template .clear').clone();
        $('.chat_body').append(clearTemp);
      }
      $('#inputmessaggio').val('');
    }
  })
})
