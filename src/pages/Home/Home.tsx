import Banner from 'components/home/Banner';
import Products from 'components/home/Products';
import React from 'react';
import ProductService from 'services/ProductService';
import useAsync from 'hooks/useAsync';
const Home = () => {
  // const [product, setProduct] = useState<IProduct[]>([]);

  // useEffect(() => {
  //   ProductService.getProducts().then((res) => setProduct(res));
  // }, []);
  // console.log('array', product);

  const { data, isLoading } = useAsync(ProductService.getProducts);
  return (
    <div>
      <Banner />
      <Products isLoading={isLoading} products={data} />
    </div>
  );
};

export default Home;
