import { IProduct } from 'Models/types';
import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Product = ({ product }: IProduct) => {
  return (
    <Col md={3} className="mb-3">
      <Card>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Product;
