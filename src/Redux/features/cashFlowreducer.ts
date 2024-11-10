import { createSlice } from '@reduxjs/toolkit';
import { IShakeyProps } from '../../Common/types';

const initialState: IShakeyProps = {
    data: [],
    options: {}
}
export const cashFlowSlice = createSlice({
    name: 'cashFlow',
    initialState: initialState,
    reducers: {
        setInitialData:
            (state, action) => {
                console.log(state, action)
                state.data = [...action.payload.data];
                state.options = {...action.payload.options};
            },
        addNewNode: (state, action) => {
            state.data.push(action.payload);
        },
        removeNode: (state, action) => {
            state.data = state.data.filter(row => !row.includes(action.payload));
        },
    },
});

export const { setInitialData, addNewNode, removeNode } = cashFlowSlice.actions;

export default cashFlowSlice.reducer;