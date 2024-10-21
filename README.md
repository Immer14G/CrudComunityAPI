# CrudComunityAPI

Este proyecto consiste en una aplicación web que consume una API REST para gestionar una lista de tareas
La aplicación está construida por NODEJS, TYPESCRIPT, MONGODB, y en la segunda parte REACT y se estructura en dos carpetas una para el backend y otra para el frontend
hbs hace una funcion muy importante dentro de nuestro backend

//1 parte
para ejecutar el backend que funciona NODEJS, TYPESCRIPT, MONGODB 
iniciamos con el comando; npx nodemon src/index.ts

despues podemos ver una interfaz web 
![image](https://github.com/user-attachments/assets/637ea8de-de95-4525-bfeb-c5b0cca0925a)
en la cual podemos;
Crear tareas
Editar tareas
Listar tareas
Eliminar tareas

te doy una explicacion para que sirve cada carpeta echa en el backend para que le puedan entender un poco mejor

la carpeta src/: es larpeta donde se organiza el código fuente de la API

la carpeta controllers/: Contiene los controladores que manejan la lógica de las rutas de la app cada controlador se encarga de procesar las solicitudes y enviar respuestas

la carpeta models/: Define los modelos de datos, usualmente relacionados con la base de datos

la carpeta routes/: Define las rutas de la API

la carpeta middlewares/: Funciones que se ejecutan durante el ciclo de vida de una solicitud

y por ultimo el archivo app.js  Archivo principal que inicia el servidor y configura las rutas y middlewares

tambien esta views/: Contiene las vistas o páginas principales de la aplicación
y public/: Carpeta que contiene archivos estáticos que se sirven directamente (como el index.html)

podriamos dejar el primer ejercicio hasta aca


--parte 2
el frontend aun no esta terminado con React no devuelve la respuesta JSON() me envia un form
para entender un poco mejor el frontend copie esta img para guiarnos

src; es la carpeta que contiene todo el código fuente de la aplicación web

public
Esta carpeta contiene   los  archivos que se sirven de manera estátic

y de cada carpeta se desglosan sus demas componentes

si quieres ir y clonar el codigo y probarlo hazlo de la siguiente manera
abres una terminal y sigue los pasos

1-cd CrudComunityAPI/frontend
2-cd CrudComunityAPI/frontend
3-npm install
4-iniciamos con "npx nodemon src/index.ts"




