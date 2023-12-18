export interface Billboard {
  id: string
  label: string
  imageurl: string
}

export interface Category {
  id: string,
  name: string,
  billboard: Billboard,
}