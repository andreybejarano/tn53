import React from 'react'

class GenresInDb extends React.Component {
    state = {
        genres: [],
        overTitle: false
    }

    componentDidMount() {
        fetch('http://localhost:3001/api/genres')
            .then(res => res.json())
            .then(data => {
                this.setState({ genres: data.data })
            })
            .catch(err => {
                console.log(err)
            })
    }

    onTitleOver = () => {
        this.setState({ overTitle: !this.state.overTitle })
    }

    render() {
        return (
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800" onMouseOver={this.onTitleOver}>Genres in Data Base</h5>
                    </div>
                    <div className={`card-body ${this.state.overTitle ? 'bg-secondary' : ''}`}>
                        <div className="row">
                            {this.state.genres.map((genre, index) =>
                                <div className="col-lg-6 mb-4" key={index}>
                                    <div className="card bg-dark text-white shadow">
                                        <div className="card-body">
                                            {genre.name}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default GenresInDb