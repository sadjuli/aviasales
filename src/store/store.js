import { configureStore } from '@reduxjs/toolkit'
import companiesReducer from './companiesSlice'
import flightsReducer from './flightsSlice'

const store = configureStore({
  reducer: {
    companies: companiesReducer,
    flights: flightsReducer,
  },
})

export { store }
