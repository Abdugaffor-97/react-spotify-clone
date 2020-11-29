import { Component } from "react"
import { withRouter } from "react-router-dom";

const { Jumbotron, Button, Container, Image, Spinner } = require("react-bootstrap")


class Album extends Component {
  state = {
    albumInfo: null,
    fetching: true
  }

  fetchAlbum = async () => {
    const url = "https://deezerdevs-deezer.p.rapidapi.com/album/"
    const headers = new Headers({
      "x-rapidapi-key": "8085f2770emshc1cb3109961c5b5p130d8djsn976ae5a2d25d",
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    });

    try {
      const response = await fetch(url + this.props.match.params.id, {
        method: 'GET',
        headers,
      })
      const result = await response.json()
      const albumInfo = result
      this.setState({ albumInfo: albumInfo, fetching: false })
    } catch (error) {
      console.log(error)
    }
  }


  componentDidMount = () => {
    this.fetchAlbum()
  }


  render() {
    return (
      <div className='album-page main-section'>
        <Jumbotron>
          {this.state.albumInfo ?
            <>
              <Container>
                <div className='d-flex align-items-end'>
                  <div>
                    <Image
                      className='rounded'
                      style={{ width: '200px' }} alt="img"
                      src={this.state.albumInfo.cover_big}
                    />
                  </div>
                  <div className='m-4'>
                    <small className='ml-2'> {this.state.albumInfo.type}</small>
                    <h1>{this.state.albumInfo.title}</h1>
                    <h5>{this.state.albumInfo.label}</h5>
                  </div>
                </div>
              </Container>

              <div className='d-flex align-items-center mt-4'>
                <i className="fas fa-play-circle fa-3x text-success bg-white rounded-circle mx-4"></i>
                <Button
                  type="button"
                  className="btn btn-outline-light mr-3"
                  style={{ width: '6rem', height: '32px' }}
                >Following
              </Button>



              </div>
            </> :
            <Spinner animation="grow" />
          }
        </Jumbotron >
        <div>
          {this.state.albumInfo ? (
            <>
              {this.state.albumInfo.tracks.data.map(track => (
                <div
                  key={track.id}
                  className="d-flex justify-content-between rounded pt-3 pb-2 mx-3 trackHover"
                >
                  <a
                    href="#sss"
                    className="card-title trackHover px-3"
                    style={{ color: 'white' }}>
                    {track.title}
                  </a>
                  <div>
                    <i className="far fa-heart text-white"></i>
                    <span className=" mx-1 duration pr-3 text-white-50">
                      {
                        ('0' + Math.floor(track.duration / 60)).substr(-2) + ':' + (('0' + track.duration % 60)).substr(-2)
                      }
                    </span>
                  </div>
                </div>
              ))}

            </>
          )
            :
            <Spinner animation="grow" />}


        </div>
      </div>
    )
  }
}
export default withRouter(Album)