//Trabajando con componentes de estado - Clases
//Apis  - Eventos
import React from 'react'

//Importar nuestro componente
import MovieList from './MovieList'

class Movie extends React.Component {
    state = {
        movies: []
    }

    componentDidMount() {

    }

    render() {
        return (
            <>
                {/*<!-- MOVIES LIST -->*/}
                <h1 className="h3 mb-2 text-gray-800 ">All the movies in the Database</h1>

                {/*<!-- DataTales Example -->*/}
                <div className="card shadow mb-4">
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Titulo</th>
                                        <th>Calificación</th>
                                        <th>Premios</th>
                                        <th>Duración</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.movies.map((movie, index) => {
                                            return <MovieList  {...movie} key={index} />
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Movie
