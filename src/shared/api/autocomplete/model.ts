export interface IProperty {
  id: string
  mls_listing_id: string
  postal_code: string
  street_number: string
  street_name: string
  street_abbreviation: string
  apartment_number: string
  province: string
  area: string
  municipality: string
  municipality_district: string
  community: string
  street_direction: string
  cross_street: string
  address: string
  full_address: string
  exterior_type: string
  listing_type: string
  word_similarity: number
}

export interface IOnMarketProperty extends IProperty {
  list_price: number
}

export interface ISoldProperty extends IProperty {
  sold_price: number
  sold_date: string
}

export interface ILocation {
  id: string
  province: string
  area: string
  municipality: string
  selected: boolean
}
