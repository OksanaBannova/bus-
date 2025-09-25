document.getElementById('select').addEventListener('change', function() {
  var url = window.location.href.split('?') + '?' + this.value; window.location.href = url;});
