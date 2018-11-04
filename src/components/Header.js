import React from 'react'
import PropTypes from 'prop-types'
import logo from '../images/logo.png'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo" style={{backgroundImage: `url(${logo})`, backgroundSize: 'contain'}}>
            
        </div>
        <div className="content">
            <div className="inner">
                <h1>Sylaroga</h1>
                <p>Pas de facture, pas de devis,
                <br/>Telle est notre philosophie.</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Présentation</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Les locaux</a></li>
                <li><a href="javascript:;" >toto</a></li>
                <li><a href="javascript:;" >toto</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
