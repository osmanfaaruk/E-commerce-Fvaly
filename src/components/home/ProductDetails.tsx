import useAsync from 'hooks/useAsync';
import { IProduct } from 'Models/types';
import React, { useCallback } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useParams } from 'react-router-dom';
import ProductService from 'services/ProductService';
import ProductsSkeleton from 'skelatons/ProductsSkeleton';
import imageUrlParser from 'utils/imageUrlParser';

interface IPrams {
  id: string;
}
const ProductDetails = () => {
  const { id } = useParams<IPrams>();
  const getProduct = useCallback(() => {
    return ProductService.getProductsByID(id);
  }, [id]);
  const { data, isLoading, isSuccess, isError, error } =
    useAsync<IProduct>(getProduct);
  const { name, image, description, price } = (data || {}) as IProduct;

  // Redux process

  //  const dispatch = useDispatch(function)

  return (
    <div className="product__details__component my-5">
      <Container>
        <div className="wrapper bg-white rounded border">
          {isLoading && (
            <h3>
              <ProductsSkeleton />
            </h3>
          )}
          {isSuccess && (
            <Row>
              <Col md={4}>
                <img src={imageUrlParser(data ? image : '')} alt={name} />
              </Col>
              <Col>
                <h3>{name}</h3>
                <h1>${price}</h1>
                <button className="btn btn-primary">
                  <AiOutlineShoppingCart />
                  Add To Cart
                </button>
                <p className="mt-5">{description}</p>
              </Col>
            </Row>
          )}
          {isError && <h1>{error}</h1>}
        </div>
      </Container>
    </div>
  );
};

export default ProductDetails;
