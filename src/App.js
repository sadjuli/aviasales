import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCompanies } from './store/companiesSlice'
import { fetchFlights } from './store/flightsSlice'
import Header from './components/Header'
import Filters from './components/Filters'
import Sort from './components/Sort'
import FlightList from './components/FlightList'

const App = () => {
  const dispatch = useDispatch()
  const companies = useSelector((state) => { 
    const allCompanies = state.companies.ids.map(id => state.companies.entities[id]);
    return allCompanies;
  });
  const loading = useSelector((state) => state.companies.loading);
  const flights = useSelector((state) => { 
    const allFlights = state.flights.ids.map(id => state.flights.entities[id]);
    return allFlights;
  })
  
  const [mode, setMode] = useState('cheap')
  const [connectionsFilter, setConnectionsFilter] = useState([])
  const [companiesFilter, setCompaniesFilter] = useState([])
  const [showAmount, setShowAmount] = useState(3)

  useEffect(() => {
    dispatch(fetchCompanies())
    dispatch(fetchFlights())
  }, [dispatch])

  const handleLoadMore = () => {
    setShowAmount((prev) => prev + 3)
  }

  const handleMode = (value) => {
    setMode(value)
  }

  return (
    <div>
      <Header />
      <main className="main">
        <div className="sidebar">
          <Filters loading={loading} companies={companies} setCompaniesFilter={setCompaniesFilter} setConnectionsFilter={setConnectionsFilter} />
        </div>
        <div className='content'>
          <Sort mode={mode} handleMode={handleMode} />
          <FlightList
            companies={companies}
            flights={flights}
            mode={mode}
            connectionsFilter={connectionsFilter}
            companiesFilter={companiesFilter}
            showAmount={showAmount}
            onLoadMore={handleLoadMore}
          />
        </div>
      </main>
    </div>
  );
};

export default App;
