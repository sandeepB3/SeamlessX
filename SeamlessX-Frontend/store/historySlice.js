import { createSlice } from "@reduxjs/toolkit";

const historySlice = createSlice({
    name: 'history',
    initialState: {
        items: {}
    },
    reducers: {
        //state updates the items: [] in initialState
        addHistoryItem: (state, action) => {
            // console.log(action.payload.item)
            const {item} = action.payload;

            if(item){
                state.items = item;
            }
            console.log('state Items',state.items)
        },
        // setHistoryItems: (state, action) => {
        //     state.items = action.payload.items;
        // },
        // clearHistory: (state) => {
        //     state.items = []
        // }
    }
})

//Reducer function action imported
export const { addHistoryItem } = historySlice.actions;
export default historySlice.reducer;