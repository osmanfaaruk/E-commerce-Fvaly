import requests from './httpService';

class ProductService {
  getProducts(): Promise<any> {
    return requests.get('/product');
  }

  getProductsByID(id: string): Promise<any> {
    return requests.get(`/product/ ${id}`);
  }

  addProduct(body: object): Promise<any> {
    return requests.post(`/product/`, body);
  }

  updateProduct(id: string, body: object): Promise<any> {
    return requests.post(`/product/ ${id}`, body);
  }

  deleteProduct(id: string): Promise<any> {
    return requests.delete(`/product/ ${id}`);
  }
}
export default new ProductService();
