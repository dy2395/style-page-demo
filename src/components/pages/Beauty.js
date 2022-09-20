import React, { useState } from 'react';
import {
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
  Row,
  Col,
  CardHeader,
  Button
} from 'reactstrap';
import Form from 'react-bootstrap/Form'

import {fetchMakeup} from '../../utils/API';

export default function Beauty() {
  const [searchedMakeup, setSearchedMakeup] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!searchInput) {
      return false;
    }
  
    try {
      const response = await fetchMakeup(searchInput);

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      const products = await response.json();

      function ImageExist(url) {
        var img = new Image();
        img.src = url;
        return img.height !== 0;
      }
      const filteredData = products.filter (makeup => ImageExist(makeup.image_link)===true);

      const makeupData = filteredData.map((makeup) => ({
        id: makeup.id,
        brand: makeup.brand.charAt(0).toUpperCase() + makeup.brand.slice(1),
        name: makeup.name,
        description: makeup.description,
        link: makeup.product_link,
        image: makeup.image_link
      }));

      setSearchedMakeup(makeupData);
      setSearchInput('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>Beauty</h1>
      <p>
       Skincare, hair, makeup
      </p>
      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <Card body inverse style={{ backgroundColor: '#d37bfcea'}}>
            <CardBody>
              <CardHeader tag="h1">Search for a makeup product:</CardHeader>
              <Form onSubmit={handleFormSubmit}>
                <Form.Group>
                  <Form.Control
                    type="text"
                    name="searchInput"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                  />
                <Button color="warning" type="submit" className="m-2">
                  Find
                </Button>
                </Form.Group>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row fluid="ture">
                  {searchedMakeup.map((makeup) => {
                    return (
                      <Col key={makeup.id} md={4}>
                      <Card border='dark'>
                        {makeup.image ? (
                          <CardImg src={makeup.image} alt={`Image for ${makeup.brand} - ${makeup.name}`} top />
                        ) : null}
                        <CardBody>
                          <CardTitle>{makeup.brand} - {makeup.name}</CardTitle>
                          <p className='small'> Description: {makeup.description}</p>
                          <CardText>Link to the product:<a href={makeup.link}>{makeup.link}</a></CardText>
                        </CardBody>
                      </Card>
                      </Col>
                    )
                  })}
                </Row>

    </div>
  );
}


