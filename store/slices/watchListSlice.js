import {createSlice} from "@reduxjs/toolkit";


const watchListSlice = createSlice({

                        name:"watchList",
                        initialState: [],
                        reducers:{
                                    addMovie(state, action)
                                    {
                                      let addItemIndex = state.findIndex((addItem) => addItem.id === action.payload.id);

                                      if(addItemIndex >= 0)
                                      {
                                        state[addItemIndex].addMovieQuantity += 1;
                                      }else
                                       {
                                         let addTempMovie = {...action.payload, addMovieQuantity : 1}
                                         state.push(addTempMovie);
                                       }

                                    },

                                    removeMovie(state, action)
                                    {
                                      return state.filter((item) => item.id !== action.payload);
                                      // state.pop(action.payload);
                                      //state.splice(action.payload, 1);

                                    },

                                    clearAll(state, action)
                                    {
                                      return state = [];
                                    },

                                }

                          });




export const { addMovie, removeMovie, clearAll} = watchListSlice.actions;
export default watchListSlice.reducer;
