import { useState } from "react"

export default function ToDoTile( { props, deleteToDo } ) {
    const [checked, setChecked] = useState(false);

    function handleChange(e) {
        setChecked(!checked);
    }

    return <div className="ToDo-Tile">
        <label className="ToDo-Details">
            <input 
                type="checkbox" 
                id={ props.id } 
                key={ props.id }
                checked={ checked }
                onChange={ handleChange }></input> 
            <span>
                { checked ? <strike> { props.name } </strike> : props.name }
            </span>
        </label>
        <button className="ToDo-Delete" onClick={() => deleteToDo(props.id)}>×</button>
    </div>
}