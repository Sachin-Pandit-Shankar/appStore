// Write your code here
import './index.css'

const TabItem = props => {
  const {eachItem, onClickTabUpdate, onActive} = props
  const {displayText, tabId} = eachItem

  const onClickChange = () => {
    onClickTabUpdate(tabId)
  }

  const getUnderLine = onActive ? 'on-active-btn' : ''

  return (
    <li className="tab-container">
      <button
        type="button"
        className={`button ${getUnderLine}`}
        onClick={onClickChange}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
