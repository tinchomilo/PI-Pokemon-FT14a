import React from 'react'
import '../../styles/filters.css'

export const Filters = () => {
    return (
        <div>
            <label className="orden">
                    orden  
                        <select>
                            <option value="ascendente">Ascendente</option>
                            <option value="descendente">Descendente</option>
                        </select>
                </label>
                <label>
                    tipo  
                    <select>
                        <option value="normal">Normal</option>
                        <option value="lucha">Lucha</option>
                        <option value="volador">Volador</option>
                        <option value="veneno">Veneno</option>
                        <option value="tierra">Tierra</option>
                        <option value="roca">Roca</option>
                        <option value="bicho">Bicho</option>
                        <option value="fantasma">Fantasma</option>
                        <option value="acero">Acero</option>
                        <option value="fuego">Fuego</option>
                        <option value="agua">Agua</option>
                        <option value="planta">Planta</option>
                        <option value="electrico">Electrico</option>
                        <option value="siquico">Siquico</option>
                        <option value="hielo">Hielo</option>
                        <option value="dragon">Dragon</option>
                        <option value="oscuro">Oscuro</option>
                        <option value="hada">Hada</option>
                        <option value="desconocido">Desconocido</option>
                        <option value="sombra">Sombra</option>
                    </select>
                </label>
        </div>
    )
}
