import { withRouter } from "react-router-dom"

const { Image } = require("react-bootstrap")

const Track = (props) => {
  return (
    <div className='track-container'>
      <div className='img-container'>
        <Image
          style={{ borderRadius: '10px', width: '85%' }}
          src={props.img}
          onClick={() => props.history.push('/album/' + props.id)}
        />
        <div className='btn-container'>
          <button>
            <div className='arrow-right'></div>
          </button>
        </div>
      </div>

      <div className='track-body'>
        <a href="#ss">{props.title}</a>
        <div>
          <span>{props.artistName}</span>
        </div>
      </div>
    </div>
  )
}

export default withRouter(Track)