<template>
  <tr class="table-row">
    <template v-if="!showOnlyDiff">
      <td class="table-cell table-cell_category category">
        {{ category.characteristics_property_i18_n.name }}
      </td>

      <ProductCharacteristic v-for="product in products" :key="product.id" :categoryId="category.id" :product="product" />
    </template>

    <template v-else-if="!tableMap[category.id].equality">
      <td class="table-cell table-cell_category category">
        {{ category.characteristics_property_i18_n.name }}
      </td>

      <ProductCharacteristic v-for="product in products" :key="product.id" :categoryId="category.id" :product="product" />
    </template>
  </tr>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { dataService } from '@/services/data.service'

import ProductCharacteristic from '@/components/ProductCharacteristic.vue'

@Component({
  name: 'CharacteristicsRow',
  components: {
    ProductCharacteristic
  }
})
export default class CharacteristicsRow extends Vue {
  @Prop({ required: true }) category!: iCategory
  @Prop({ required: true }) showOnlyDiff!: boolean

  get products(): iProduct[] {
    return dataService.products
  }

  get tableMap(): iTableMap {
    return dataService.tableMap
  }
}
</script>
