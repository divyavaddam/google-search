// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionsList, updateSearchInput} = props
  const {suggestion} = suggestionsList
  const onArrowClick = () => {
    updateSearchInput(suggestion)
  }
  return (
    <li className="suggestion-item">
      <p className="para">{suggestion}</p>
      <button type="button" className="button" onClick={onArrowClick}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          className="arrow"
          alt="arrow"
        />
      </button>
    </li>
  )
}
export default SuggestionItem
