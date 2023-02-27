import { configureStore } from '@reduxjs/toolkit';
import watchListSlice from "./slices/watchListSlice";
import selectTypeSlice from "./slices/selectTypeSlice";



const store = configureStore({
                                reducer: {
                                            watchList: watchListSlice,
                                            selectType: selectTypeSlice
                                         },
                            });

export default store;
