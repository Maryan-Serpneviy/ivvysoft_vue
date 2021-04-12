<template>
  <td class="table-cell">
    <div class="product-characteristic">
      {{ getProductCharacteristic(categoryId, product.id) }}
    </div>
  </td>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { dataService } from '@/core/services/data.service'

@Component({ name: 'ProductCharacteristic' })
export default class ProductCharacteristic extends Vue {
  @Prop({ required: true }) categoryId!: number
  @Prop({ required: true }) product!: iProduct

  getProductCharacteristic(categoryId: number, productId: number): string {
    return dataService.getProductCharacteristic(categoryId, productId)
  }
}
</script>
