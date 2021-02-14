import axios from "axios";
import React, { useEffect, useReducer } from 'react';

const initialState = {
    loading: true,
    error: "",
    post: {}
}

const reducer = (state, action) => {
    switch(action.type){
        case "FETCH_SUCCESS":
        return {
            loading: false,
            post: action.payload,
            error: ""
        }
        case "FETCH_FAILLED":
        return{
            loading: false,
            post: {},
            error: "Something Went Wrong"
        }
        default: return initialState
    }
}

const useReducerDataFetching = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        axios.get("http://jsonplaceholder.typicode.com/posts/1").then(res => {
            dispatch({type: "FETCH_SUCCESS", payload: res.data})
        }).catch(err => {
            dispatch({type: "FETCH_ERROR"})
        })
    }, [])
    
    return (
        <div>
            {state.loading ? "Loading" : state.post.title}
            {state.error ? state.error : null}
        </div>
    )
}

export default useReducerDataFetching
