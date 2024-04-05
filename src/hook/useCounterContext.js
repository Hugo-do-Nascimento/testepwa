import { useContext } from 'react';
import { CounterContext } from '../context/CounterContext';

export const useCounterContext = () => {
    const ccontext = useContext(CounterContext)

    if(!ccontext) {
        console.log("contexto não encontrado!")
    }

    return ccontext;
}