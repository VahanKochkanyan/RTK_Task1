import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    items: [
        {id: 101, name: "Tiko", gender: "male", salary: 150_000},
        {id: 102, name: "Vahe", gender: "male", salary: 250_000},
        {id: 103, name: "Rudo", gender: "male", salary: 350_000},
        {id: 104, name: "Artur", gender: "male", salary: 450_000},
    ]
}


export const UserSlice = createSlice({
    name: 'Users',
    initialState,
    reducers: {

        SalaryUp: function(state, action) {
            const person = state.items.find(user => user.id == action.payload)
            if(person) {
                person.salary += 68_000
            }
        },

        SalaryDown: function(state, action) {
            const person = state.items.find(item => item.id == action.payload);
            if (person) {
                person.salary = Math.max(0, person.salary - 68_000);
            }
        },

        Delete: function(state, action) {
            state.items = state.items.filter(item => item.id != action.payload)
        },

    
        SwipeUp: function (state, action) {
            const i = state.items.findIndex(item => item.id == action.payload);
            if(i > 0) {
                [state.items[i - 1], state.items[i]] =
                [state.items[i], state.items[i - 1]]
            }
        },

        SwipeDown: function (state, action) {
            const i = state.items.findIndex(item => item.id == action.payload);
            if (i < state.items.length - 1) {
                [state.items[i], state.items[i + 1]] = 
                [state.items[i + 1], state.items[i]];
            }
        }        
    }
})
export const { SalaryUp, SalaryDown, Delete, SwipeUp, SwipeDown } = UserSlice.actions

export const reducer = UserSlice.reducer 