import { Button, Form } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import { useState } from "react";

const FormularioTareas = () => {
const [tarea, setTarea] = useState('');
const [tareas, setTareas] = useState([]);

const handleSubmit = (e)=>{
  e.preventDefault();
  // guardar la tarea en el array tareas
  setTareas([...tareas, tarea])
  // limpiar el inpur donde ingreso la tarea
  setTarea('');
}

  const borrarTarea = (nombreTarea)=>{
    const tareasFiltradas = tareas.filter((ItemTarea)=> ItemTarea !== nombreTarea);
    setTareas(tareasFiltradas); 
  }

  return (
    <section>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex" >
          <Form.Control
            type="text"
            placeholder="Ej: tarea 1"
            minLength={3}
            maxLength={50}
            onChange={(e)=> setTarea(e.target.value)}
            value={tarea}
          />
          <Button variant="success" className="mx-2" type="submit">Enviar</Button>
        </Form.Group>
      </Form>
      <ListaTareas tareas={tareas} borrarTarea={borrarTarea}></ListaTareas>
    </section>
  );
};

export default FormularioTareas;
