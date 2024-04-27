import Container from "../components/container";
import Footer from "../components/footer";
export interface Root {
  products: Product[];
  count: number;
}

export interface Product {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
  createdAt: string;
  updatedAt: string;
}

const Home = function () {
  return (
    <div>
      <Container />
      <Footer />
    </div>
  );
};
export default Home;
