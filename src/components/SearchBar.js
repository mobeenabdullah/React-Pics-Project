import React from 'react';

class SearchBar extends React.Component {

    state = { term: '' };

    onFormSubmit = event => {
        event.preventDefault();

        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <label>Image Search</label>
                    <input type="text" className="field" value={this.state.term} onChange={(e) => this.setState({ term: e.target.value })} />
                </form>
            </div>
        );
    }
}

export default SearchBar;