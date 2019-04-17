export type Category = {
  delivery_type: {
    id: string,
    name: string,
  },
  id: string,
  image_url: string,
  name: string,
  places_count: number
}

export type Main = {
  id: string,
  image_url: string,
  name: string,
  categories: Array<Category>,
}

export type Auth = {
  token_type: string,
  expires_in: number,
  access_token: string,
  refresh_token: string,
}

export type Profile = {
  name: string,
  email: string,
  phone: string,
  driver_licence: string,
  place_id: number,
  profile_image_url: string,
}

export type OccasionType = {
  id: string,
  image_url: string,
  banner_url: string,
}

export type OccasionSet = {
  id: string,
  name: string,
  total_price: number,
}

export type Occasion = {
  id: string,
  title: string,
  description: string,
  type: OccasionType,
  sets: Array<OccasionSet>,
}
