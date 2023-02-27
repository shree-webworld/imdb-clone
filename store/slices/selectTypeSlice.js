import {createSlice} from "@reduxjs/toolkit";


const selectTypeSlice = createSlice({

                        name:"selectType",
                        initialState: "movie",
                        reducers:{
                                    setSelectType(state, action)
                                    {
                                      return state = action.payload;
                                    }
                                 }
                      });


export const { setSelectType } = selectTypeSlice.actions;
export default selectTypeSlice.reducer;
