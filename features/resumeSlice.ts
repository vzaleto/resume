import {createSlice, PayloadAction} from "@reduxjs/toolkit";


interface FieldsState {
    name:string,
    experience:string[],
    education:string[],
    skills:string[]
}
const initialState:FieldsState = {
    name:"",
    experience: [],
    education:[],
    skills:[]
}

const resumeSLice = createSlice({
    name:'resume',
    initialState,
    reducers:{
        setName(state,action: PayloadAction<string>){
            state.name = action.payload
        },
        addExperience(state,action: PayloadAction<string>){
            state.experience.push(action.payload)
        },
        removeExperience(state, action: PayloadAction<number>) {
            state.experience.splice(action.payload, 1)
        },
        addEducation(state,action: PayloadAction<string>){
            state.education.push(action.payload)
        },
        removeEducation(state, action: PayloadAction<number>) {
            state.education.splice(action.payload, 1)
        },
        addSkills(state,action: PayloadAction<string>){
            state.skills.push(action.payload)
        },
        removeSkills(state, action: PayloadAction<number>) {
            state.skills.splice(action.payload, 1)
        },

    },
})

export const {setName, addExperience, removeExperience, addSkills, removeSkills, addEducation, removeEducation} = resumeSLice.actions
export default resumeSLice.reducer