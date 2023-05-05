import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    username: "",
    cartItems: []
}

export const userInfoSlice = createSlice({
    name: 'userInfo',
    initialState,
    reducers: {
        loadInformation: (state) => {
            const data=JSON.parse(localStorage.getItem("userData"))
            console.log(data);
            state.username=data?.username;
            state.cartItems=data?.cartItems;
        },
        setInformation:(state,action)=>{
            const inputData= action.payload;
            localStorage.setItem("userData",JSON.stringify(inputData))
        }
    },
})


export const { loadInformation, setInformation } = userInfoSlice.actions

export const getUserInfo=(state)=>state.userInfo;

export default userInfoSlice.reducer