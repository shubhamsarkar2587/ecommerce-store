import { Category } from "@/type";

const URL = `${process.env.NEXT_PUBLIC_API_PUBLIC}/categories`

const getCategory = async (id: string): Promise<Category> => {
  const res = await fetch(`${URL}/${id}`);

  return res.json()
}

export default getCategory;