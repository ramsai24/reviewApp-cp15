// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {index: 0}

  decrementIndex = () => {
    const {index} = this.state

    if (index <= 0) {
      this.setState({index: 0})
    } else {
      this.setState({index: index - 1})
    }
  }

  incrementIndex = () => {
    const {index} = this.state

    const {reviewsList} = this.props

    console.log(reviewsList.length - 1)

    if (index >= reviewsList.length - 1) {
      this.setState({index: reviewsList.length - 1})
    } else {
      this.setState({index: index + 1})
    }
  }

  render() {
    const {index} = this.state
    const {reviewsList} = this.props

    const {imgUrl, username, companyName, description} = reviewsList[index]

    return (
      <div className="app-container">
        <div className="profile-container">
          <h1 className="title">Reviews</h1>
          <div className="profile-details-container">
            <button
              className="arrow-btn"
              type="button"
              onClick={this.decrementIndex}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
              />
            </button>
            <div className="each-profile-container">
              <img src={imgUrl} alt={username} />
              <p className="username">{username}</p>
              <p>{companyName}</p>
              <p>{description}</p>
            </div>
            <button
              className="arrow-btn"
              type="button"
              onClick={this.incrementIndex}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
              />
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
