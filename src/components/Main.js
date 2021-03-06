import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

import raphael from '../images/raphael.jpg'
import jerome from '../images/jerome.jpg'
import alexandre from '../images/alexandre.jpg'
//import baptiste from '../images/baptiste.jpg'
import ambre from '../images/ambre.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>
        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Présentation</h2>
          <h3 className="">Ambre Palanque</h3>
          <span className="image main"><img src={ambre} alt="" /></span>
          <p>L'intello.</p>
          <p>Dev' sur son temps sobre</p>

          <h3 className="">Jérome Fabre</h3>
          <span className="image main"><img src={jerome} alt="" /></span>
          <p>Le bolide.</p>
          <p>Graphiste hors tours du Man</p>
		  <h3 className="">Baptiste Duprat</h3>
          <span className="image main"><img src={pic01} alt="" /></span>
          <p>Lead plagiste.</p>
          <p>Chef de projet digital, pour l'instant</p>

			<h3 className="">Alexandre Techer</h3>
          <span className="image main"><img src={alexandre} alt="" /></span>
          <p>L'exilé.</p>
          <p>Intégrateur pour malvoyant</p>

		  <h3 className="">Raphaël Gomes</h3>
          <span className="image main"><img src={raphael} alt="" /></span>
          <p>L'altérophobe.</p>
          <p>Stagiaire Sushi</p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Les locaux</h2>
          <h3>Le duplex</h3>
          <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FLEDUPLEX.TOULOUSE%2Fvideos%2F10155742005632970%2F&show_text=0&width=560" width="100%" height="500" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <span className="image main"><img src={pic03} alt="" /></span>
          <p>Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices. Aliquam libero et malesuada fames ac ante ipsum primis in faucibus. Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit amet.</p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          <ul className="icons">
            <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
            <li><a href="#" className="icon fa-github"><span className="label">GitHub</span></a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main