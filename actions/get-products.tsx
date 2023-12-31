import qs from "query-string";
import { Product } from "@/type";

const URL = `${process.env.NEXT_PUBLIC_API_PUBLIC}/products`

interface Query {
  categoryId?:string
  colorId?: string
  sizeId?:string
  isFeatured?: boolean
}

const getProducts = async (query: Query): Promise<Product[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      colorId: query.colorId,
      sizeId: query.sizeId,
      categoryId: query.categoryId,
      isFeatured: query.isFeatured
    }
  })
  const res = await fetch(url);

  return res.json()
}

export default getProducts;