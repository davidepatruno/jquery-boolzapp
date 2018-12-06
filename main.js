$(document).ready(function() {
  $('#inputmessaggio').keypress(function(event){

    if(event.which == 13){
      var thisinput = $(this);
      var testomessaggio = thisinput.val();
      var now = new Date();

      if (testomessaggio) {

        var templateMessaggio = $('.template .messagesent').clone();
        templateMessaggio.children('.mess_text').text(testomessaggio);
        templateMessaggio.children('.mess_time').text(now.getHours() + ':' + (now.getMinutes()<10?'0':'') + now.getMinutes());
        $('.chat_body').append(templateMessaggio);

        var clearTemp = $('.template .clear').clone();
        $('.chat_body').append(clearTemp);

        var answ_time = setTimeout(function() {

          var templateRisposta = $('.template .messagereceived').clone();
          templateRisposta.children('.mess_text').text('ok');
          templateRisposta.children('.mess_time').text(now.getHours() + ':' + (now.getMinutes()<10?'0':'') + now.getMinutes());
          $('.chat_body').append(templateRisposta);
          
          var clearTemp = $('.template .clear').clone();
          $('.chat_body').append(clearTemp);
        }, 5000);
      }
      $('#inputmessaggio').val('');
    }
  })
})
