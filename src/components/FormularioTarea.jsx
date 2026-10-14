import { useState } from "react";

function FormularioTarea({ alAgregar }) {
  const [texto, setTexto] = useState("");

  function manejarEnvio(evento) {
    evento.preventDefault();

    const textoLimpio = texto.trim();

    if (textoLimpio === "") {
      return;
    }

    alAgregar(textoLimpio);
    setTexto("");
  }

  return (
    <form className="formulario" onSubmit={manejarEnvio}>
      <input
        type="text"
        placeholder="Escribe una nueva tarea..."
        value={texto}
        onChange={(evento) => setTexto(evento.target.value)}
        aria-label="Nueva tarea"
      />

      <button type="submit">Agregar</button>
    </form>
  );
}

export default FormularioTarea;
