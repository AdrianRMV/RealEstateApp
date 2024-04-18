import { useState } from 'react';
import './searchBar.scss';

const types = ['buy', 'rent'];

function SearchBar() {
    const [query, setQuery] = useState({
        type: 'buy',
        location: '',
        minPirce: 0,
        maxPrice: 0,
    });

    const switchType = (value) => {
        setQuery((prev) => ({ ...prev, type: value }));
    };

    return (
        <div className="searchBar">
            <div className="type">
                {types.map((type) => (
                    <button
                        key={type}
                        onClick={() => switchType(type)}
                        className={query.type === type ? 'active' : ''}
                    >
                        {type}
                    </button>
                ))}
            </div>
            <form>
                <input
                    type="text"
                    name="location"
                    placeholder="City Location"
                    id=""
                />
                <input
                    type="number"
                    name="minPrice"
                    min={0}
                    max={10000000}
                    placeholder="Min Price"
                    id=""
                />
                <input
                    type="number"
                    name="maxPrice"
                    min={0}
                    max={10000000}
                    placeholder="Max Price"
                    id=""
                />
                <button>
                    <img src="/search.png" alt="icon search" />
                </button>
            </form>
        </div>
    );
}

export default SearchBar;
