import React,{Component} from 'react'
import "./css/styles.css"
class Header extends Component{

  componentDidMount() {
    window.addEventListener("scroll", this.resizeHeaderOnScroll);
  }
  resizeHeaderOnScroll() {
    const distanceY = window.pageYOffset || document.scrollTop,
      shrinkOn = 200,
      headerEl = document.getElementById("js-header");

    if (distanceY > shrinkOn) {
      headerEl.classList.add("smaller");
    } else {
      headerEl.classList.remove("smaller");
    }
  }

  render() {
    return (
      <div id="wrapper">
        <header id="js-header">
          <div className="container clearfix">
            <h1 id="logo">TechFlux</h1>
            <nav>
              <a href="#services">services</a>
              <a href="#about">about</a>
              <a href="#contact">contact</a>
            </nav>
          </div>
        </header>
        </div>
        )
    }

}


export default Header;