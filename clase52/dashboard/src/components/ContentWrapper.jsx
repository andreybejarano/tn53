import React from 'react'

import TopBar from './TopBar'
import ContentRowTop from './ContentRowTop'
import Movie from './Movie';
import Footer from './Footer'

function ContentWrapper() {
    return (
        <div id="content-wrapper" className="d-flex flex-column">

			{/* <!-- Main Content --> */}
			<div id="content">

				{/* <!-- Topbar --> */}
				<TopBar />
				{/* <!-- End of Topbar --> */}

				{/* <!-- Content Row Top --> */}
				<ContentRowTop />
				{/* <!--End Content Row Top--> */}
				<Movie />
			</div>
			{/* <!-- End of MainContent --> */}

			{/* <!-- Footer --> */}
			<Footer />
			{/* <!-- End of Footer --> */}

		</div>
    )
}

export default React.memo(ContentWrapper)
