import React from 'react'

export const AddPokemon = () => {
    return (
        <div>
            <h1>Crea tu pokemon</h1>
            <form>
                <div>
                    <label>tipo: </label>
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
                </div>
                
                <div>
                    <label>nombre: </label>
                    <input
                        type='text'                    
                    />
                </div>
                <div>
                    <label>Vida: </label>
                    <input
                        type='text'                    
                    />
                </div>
                <div>
                    <label>Fuerza: </label>
                    <input
                        type='text'                    
                    />
                </div>
                <div>
                    <label>defensa: </label>
                    <input
                        type='text'                    
                    />
                </div>
                <div>
                    <label>Velocidad: </label>
                    <input
                        type='text'                    
                    />
                </div>
                <div>
                    <label>altura: </label>
                    <input
                        type='text'                    
                    />
                </div>
                <div>
                    <label>peso: </label>
                    <input
                        type='text'                    
                    />
                </div>
                <button>Crear!!</button>
            </form>

        </div>
    )
}
