// $(document).ready(function() {
//   $('#inputmessaggio').keypress(function(event){
//     if(event.which == 13){
//       var testomessaggio = $('#inputmessaggio').val();
//       var templateMessaggio = $('.temp_messaggio');
//       $('.chat_wrapper').append(templateMessaggio);
//       console.log(templateMessaggio);
//
//     }
//   })
// })

// per provare questa strada hai modificato gli attributi alla classe .user_message, se non va ricorda di ripristinare il displayflex(gia in html).   

$(document).ready(function(){
  $('#inputmessaggio').keypress(function(event){
    if(event.which == 13) {
      var testomessaggio = $('#inputmessaggio').val();
      var templateMessaggio = $('.temp_messaggio');
      templateMessaggio.text(testomessaggio);
      var divsend = $("<div class='user_message new'></div>");
      $('.chat_wrapper').append(divsend);
      $('.new').append(templateMessaggio);
    }
  })

})
