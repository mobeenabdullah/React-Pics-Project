import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar'

class App extends React.Component {

    state = { images: [] }

    onSearchSubmit = async term => {

        const response = await axios.get('https://api.unsplash.com/search/photos', {

            params: { query: term },
            headers: {
                Authorization: 'Client-ID d3ckCRc7pUDlhUqXMMjTPaw8tzKZyvU4oUD20kqHePo'
            }

        });

        this.setState({ images: response.data.results });

    }

    render() {
        return (
            <div className="ui container" >
                <SearchBar onSubmit={this.onSearchSubmit} />
                Found: {this.state.images.length} images
            </div>
        );
    }
}

export default App;