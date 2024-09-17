const Sort = ({mode, handleMode}) => {

    return (
        <div className="main__filter">
            <span
                className={`filter-item ${mode === 'cheap' ? 'active' : ''}`}
                onClick={() => handleMode('cheap')}
            >
                Самый дешевый
            </span>
            <span
                className={`filter-item ${mode === 'fast' ? 'active' : ''}`}
                onClick={() => handleMode('fast')}
            >
                Самый быстрый
            </span>
            <span
                className={`filter-item ${mode === 'optimal' ? 'active' : ''}`}
                onClick={() => handleMode('optimal')}
            >
                Самый оптимальный
            </span>
            </div>
    )
}

export default Sort