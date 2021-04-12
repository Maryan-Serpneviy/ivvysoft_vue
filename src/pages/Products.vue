<template>
  <div class="page-wrapper">
    <table class="table">
      <tr class="table-row">
        <th class="table-cell table-heading">
          <label class="checkbox-label" for="diff-checkbox">
            <input
              id="diff-checkbox"
              type="checkbox"
              v-model="showOnlyDiff"
            />
            Показати тільки відмінності
          </label>
        </th>

        <TableHeading v-for="product in products" :product="product" :key="product.id" />
      </tr>

      <CharacteristicsRow
        v-for="category in categories"
        :key="category.id"
        :category="category"
        :showOnlyDiff="showOnlyDiff"
      />
    </table>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { dataService } from '@/core/services/data.service'

import TableHeading from '@/components/TableHeading.vue'
import CharacteristicsRow from '@/components/CharacteristicsRow.vue'

@Component({
  name: 'Products',
  components: {
    TableHeading,
    CharacteristicsRow
  }
})
export default class Products extends Vue {
  showOnlyDiff = false

  get categories(): iCategory[] {
    return dataService.categories
  }

  get products(): iProduct[] {
    return dataService.products
  }
}
</script>

<style lang="scss">
$border-color: #E5E5E5;

.page-wrapper {
  padding: 30px;
}

.checkbox-label,
.checkbox-label input {
  cursor: pointer;
}

.table {
  &-heading,
  &-cell {
    font-weight: normal;
    padding: 15px 20px;
  }

  &-row {
    border: 1px solid $border-color;

    &:not(:first-child) {
      text-transform: uppercase;
    }

    &:not(:first-child),
    &:not(:nth-child(2)) {
      .table-cell {
        border-right: 1px solid $border-color;
      }
    }

    &:first-child {
      border-bottom: none;
    }

    &:nth-child(2) {
      border-top: none;
    }
  }

  &-cell {
    &:first-child {
      font-weight: bold;
      width: 300px;
    }
  }
}

.product-summary {
  &__image {
    width: 140px;
    height: 120px;
    margin: 25px auto;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__title {
    margin-top: 60px;
  }

  &__price {
    margin: 15px 0;
    font-weight: bold;
    font-size: 16px;
  }
}
</style>
