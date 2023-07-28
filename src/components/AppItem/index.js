// Write your code here
import './index.css'

const AppItem = props => {
  const {eachItem} = props
  const {appName, imageUrl} = eachItem

  return (
    <li className="app-container">
      <img src={imageUrl} alt={appName} className="image" />
      <p className="text">{appName}</p>
    </li>
  )
}

export default AppItem
