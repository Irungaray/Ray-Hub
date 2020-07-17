import React from 'react';

import { getVideoSearch } from'../actions';
import { connect } from'react-redux';

import '../assets/styles/components/Search.scss';

const Search = props => {
    const { getVideoSearch } = props

    const handleInput = (event) => {
        getVideoSearch(event.target.value)
    }

    return (
        <section className="main">
            <h2 className="main__title">¿Qué queres ver hoy?</h2>

            <input
                className="input"
                type="text"
                placeholder="Buscar películas..."
                onKeyUp={handleInput}
            />
        </section>
    )
};

const mapStateToProps = state => {
    return {
        searchResult: state.searchResult,
    }
}

const mapDispatchToProps = {
    getVideoSearch,
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);