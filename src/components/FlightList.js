import React from 'react'

const FlightList = ({ flights, companies, mode, connectionsFilter, companiesFilter, showAmount, onLoadMore }) => {
  if (!flights || !flights.length) {
    return
  }
  let filteredFlights = flights

  if (connectionsFilter.length > 0) {
    filteredFlights = filteredFlights.filter((flight) =>
      connectionsFilter.includes(flight.connectionAmount)
    )
  }

  if (companiesFilter.length > 0) {
    filteredFlights = filteredFlights.filter((flight) =>
      companiesFilter.includes(flight.company)
    )
  }

  const getCompanyLogo = (companyName) => {
    return companies.find((item) => item.name === companyName).logoImg
  }

  switch (mode) {
    case 'cheap':
      filteredFlights.sort((a, b) => a.price - b.price)
      break
    case 'fast':
      filteredFlights.sort((a, b) => a.duration - b.duration)
      break
    default:
      filteredFlights.sort((a, b) => a.connectionAmount - b.connectionAmount)
      break
  }

  return (
    <div className='result__items'>
      {filteredFlights.slice(0, showAmount).map((flight) => (
        <div className='result__item' key={flight.id}>
          <div className='result__item-main'>
            <div className='result__item-price'>{flight.price} Р</div>
            <div className='result__item-airline'>
              <img src={`/images/airlines/${getCompanyLogo(flight.company)}`} alt={flight.company} />
            </div>
          </div>
          <div className='result__item-info'>
            <div className='result__item-info-item'>
              <div>{flight.from} - {flight.to}</div>
              <div>{flight.time.startTime} - {flight.time.endTime}</div>
            </div>
            <div className='result__item-info-item'>
              <div>В пути</div>
              <div>{flight.duration}ч</div>
            </div>
            <div className='result__item-info-item'>
              <div>Пересадки</div>
              <div>{flight.connectionAmount != 0 ? ( `Пересадок: ${flight.connectionAmount}` ) : ( 'Без пересадок' )}</div>
            </div>
          </div>
        </div>
      ))}
      <button className='results__more' onClick={onLoadMore}>Загрузить еще билеты</button>
    </div>
  );
};

export default FlightList
