import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://fakestoreapi.com',
});

class FakestoreAPI<T> {
  public constructor(public endpoint: string) {}

  getAllProducts = () =>
    axiosInstance.get<T[]>(this.endpoint).then((res) => res.data);
  getProduct = async (id: number | string) => {
    const response = await axiosInstance.get<T>(`${this.endpoint}/${id}`);
    return response.data;
  };
}

export default FakestoreAPI;
