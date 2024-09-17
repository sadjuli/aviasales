const Filters = ({loading, companies, setCompaniesFilter, setConnectionsFilter}) => {

    return (
        <>
            <div className="sidebar__filter transfers">
            <div className="sidebar__filter-name">Количество пересадок</div>
            <div className="sidebar__filter-options">
              <div className="sidebar__filter-control">
                <label>
                  <input
                    type="checkbox"
                    value={0}
                    onChange={() => setConnectionsFilter([0])}
                  />{' '}
                  Без пересадок
                </label>
              </div>
              <div className="sidebar__filter-control">
                <label>
                  <input
                    type="checkbox"
                    value={1}
                    onChange={() => setConnectionsFilter([1])}
                  />{' '}
                  1 пересадка
                </label>
              </div>
              <div className="sidebar__filter-control">
                <label>
                  <input
                    type="checkbox"
                    value={1}
                    onChange={() => setConnectionsFilter([2])}
                  />{' '}
                  2 пересадки
                </label>
              </div>
              <div className="sidebar__filter-control">
                <label>
                  <input
                    type="checkbox"
                    value={1}
                    onChange={() => setConnectionsFilter([3])}
                  />{' '}
                  3 пересадки
                </label>
              </div>
            </div>
          </div>
          <div className="sidebar__filter airlines">
            <div className="sidebar__filter-name">Компании</div>
            <div className="sidebar__filter-options">
                {loading ? ( 'Загрузка компаний...' ) : Array.isArray(companies) && companies.length > 0 ? (
                companies.map((company) => (
                    <div className="sidebar__filter-control" key={company.id}>
                        <label>
                            <input
                            type="checkbox"
                            value={1}
                            onChange={() => setCompaniesFilter([company.name])}
                            />{' '}
                            {company.name}
                        </label>
                    </div>
                ))
                ) : ( 'Нет данных')}
            </div>
          </div>
        </>
    )
}

export default Filters