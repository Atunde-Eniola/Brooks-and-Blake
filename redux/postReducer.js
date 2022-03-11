import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const postSlice = createSlice({
    
    name : "post",
    initialState: {
        posts: [],
        
    },
    reducers: {
        savePost: function(state,action){
            state.posts =  action.payload
        }
    },
    extraReducers:{
        [HYDRATE]: (state, action ) => {
            if (!action.payload.post.posts) {
               return state 
            }
            state.posts = action.payload.post.posts
        }
    }
    
});

export const {savePost} = postSlice.actions
export default postSlice.reducer;