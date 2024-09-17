import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { createEntityAdapter } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchFlights = createAsyncThunk('flights/fetchFlights', async () => {
  const response = await axios.get('http://localhost:3000/flights')
  return response.data
})

const flightsAdapter = createEntityAdapter()

const flightsSlice = createSlice({
  name: 'flights',
  initialState: flightsAdapter.getInitialState(),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFlights.fulfilled, flightsAdapter.setAll)
  },
})

export const { selectAll: selectAllFlights } = flightsAdapter.getSelectors((state) => state.flights)
export default flightsSlice.reducer
