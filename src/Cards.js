import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards({index, title, release_date,  poster_path,}) {
  return (
    <Col key={index} lg={4} md={6} sm={12} className='mb-5'>
    <Card style={{ width: '20rem', height:'650px' }} className='shadow bg-dark text-white'>
      <Card.Img variant="top" src={poster_path} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {(release_date).slice(0,100)}
        </Card.Text>
        {/* <Button variant="primary">Show Detail</Button> */}
      <Button variant="danger">Show Detail</Button>
      </Card.Body>
    </Card>
    </Col>
  );
}

export default Cards;
