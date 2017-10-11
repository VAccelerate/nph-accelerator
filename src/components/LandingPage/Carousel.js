import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Carousel } from 'react-responsive-carousel'
import data from './landingPageData'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import './carousel.css'

class Advice extends Component{

  handleChange () {
    this.props.dispatch({type: 'CHANGE_LANDING_DISPLAY', payload: this.refs.carousel.state.selectedItem})
  }

  render () {
    const attributes = {
      showThumbs: false,
      showArrows: false,
      showStatus: false,
      infiniteLoop: true,
      autoPlay: true,
      dynamicHeight: false,
      interval: 5000,
      onChange: this.handleChange.bind(this),
      selectedItem: this.props.landingCarousel
    }

    function renderCarouselDiv (carouselDiv) {
      return (
        <div>
          <img src={carouselDiv.imgSrc} alt='App feature screen-shot' className='carouselSlide' />
        </div>
      )
    }

    return (
      <div>
        <Carousel {...attributes} ref='carousel' className='landingCarousel'>
          {data.benefits.map(renderCarouselDiv)}
        </Carousel>
        <div>
          <div className='carouselHeading'>{data.benefits[this.props.landingCarousel].title}</div>
          <div className='carouselSubheading'>{data.benefits[this.props.landingCarousel].description}</div>
        </div>
      </div>
    )
  }
}

export default connect(state => state)(Advice)
