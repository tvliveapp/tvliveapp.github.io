
// Enviar un mensaje de prueba desde el front-end al back-end

// Recibir el mensaje de la consola de AndroidJS
front.on("hello from back", function(msg){
  //  console.log(msg);  // Para registrar el mensaje en la consola del navegador

    // Llamada para actualizar el contenido en la consola de la página
    addLogToConsole(msg);
});

let config ;
// Recibir el mensaje de la consola de AndroidJS
front.on("config", function(msg){
  //  console.log(msg);  // Para registrar el mensaje en la consola del navegador
    config=msg  ;
    // Llamada para actualizar el contenido en la consola de la página
    addLogToConsole(JSON.stringify(msg));
});

// Recibir cualquier otro mensaje de log desde AndroidJS y agregarlo a la consola
front.on("log", function(msg){
    //console.log(msg);  // Para registrar el mensaje en la consola de navegador

    // Agregar este log a la consola del frontend
    addLogToConsole(msg);
});

front.on("ip", function(msg){
   
    const ip = document.getElementById('msg');
    document.getElementById('ifView').src="http://"+msg+":8080/listas";
    document.getElementById('playerIf').src ="./player.html"
   // ip.innerHTML="Servidor IPTV en "+msg;
    const wv = document.getElementById('webview-tab');
     ip.innerHTML="Listas en: "+"http://"+msg+":8080/listas/unicalista.m3u";
    // if (document.location.host!=msg+":8080")
      //   document.location.href="http://"+msg+":8080/views/index.html";
    
});
// Función para agregar un mensaje a la consola de la página
function addLogToConsole(message) {
    const consoleDiv = document.getElementById('console');
    const logElement = document.createElement('div');
    logElement.classList.add('console-line');
    logElement.textContent = message;
    consoleDiv.appendChild(logElement);

    // Mantener el scroll hacia abajo
    consoleDiv.scrollTop = consoleDiv.scrollHeight;
}

// Enviar mensaje desde el front-end a AndroidJS (ejemplo)
function sendLogToAndroidJS(logMessage) {
    front.send(logMessage);
}
front.send("hello from front");

(function() {
    // Guardar la función original de console.log
    const originalLog = console.log;

    // Sobrescribir console.log
    console.log = function(message) {
        // Llamar a la función que agrega el mensaje al contenedor en HTML
        addLogToConsole(message);

        // Llamar a la función original para mantener el comportamiento de la consola
        originalLog.apply(console, arguments);
      if(websocketclient.connected)
              publicar("logLio",message);
    };
})();

window.onerror = function(message, source, lineno, colno, error) {
    const errorMessage = `Error: ${message} at ${source}:${lineno}:${colno}`;
    addLogToConsole(errorMessage, 'error'); // Redirigir el mensaje de error a la consola HTML
      if(websocketclient.connected)
              publicar("logLio",errorMessage);   
    return true;  // Evitar que el error se muestre en la consola del navegador
};

window.addEventListener('error', function(event) {
    if (event.target instanceof HTMLScriptElement || event.target instanceof HTMLImageElement || event.target instanceof HTMLLinkElement) {
        addLogToConsole(`Error de carga de recurso: ${event.target.src || event.target.href}`, 'error');
        if(websocketclient.connected)
              publicar("logLio",`Error de carga de recurso: ${event.target.src || event.target.href}`, 'error'); 
    }
}, true);