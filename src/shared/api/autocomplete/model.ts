export interface Property {
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

export interface OnMarketProperty extends Property {
  list_price: number
}

export interface SoldProperty extends Property {
  sold_price: number
  sold_date: string
}

export interface Location {
  id: string
  province: string
  area: string
  municipality: string
  selected: boolean
}
