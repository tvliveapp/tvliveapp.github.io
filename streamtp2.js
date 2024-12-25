var urlField = "https://streamtp2.com/";
var dataField = "";
var outputField = "";

var cors_api_url = 'https://cors-anywhere.herokuapp.com/';
  function doCORSRequest(options, printResult) {
    var x = new XMLHttpRequest();
    x.open(options.method, cors_api_url + options.url);
    x.onload = x.onerror = function() {
      printResult(
        options.method + ' ' + options.url + '\n' +
        x.status + ' ' + x.statusText + '\n\n' +
        (x.responseText || '')
      );
    };
    if (/^POST/i.test(options.method)) {
      x.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    }
    x.send(options.data);
  }

  // Bind event
  (function() {
    
   doCORSRequest({
        method: this.id === 'post' ? 'POST' : 'GET',
        url: urlField,
        data: dataField
      }, function printResult(result) {
        outputField = result;
        console.log(result);
      });
    
  })();
  if (typeof console === 'object') {
    console.log('// To test a local CORS Anywhere server, set cors_api_url. For example:');
    console.log('cors_api_url = "http://localhost:8080/"');
  }
