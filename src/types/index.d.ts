interface iCategory {
  id: number
  alias: string
  characteristics_property_i18_n: {
      id: number
      locale: string
      name: string
  }
}

interface iProduct {
  id: number
  sku: string
  price: null | number
  old_price: null | number
  category_id: number
  count: number
  characteristics_values_for_product: [
    {
      id: number
      default: number
      price: string
      discount: string
      count: string
      sku: string
      bar_codes: any
      widthD: number
      lengthD: number
      heightD: number
      weightProductD: number
      characteristics_variants_for_product_photos: any[]
      characteristics_default_values: iProductCharacteristics[]
    }
  ]
  products_i18_n: {
    id: number
    locale: string
    name: string
  }
  products_photos: {
    id: number
    photo: string
    default: number
  }
}

interface iProductCharacteristics {
  id: number
  characteristics_property_id: number
  value: null | string
  rgb_color_swatch: null | string
  pivot: {
    variant_id: number
    value_id: number
  }
  characteristics_default_values_i18_n: {
    name: string
    description: number
    locale: string
  }
}

interface iTableMap {
  [id: number]: {
    category: string
    values: string[]
    equality: boolean
  }
}
