import {AiOutlineDelete} from 'react-icons/ai'

import './index.css'

const AppItem = props => {
  const {details, deleteSong} = props
  const {id, imageUrl, name, genre, duration} = details

  const ok = () => {
    deleteSong(id)
  }

  return (
    <li className="app-li">
      <div className="a">
        <img src={imageUrl} className="tr" alt="track" />
        <div className="g-con">
          <p className="na">{name}</p>
          <p className="ge">{genre}</p>
        </div>
      </div>
      <div className="b">
        <p className="time">{duration}</p>
        <button className="but" testid="delete" onClick={ok} type="button">
          <AiOutlineDelete className="del" />
        </button>
      </div>
    </li>
  )
}

export default AppItem
