import Sidebar from './components/Sidebar'
import ContentWrapper from './components/ContentWrapper'

import './App.css'

function App() {
  return (
    <div id="wrapper">

		{/* <!-- Sidebar --> */}
		<Sidebar />
		{/* <!-- End of Sidebar --> */}

		{/* <!-- Content Wrapper --> */}
		<ContentWrapper />
		{/* <!-- End of Content Wrapper --> */}

	</div>
  )
}

export default App
