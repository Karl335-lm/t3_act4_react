# 📝 Lista de tareas con React

## 📌 Descripción del proyecto

Este proyecto consiste en una mini aplicación web desarrollada con React y Vite que permite administrar una lista de tareas de manera sencilla e interactiva.

La aplicación permite agregar tareas y eliminarlas cuando ya no sean necesarias. Su objetivo es poner en práctica los conceptos básicos de React, como los componentes, el estado (`state`), las propiedades (`props`) y los eventos.

## 🛠️ Tecnologías utilizadas

- **React:** para crear la interfaz de usuario mediante componentes.
- **Vite:** para configurar y ejecutar el proyecto.
- **JavaScript:** para implementar la funcionalidad de la aplicación.
- **HTML:** para estructurar el contenido.
- **CSS:** para diseñar y dar estilo a la interfaz.

##  Preguntas

### a) ¿Qué diferencia hay entre props y state en React?

Las **props** son datos que un componente recibe desde otro componente, generalmente desde su componente padre. Se utilizan para compartir información y personalizar los componentes.

El **state** es información que un componente administra internamente y que puede cambiar mientras se utiliza la aplicación. Cuando el estado cambia, React actualiza la interfaz para mostrar la información nueva.


### b) ¿Por qué es importante usar una key al renderizar una lista de elementos?

La propiedad `key` permite que React identifique cada elemento de una lista de manera única. Esto ayuda a reconocer qué elementos se agregaron, eliminaron o modificaron, haciendo que las actualizaciones de la interfaz sean más eficientes.


### c) Explica con tus propias palabras qué hace la función useState y da un ejemplo de dónde la usaste en tu mini aplicación.

La función `useState` es un Hook de React que permite guardar y actualizar información dentro de un componente. Cuando el valor del estado cambia, React vuelve a renderizar el componente para mostrar los cambios en la pantalla.

En mi aplicación de lista de tareas, utilicé `useState` para almacenar las tareas registradas. Cuando agrego una tarea, el estado se actualiza y la nueva tarea aparece en la lista. También permite actualizar la lista cuando elimino una tarea.

Un ejemplo de su uso es:

```jsx
const [tareas, setTareas] = useState([]);
```

### d) Enlace de tu repositorio de GitHub.

El repositorio contiene el código fuente de mi proyecto, incluidos los componentes, los estilos y los archivos de configuración.

🔗 **Repositorio de GitHub:**

https://github.com/Karl335-lm/t3_act4_react

### e) Pega el enlace de tu proyecto ya desplegado en GitHub Pages.

GitHub Pages permite acceder a la aplicación desde un navegador sin necesidad de ejecutar el proyecto localmente.

🌐 **Aplicación publicada:**

https://karl335-lm.github.io/t3_act4_react/
