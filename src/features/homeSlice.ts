import { createSlice } from '@reduxjs/toolkit';

export interface HomeState {
    value: string,
    url: Record<string, any>,
    genres: Record<string, any>
}

const initialState: HomeState = {
    value: '',
    url: {},
    genres: {}
  }

export const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers:{
        getApiConfiguration: (state, action) => {
            state.url = action.payload
        },
        getGenres: (state, action) => {
            state.genres = action.payload
        },
    },
});

export const { getApiConfiguration,getGenres } = homeSlice.actions

export default homeSlice.reducer