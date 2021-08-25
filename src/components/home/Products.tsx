import Product from 'components/common/Product';
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { IProduct } from 'Models/types';
import ProductsSkeleton from 'skelatons/ProductsSkeleton';

interface IProps {
  products: IProduct[] | null;
  isLoading: boolean;
}

const Products = ({ products, isLoading }: IProps) => {
  return (
    <div className="my-5">
      <Container>
        <h2 className="mb-4">Latest Products</h2>
        {isLoading && <Row>{<ProductsSkeleton />}</Row>}
        {!isLoading && (
          <Row>
            {products?.map((product: IProduct) => (
              <Product key={product._id} product={product} />
            ))}
          </Row>
        )}
      </Container>
    </div>
  );
};

export default Products;
