//Trabajando con componentes de estado - Clases
//Apis  - Eventos
import React from 'react'

//Importar nuestro componente
import MovieList from './MovieList'

const movies = [{
    id: 1,
    title: 'Titulo pelicula',
    rating: 2,
    awards: 3,
    length: 4,
}]

function Movie() {
    return (
        <React.Fragment>
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
                                    //console.log(this.state.movies)
                                    movies.map((movie, index) => {
                                        return <MovieList  {...movie} key={index} />
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Movie
