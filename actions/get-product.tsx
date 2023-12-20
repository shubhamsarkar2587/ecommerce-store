import { Product } from "@/type";

const URL = `${process.env.NEXT_PUBLIC_API_PUBLIC}/products`

const getProduct = async (id: string): Promise<Product> => {
  const res = await fetch(`${URL}/${id}`);

  return res.json()
}

export default getProduct;