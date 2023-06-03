$(document).ready(function () {
  $('INPUT#btn_translate').click(function () {
    const languageCode = $('INPUT#language_code').val();
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const apiUrl = 'https://fourtonfish.com/hellosalut/?lang=';

    $.get(proxyUrl + apiUrl + languageCode, (data) => {
      $('DIV#hello').text(data.hello);
    });
  });
});
