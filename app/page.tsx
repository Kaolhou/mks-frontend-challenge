"use-client";
import constants from "@/util/constants";
import { useQuery } from "@tanstack/react-query";
import Card from "./_card";
export interface Root {
  products: Product[];
  count: number;
}

export interface Product {
  id: number;
  name: string;
  brand: string;
  description: string;
  price: number;
}

const Home = function () {
  return (
    <div>
      <Card />
    </div>
  );
};
export default Home;

// export const getServersideProps: GetServerSideProps<Root> = async function () {
//   const data = await fetch(`${constants.BASE_URL}/products`);
//   const json = (await data.json()) as Root;
//   console.log("oi");

//   return {
//     props: {
//       ...json,
//     },
//   };
// };
