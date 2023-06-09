import { useState } from "react";

const initialState = {
    carrito: [],
}

const useInitialState = () => {
    const [state, setState] = useState(initialState);

    const agregarAlCarrito = (payload) => { //payload es el producto que se va a agregar al carrito
        setState({
            ...state,
            carrito: [...state.carrito, payload]
        })
    }

    const eliminarDelCarrito = (payload) => {
        setState({
            ...state,
            carrito: state.carrito.filter(items => items.sku !== payload.sku)
        })
    }

    const eliminarTodoDelCarrito = () => {
        setState({
            ...state,
            carrito: []
        })
    }

    return {
        state,
        agregarAlCarrito,
        eliminarDelCarrito,
        eliminarTodoDelCarrito,
    }
}

export default useInitialState;