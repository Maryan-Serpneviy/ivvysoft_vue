import categoriesRawData from '../core/data/categories'
import productsRawData from '../core/data/products'

class DataService {
  constructor() {
    this.categories = JSON.parse(categoriesRawData)
    this.products = JSON.parse(productsRawData)
    this.tableMap = this.generateTableMap()
  }

  public categories: iCategory[]
  public products: iProduct[]
  public tableMap: iTableMap

  /**
   * @method generateTableMap
   * generates a map with information about products characteristics
   * as array with length of products amount
   * object key is category id
   */
  private generateTableMap(): iTableMap {
    const tableMap: iTableMap = {}

    this.categories.forEach(category => {
      this.products.forEach(product => {
        if (!tableMap[category.id]) {
          tableMap[category.id] = {
            category: category.characteristics_property_i18_n.name,
            values: [],
            equality: false
          }
        }
        if (tableMap[category.id].values.length < this.products.length) {
          product.characteristics_values_for_product.forEach(valuesArray => {
            valuesArray.characteristics_default_values.forEach(defaultValue => {
              if (defaultValue.characteristics_property_id === category.id) {
                const characteristicValue = defaultValue?.value || defaultValue?.characteristics_default_values_i18_n?.name || '—'
                tableMap[category.id].values.push(characteristicValue)
              }
            })
          })
          const allValuesEqual = tableMap[category.id]?.values.every(value => value === tableMap[category.id].values[0])
          tableMap[category.id].equality = allValuesEqual
        }
      })
    })
    return tableMap
  }

  /**
   * @method getProductCharacteristic performs search among products data by category id
   * @param categoryId
   * @param productId
   * @returns category's string value
   */
  public getProductCharacteristic(categoryId: number, productId: number): string {
    const product = this.products.find(item => item.id === productId)
    const characteristic = product?.characteristics_values_for_product[0].characteristics_default_values.find(item => {
      return item.characteristics_property_id === categoryId
    })
    const characteristicValue = characteristic?.value || characteristic?.characteristics_default_values_i18_n?.name || '—'

    return characteristicValue
  }
}

export const dataService = new DataService()
