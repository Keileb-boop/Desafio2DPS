# Desafio2DPS
Esta es la rama para los archivos de la aplicación de platillos tipicos 

Integrantes:

1. Camila Elizabeth Castillo Joya - CJ220498
2. Caleb Alejandro Peñate Deras - PD230166

<h2>Aplicación Móvil de Platillos Típicos </h2>

📌 Descripción General

Esta aplicación móvil, desarrollada en React Native, está diseñada para visualizar información sobre platillos típicos, presentando detalles clave como el nombre, descripción, foto, ingredientes, región de origen, precio y categoría de cada platillo.

La interfaz de usuario está estructurada utilizando Flexbox, lo que garantiza una disposición adaptable en diferentes tamaños y orientaciones de pantalla. En el modo vertical, la aplicación muestra los platillos en una columna, y en el modo horizontal, se organiza en dos columnas para aprovechar mejor el espacio de la pantalla.

---------------------------------------------------------------------------

🚀Funcionalidades principales:

Pantalla principal: Muestra un resumen de los platillos típicos en tarjetas, donde cada tarjeta contiene una imagen del platillo y una descripción breve.

Pantalla de detalles: Al hacer clic en una tarjeta, el usuario accede a una pantalla con la información completa del platillo, incluyendo una lista de los ingredientes, descripción detallada, región de origen, precio y categoría.

Navegación: La navegación entre las pantallas se gestiona utilizando React Navigation con Stack Navigator, lo que permite una transición fluida entre la pantalla principal y la pantalla de detalles de cada platillo.

----------------------------------------------------------------------------

🛠️Tecnologías

React Native: Framework para el desarrollo de aplicaciones móviles multiplataforma (iOS y Android).

React Navigation: Librería para gestionar la navegación entre pantallas.

Flexbox: Sistema de diseño para estructurar la interfaz de forma flexible y adaptable a diferentes tamaños y orientaciones de pantalla.

JSON: Formato utilizado para almacenar los datos de los platillos (nombre, descripción, foto, ingredientes, región de origen, precio y categoría).

-----------------------------------------------------------------------------

✅Pasos para la instalación de la aplicación

1.🧰Se necesitan las librerias correspondientes que utiliza la aplicación como:

-React Navigation:Para movernos entre pantallas.

-React Native Stack:Para apilar las pantallas que se mostrarán para mejor rendimiento.

2.🛠️Instalamos las librerias:
   
-npm install

-npm install @react-navigation/native

-npm install @react-navigation/native-stack

-npm install react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated

-npx expo install react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated

📍Nota
🚌 Estos comandos deben de instalarse en la terminal de VS Code y los 2 ultimos paquetes son necesarios ya que de esos dependen tambien tanto **native-stack** y **react-navigation**

Una vez instaladas todas las libererias se corre el programa:

-npm start

Con la ayuda de nuestra aplicación Expo Go para móviles o con nuestro programa de desarrollador Android Studio y su MV de un celular de android, puede visualizar nuestra aplicación😊❤️
