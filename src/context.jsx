// Create context
// Appcontext provider 
// useGlobalContext custom hook
import React, { createContext, useContext, useEffect, useReducer } from "react";
import {reducer} from './reducer'

let API = `http://hn.algolia.com/api/v1/search?`;
    let initialstate = {
        isLoading: true,
        isError: false,
        hits: [],
        page: 0,
        nbPages: 0,
        query: ''
    };
    


let AppContext  = createContext();

let AppProvider = ({children})=>{

    let [state, dispatch] = useReducer(reducer, initialstate);

let  fetchapidata = async(url)=>{
    dispatch({type: 'Loader'});
    try{
        let res = await fetch(url);
        let data  = await res.json();
        console.log(data);
        dispatch(
            {
                type: 'Get_stories',
                payload: {
                    hits: data.hits,
                    nbPages: data.nbPages
                }

            }
        )
    } catch(error){
       console.log('hello'); 
     dispatch({type: 'showerror'})
    }
   }
   // to remove post from api
   let removePost = (id)=>{
    dispatch({type: 'removepost', payload:id})
   }
   // to search on query
   let InputSearchHandler = (value)=>{
        dispatch({type: 'getsearch', search: value})
   }
   // pagination
   let incre = ()=>{
    
    dispatch({type: 'increment'})
   }
   let decre = ()=>{
    dispatch({type: 'decrement'})
   }
    useEffect(()=>{
        fetchapidata(`${API}&page=${state.page}&query=${state.query}`);
    },[state.query, state.page])
    return(
    <AppContext.Provider value={{...state, removePost, InputSearchHandler, incre, decre}}>
    {children}
    </AppContext.Provider>
    );
}

let useGlobalContext = ()=>{
    return useContext(AppContext);
}
export { AppContext, AppProvider, useGlobalContext}