import { NavLink } from 'react-router-dom';

// TODO: bg-dark for navbar color (maybe) with white font color
// TODO: check sticky vs fixed for content
export default function NavBar() {
    return (
        <nav className='navbar navbar-expand-lg bg-body-tertiary fixed-top bg-white shadow p-3 mb-5 rounded'>
            <div className='container-fluid'>
                <NavLink className='navbar-brand' aria-current='page' to='/'>
                    Game of Thrones
                </NavLink>
                <button
                    className='navbar-toggler'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#navbarSupportedContent'
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                    <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                        <li className='nav-item'>
                            <NavLink className='nav-link' aria-current='page' to='/'>
                                Home
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className='nav-link' to='/houses' end>
                                Houses
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className='nav-link' to='/characters'>
                                Characters
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className='nav-link' to='/quotes'>
                                Quotes
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className='nav-link' to='/maps'>
                                Maps
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
    
}