const { Jumbotron, Button, Container, Image } = require("react-bootstrap")


const Album = () => {
  return (
    <Jumbotron>
      <Container>
        <div className='d-flex align-items-end bg-dark'>
          <div>
            <Image className='rounded' style={{ width: '200px' }} alt="img" src='' />
          </div>
          <div className='m-4'>
            <small className='ml-2'> ALBUM</small>
            <h1>Album Title</h1>
            <h5>Album info</h5>
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
        <div className="badge badge-light text-wrap mx-2" style={{ width: '3rem', height: '20px' }}>
          <b>. . .</b>
        </div>
      </div>
    </Jumbotron >
  )
}

export default Album