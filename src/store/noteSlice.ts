import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export type Note = {
  id: number, text: string
}

export type State = {
  notes: Note[];
  tags: string[];
  selectedTags: string[]
}

const initialState:State = {
  notes: [],
  tags: [],
  selectedTags: []
}

export const AppSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addAll:(state, action: PayloadAction<{notes: Note[],tags:string[],selectedTags: string[]}>)=>{
        state.notes = action.payload.notes
        state.tags = action.payload.tags
        state.selectedTags = action.payload.selectedTags
    },
    addNote:(state, action: PayloadAction<{text: string}>)=> {
      state.notes.push({
        id: state.notes.length,
        text: action.payload.text
      })
    },
    deleteNote: (state, action:PayloadAction<{id: number}>)=>{
      state.notes=state.notes.filter(note=> note.id !== action.payload.id)
    },
    editNote:(state, action:PayloadAction<{id: number,text: string}>)=>{
      state.notes=state.notes.map(note=>note.id===action.payload.id? {...note, text: action.payload.text}: note)
    },
    addTeg:(state, action: PayloadAction<{tag: string}>)=>{
      const tag = action.payload.tag
      const tags = state.tags
      if(!tags.includes(tag)){tags.push(action.payload.tag)}
    },
    addSelectedTeg:(state, action: PayloadAction<{tag: string}>)=>{
      const tag = action.payload.tag
      const tags = state.selectedTags
      if(!tags.includes(tag)){state.selectedTags.push(action.payload.tag)}
    },
    deleteSelectedTag: (state, action:PayloadAction<{tag: string}>)=>{
      state.selectedTags=state.selectedTags.filter(selectTeg=> selectTeg !== action.payload.tag)
    }
  }
})

export default AppSlice.reducer;
export const {addAll, addNote, editNote, deleteNote, addTeg, addSelectedTeg, deleteSelectedTag } = AppSlice.actions
