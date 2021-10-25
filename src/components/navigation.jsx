export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='#page-top'>
            <img src="img/logo.png" />
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#island' className='page-scroll'>
                THE ISLAND
              </a>
            </li>
            <li>
              <a href='#level' className='page-scroll'>
                LEVELS
              </a>
            </li>
            <li>
              <a href='#nfts' className='page-scroll'>
                MARKETPLACE
              </a>
            </li>
            <li>
              <a href='#roadmap' className='page-scroll'>
                ROADMAP
              </a>
            </li>
            {/* <li>
              <a href='#testimonials' className='page-scroll'>
                Testimonials
              </a>
            </li>
            <li>
              <a href='#team' className='page-scroll'>
                Team
              </a>
            </li>
            <li>
              <a href='#contact' className='page-scroll'>
                Contact
              </a>
            </li> */}
          </ul>
          <div className="header-meet">
              <a className='main-button'>
                Meet
              </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
