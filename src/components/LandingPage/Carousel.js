import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { Carousel } from 'react-responsive-carousel'
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'
import data from './landingPageData'

class Advice extends Component{

  handleChange(){
    this.props.dispatch({type: 'CHANGE_LANDING_DISPLAY', payload: this.refs.carousel.state.selectedItem})
  }

  render(){

    const attributes = {
      showThumbs: false,
      showArrows: false,
      showStatus: false,
      infiniteLoop: true,
      autoPlay: true,
      dynamicHeight: true,
      onChange: this.handleChange.bind(this),
      selectedItem: this.props.landingCarousel
    }

    function renderCarouselDiv (carouselDiv) {
      return (
        <div>
          <img src={carouselDiv.imgSrc} />
        </div>
      )
    }

    return (
      <div>
        <Carousel {...attributes} ref='carousel'>
          {data.benefits.map(renderCarouselDiv)}
        </Carousel>
        <div>
          <h3>{data.benefits[this.props.landingCarousel].title}</h3>
          <p>{data.benefits[this.props.landingCarousel].description}</p>
        </div>
      </div>
    )

  }
}

export default connect(state => state)(Advice)
