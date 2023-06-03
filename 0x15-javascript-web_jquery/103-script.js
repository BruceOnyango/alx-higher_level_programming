$(document).ready(function () {
  $('#btn_translate').click(fetchTranslation);
  $('#language_code').keypress(function (event) {
    if (event.which === 13) {
      fetchTranslation();
    }
  });

  function fetchTranslation () {
    const languageCode = $('#language_code').val();
    const apiUrl = 'https://cors-anywhere.herokuapp.com/https://fourtonfish.com/hellosalut/?lang=';

    $.ajax({
      url: apiUrl,
      method: 'GET',
      data: { lang: languageCode },
      dataType: 'json',
      success: function (response) {
        $('#hello').text(response.hello);
      }
    });
  }
});
