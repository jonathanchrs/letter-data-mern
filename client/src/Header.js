import React from 'react'

const Header = () => {
    return (
        <div className="mt-5 mb-5">
            <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    <a class="navbar-item" href="https://bulma.io">
                        <i class="fas fa-paper-plane fa-2x orange"></i>
                        <h1 className="has-text-weight-bold is-size-2 ml-2">LETTER</h1>
                    </a>
                </div>

                <div id="navbarBasicExample" class="navbar-menu">
                    <div class="navbar-start">
                        <a class="navbar-item">
                            Home
                        </a>

                        <a class="navbar-item">
                            About
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header
