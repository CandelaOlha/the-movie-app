import "../styles/Search.scss";

const Search = () => {
    return (
        <main className="search-section">
            <div className="search-section-content-container">
                <form className="search-form">
                    <label className="search-label">Search a movie
                        <input type="text" placeholder="Type a title..." className="search-input"/>
                    </label>
                    <button className="search-button">Search</button>
                </form>
            </div>
        </main>
    )
}

export default Search;