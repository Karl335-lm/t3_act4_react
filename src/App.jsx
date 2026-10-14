import { useState } from "react";
import Encabezado from "./components/Encabezado";
import FormularioTarea from "./components/FormularioTarea";
import ListaTareas from "./components/ListaTareas";
import "./App.css";

function App() {
  const [tareas, setTareas] = useState([
    { id: 1, texto: "Aprender los componentes de React", completada: false },
    { id: 2, texto: "Practicar el uso de props", completada: false },
    { id: 3, texto: "Crear mi primera aplicación", completada: false }
  ]);

  function agregarTarea(texto) {
    const nuevaTarea = {
      id: Date.now(),
      texto: texto,
      completada: false
    };

    setTareas((tareasActuales) => [...tareasActuales, nuevaTarea]);
  }

  function completarTarea(id) {
    setTareas((tareasActuales) =>
      tareasActuales.map((tarea) =>
        tarea.id === id
          ? { ...tarea, completada: !tarea.completada }
          : tarea
      )
    );
  }

  function eliminarTarea(id) {
    setTareas((tareasActuales) =>
      tareasActuales.filter((tarea) => tarea.id !== id)
    );
  }

  const tareasCompletadas = tareas.filter(
    (tarea) => tarea.completada
  ).length;

  return (
    <main className="contenedor">
      <Encabezado />

      <section className="tarjeta">
        <FormularioTarea alAgregar={agregarTarea} />

        <div className="resumen">
          <span>Total de tareas: {tareas.length}</span>
          <span>Completadas: {tareasCompletadas}</span>
        </div>

        <ListaTareas
          tareas={tareas}
          alCompletar={completarTarea}
          alEliminar={eliminarTarea}
        />
      </section>

      <footer className="pie">
        Proyecto realizado con React y Vite
      </footer>
    </main>
  );
}

export default App;
