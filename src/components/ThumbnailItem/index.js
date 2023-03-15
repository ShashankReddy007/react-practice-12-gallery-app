// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageItem, displayImage, isActive} = props
  const {id, imageUrl, thumbnailUrl, imageAltText, thumbnailAltText} = imageItem
  const thumbnailClassName = isActive ? `thumbnail active` : `thumbnail`

  const showImage = () => {
    displayImage(imageUrl)
  }

  return (
    <li className="list-item">
      <button type="button" className="thumbnail-button" onClick={showImage}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={thumbnailClassName}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
