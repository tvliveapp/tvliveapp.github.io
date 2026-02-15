var websocketclient = {
    'client': null,
    'connected': false,

    // Conexión a MQTT con parámetros constantes internos
    'connect': function () {
        // Parámetros constantes de conexión
        var host = 'mqtt-dashboard.com';  // Host del broker
        var port = 8884;                   // Puerto del broker
        var clientId = 'clientId-' + this.randomString(10); // Client ID generado dinámicamente
        var username = document.getElementById('userInput').value;  // Username desde el HTML
        var password = document.getElementById('pwInput').value;  // Password desde el HTML
        var keepAlive = 60;  // Valor constante para Keep Alive
        var ssl = true;  // SSL siempre habilitado

        // Conexión al broker MQTT
        this.client = mqtt.connect(`wss://${host}:${port}`, {
            clientId: clientId,
            username: username,
            password: password,
            keepAlive: keepAlive,
            reconnectPeriod: 1000,
            connectTimeout: 3000,
            rejectUnauthorized: false,
            ssl: ssl
        });

        // Eventos de conexión
        this.client.on('connect', this.onConnect);
        this.client.on('error', this.onFail);
        this.client.on('close', this.onClose);
        this.client.on('message', this.onMessageArrived);
    },

    // Función que se llama cuando la conexión es exitosa
    onConnect: function () {
        websocketclient.connected = true;
        document.getElementById('connection-status').innerText = 'Connected';
        console.log('Conexión exitosa');

        // Suscripción automática al tópico 'server11'
        websocketclient.client.subscribe('server11', { qos: 0 }, function (err) {
            if (err) {
                console.error('Error al suscribirse al tópico: ', err);
            } else {
                console.log('Suscripción exitosa al tópico: server11');
            }
        });
    },

    // Manejo de errores en la conexión
    onFail: function (error) {
        document.getElementById('connection-status').innerText = 'Connection failed';
        console.error('Error de conexión: ', error);
    },

    // Cuando la conexión se cierra
    onClose: function () {
        websocketclient.connected = false;
        document.getElementById('connection-status').innerText = 'Disconnected';
        console.log('Conexión cerrada');
    },

    // Manejo de mensajes recibidos
    onMessageArrived: function (message) {
        console.log('Mensaje recibido:', message);
        // Aquí puedes agregar más lógica para procesar el mensaje, si lo necesitas
    },

    // Función para publicar mensajes
    'publish': function (topic, payload, qos, retain) {
        if (this.client && this.client.connected) {
            this.client.publish(topic, payload, { qos: qos, retain: retain });
            console.log('Mensaje publicado:', topic, payload);
        } else {
            console.error('No se puede publicar, no está conectado.');
        }
    },

    // Función para generar un clientId aleatorio
    'randomString': function (length) {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }
};
