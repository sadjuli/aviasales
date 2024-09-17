import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { createEntityAdapter } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchCompanies = createAsyncThunk('companies/fetchCompanies', async () => {
  const response = await axios.get('http://localhost:3000/companies')
  return response.data
})

const companiesAdapter = createEntityAdapter()

const companiesSlice = createSlice({
  name: 'companies',
  initialState: companiesAdapter.getInitialState({
    loading: false,
    error: null,
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCompanies.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCompanies.fulfilled, (state, action) => {
        companiesAdapter.setAll(state, action.payload);
        state.loading = false;
      })
      .addCase(fetchCompanies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
})

export const { selectAll: selectAllCompanies } = companiesAdapter.getSelectors((state) => state.companies);
export default companiesSlice.reducer;
