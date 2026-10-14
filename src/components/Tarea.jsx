
function Tarea({ tarea, alCompletar, alEliminar }) {
  return (
    <li className={`tarea ${tarea.completada ? "completada" : ""}`}>
      <label className="tarea-contenido">
        <input
          type="checkbox"
          checked={tarea.completada}
          onChange={() => alCompletar(tarea.id)}
        />

        <span>{tarea.texto}</span>
      </label>

      <button
        className="boton-eliminar"
        onClick={() => alEliminar(tarea.id)}
        aria-label={`Eliminar ${tarea.texto}`}
      >
        Eliminar
      </button>
    </li>
  );
}

export default Tarea;
