# Chat - EP2

Este proyecto es un chat en tiempo real desarrollado como parte de la EP2 del curso de Integración de Aplicaciones. Utiliza Node.js con Express para el servidor y Socket.IO para la comunicación en tiempo real.

## Requisitos previos

Asegúrate de tener instalado Node.js en tu sistema. Puedes descargarlo desde [nodejs.org](https://nodejs.org/).

## Instalación

1. Clona este repositorio o descarga los archivos del proyecto.
2. Abre una terminal y navega hasta el directorio del proyecto.
3. Ejecuta el siguiente comando para instalar las dependencias:

```
npm install
```

Este comando instalará todas las dependencias necesarias listadas en el archivo `package.json`.

## Ejecución del proyecto

Para ejecutar el proyecto en modo de desarrollo (con recarga automática gracias a Nodemon), utiliza el siguiente comando:

```
npm run dev
```

Para ejecutar el proyecto en modo normal, utiliza:

```
npm start
```

Una vez que el servidor esté en funcionamiento, deberías ver un mensaje en la consola indicando:

```
Servidor corriendo en http://localhost:3000
```

## Uso

1. Abre tu navegador web y visita `http://localhost:3000`.
2. Deberías ver la interfaz del chat.
3. Puedes abrir 2 pestañas o navegadores para simular diferentes usuarios.
4. Escribe mensajes en el campo de texto y presiona "Enviar" o la tecla Enter para enviar mensajes.

## Estructura del proyecto

- `app.js`: Contiene la configuración del servidor Express y la lógica de Socket.IO.
- `client/index.html`: La interfaz de usuario del chat.
- `package.json`: Define las dependencias y scripts del proyecto.
