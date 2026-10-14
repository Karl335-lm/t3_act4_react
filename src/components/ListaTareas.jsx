import Tarea from "./Tarea";

function ListaTareas({ tareas, alCompletar, alEliminar }) {
  if (tareas.length === 0) {
    return (
      <p className="mensaje-vacio">
        No tienes tareas pendientes. ¡Agrega una!
      </p>
    );
  }

  return (
    <ul className="lista-tareas">
      {tareas.map((tarea) => (
        <Tarea
          key={tarea.id}
          tarea={tarea}
          alCompletar={alCompletar}
          alEliminar={alEliminar}
        />
      ))}
    </ul>
  );
}

export default ListaTareas;
