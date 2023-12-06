export type Note = {
  id: number, text: string, tag: string
}

export type State = {
  notes: Note[];
  tags: string[];
  selectedTags: string[]
}

export const checkTag = (text:string): string =>{
  return text.includes("#") && text.slice(text.indexOf("#")).length > 1? text.slice(text.indexOf("#")) : ''
}

export const checkHaveTag = (tag: string, state: State): boolean => {
  const texts = state.notes
    .map((note) => note.text)
    .map((text) => checkTag(text));
  const isHave = texts.indexOf(tag)>0
  console.log('--------------',isHave,'#',texts,'%',tag);
  ;
  return isHave;
};

export const checkHaveLastTag = (tag: string, state: State): boolean => {
  const texts = state.notes
    .map((note) => note.text)
    .map((text) => checkTag(text));
  const isHave = texts.indexOf(tag) === texts.lastIndexOf(tag);
  return isHave;
};




export const initialState:State = {
  notes: [],
  tags: [],
  selectedTags: []
}
