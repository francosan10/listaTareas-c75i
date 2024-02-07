import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({tareas}) => {
    return (
        <ListGroup>
           {
                tareas.map((itemTarea, indice)=> <ItemTarea key={indice}></ItemTarea>)
           }
        </ListGroup>
    );
};

export default ListaTareas;