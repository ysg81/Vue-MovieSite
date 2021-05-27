<template>
  <div class="container">
    <input 
      v-model="title"
      class="form-control"
      type="text"
      placeholder="Search for Movies, Series && more">
    <div class="selects">
      <select
        v-for="filter in filters"
        v-model="$data[filter.name]"
        :key="filter.name"
        class="form-select">
        <option
          v-if="filter.name === 'year'"
          value="">
          All Years
        </option>
        <option
          v-for="item in filter.items"
          :key="item">
          {{ item }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      type: 'movie',
      number: 10,
      year: '',
      filters: [
        {
          name: 'type',
          items: ['movie', 'series', 'episode']
        },
        {
          name: 'number',
          items: [10, 20, 30]
        },
        {
          name: 'year',
          items: (() => {
            const years = []
            const thisYear = new Date().getFullYear()
            for (let i = thisYear; i >= 2000; i -= 1)  {
              years.push(i)
            }
            return years
          })()
        }
      ]
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  font-size: 15px;
}
.container input{
  margin-right: 10px;
}
.container .selects{
  display: flex;
}
.container .selects select{
  width: 120px;
  margin: 0 3px;
}
</style>