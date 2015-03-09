$( document ).ready(function() {
  $("#mailjet-widget").on("submit", function (e) {
    e.preventDefault();
    var url = "http://mailapi.mythicapps.io/addContact?"+$("#mailjet-widget").serialize();
    $.post( url, function( data ) {
      if (data.status === "ok"){
        alert(data.message);
      }
      else if (data.status === "error"){
        alert(data.message);
      }
    });
  });
});
