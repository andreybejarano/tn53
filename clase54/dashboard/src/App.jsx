import { Routes, Route } from 'react-router-dom'

import Sidebar from './components/Sidebar'
import ContentWrapper from './components/ContentWrapper'
import GenresInDb from './components/GenresInDb'
import ContentRowMovies from './components/ContentRowMovies'
import LastMovieInDb from './components/LastMovieInDb'
import SearchMovies from './components/SearchMovies'

import './App.css'

function App() {
	return (
		<div id="wrapper">

			{/* <!-- Sidebar --> */}
			<Sidebar />
			{/* <!-- End of Sidebar --> */}

			{/* <!-- Content Wrapper --> */}
			<Routes>
				<Route path="/" element={<ContentWrapper />} />
				<Route path="/genres" element={<GenresInDb />} />
				<Route path="/movies" element={<ContentRowMovies />} />
				<Route path="/last-movie" element={<LastMovieInDb />} />
				<Route path="/search" element={<SearchMovies prueba="esta es una propiedad de prueba" />} />
				<Route path="*" element={<h1>Not Found</h1>} />
			</Routes>
			{/* <!-- End of Content Wrapper --> */}

		</div>
	)
}

export default App
