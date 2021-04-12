<template>
  <th class="table-cell table-heading product-summary">
    <div class="product-summary__image">
      <img :src="product.products_photos.photo" />
    </div>

    <div class="product-summary__title">{{ product.products_i18_n.name }}</div>

    <div class="product-summary__price">
      {{ product.characteristics_values_for_product[0].price }}
    </div>
  </th>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({ name: 'TableHeading' })
export default class TableHeading extends Vue {
  @Prop({ required: true }) product!: iProduct
}
</script>
