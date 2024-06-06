import React, {useState} from 'react'
import './color-picker.css'
import Copy from './clipboard.jsx'

function ColorPicker(){
    const [color, setColor] = useState("#FFFFFF")
    function handleColorChange(event){
        setColor(event.target.value)
    }
    return (
        <div className = 'container'>
            <h1 className ='name'>Color Picker</h1>
            <p className = 'display' style={{backgroundColor:color}}>
                <li className = 'list'style = {{backgroundColor: 'black'}}>
                    {color}<Copy text={color} />
                </li>
            </p>
            <div>
                <label>Select a color: </label>
                <input type = 'color' value={color} onChange = {handleColorChange} />
            </div>
        </div>
    )
}

export default ColorPicker