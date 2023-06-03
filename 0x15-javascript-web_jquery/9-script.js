$(document).ready(function () {
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  const apiUrl = 'https://fourtonfish.com/hellosalut/?lang=fr';

  $.getJSON(proxyUrl + apiUrl, function (data) {
    const translation = data.hello;
    $('#hello').text(translation);
  });
});
