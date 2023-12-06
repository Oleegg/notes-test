import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Note, checkTag, initialState } from './additionally'


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
        id: Date.now(),
        text: action.payload.text,
        tag: checkTag(action.payload.text)
      })
    },
    deleteNote: (state, action:PayloadAction<{id: number}>)=>{
      state.notes=state.notes.filter(note=> note.id !== action.payload.id)
    },
    editNote:(state, action:PayloadAction<{id: number, text: string, tag: string}>)=>{
      state.notes=state.notes.map(note=>note.id===action.payload.id? {...note, text: action.payload.text,tag: action.payload.tag}: note)
    },
    addTeg:(state, action: PayloadAction<{tag: string}>)=>{
      const tag = action.payload.tag
      const tags = state.tags
      if(!tags.includes(tag)){tags.push(action.payload.tag)}
    },
    deleteTag: (state, action:PayloadAction<{tag: string}>)=>{
      state.tags=state.tags.filter(tag=> tag !== action.payload.tag)
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
export const {addAll, addNote, editNote, deleteNote, addTeg, deleteTag, addSelectedTeg, deleteSelectedTag } = AppSlice.actions
