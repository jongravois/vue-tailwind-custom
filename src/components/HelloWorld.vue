<template>
  <div class="p-12">
    <table class="table w-full text-left">
      <tr class="py-6">
        <th>Classification</th>
        <th>Dispersion</th>
        <th>In Use</th>
        <th>Storage</th>
        <th>Retired</th>
        <th>Other</th>
        <th>&nbsp;</th>
      </tr>
      <tr class="py-6 shadow h-24">
        <td colspan="6">
          <input type="text" placeholder="filter list ..."
                 class="w-1/2 shadow appearance-none border rounded w-90 py-2 px-3 text-grey-darker bg-white leading-tight">
        </td>
      </tr>
      <tr class="py-6 shadow h-8">
        <td>A220-100 (CS100)</td>
        <td><1%</td>
        <td>0</td>
        <td>0</td>
        <td>102</td>
        <td>6</td>
        <td><a href="#">View</a></td>
      </tr>
      <tr class="py-6 shadow h-8">
        <td>A220-300 (CS300)</td>
        <td><1%</td>
        <td>0</td>
        <td>0</td>
        <td>151</td>
        <td>29</td>
        <td><a href="#">View</a></td>
      </tr>
      <tr class="py-6 shadow h-8">
        <td>A300</td>
        <td><1%</td>
        <td>0</td>
        <td>0</td>
        <td>209</td>
        <td>31</td>
        <td><a href="#">View</a></td>
      </tr>
      <tr class="py-6 shadow h-8">
        <td>A300-600</td>
        <td><1%</td>
        <td>24</td>
        <td>41</td>
        <td>105</td>
        <td>39</td>
        <td><a href="#">View</a></td>
      </tr>
      <tr class="py-6 shadow h-8">
        <td>A310</td>
        <td><1%</td>
        <td>40</td>
        <td>35</td>
        <td>75</td>
        <td>0</td>
        <td><a href="#">View</a></td>
      </tr>
      <tr class="py-6 shadow h-8">
        <td>A318</td>
        <td><1%</td>
        <td>30</td>
        <td>10</td>
        <td>64</td>
        <td>12</td>
        <td><a href="#">View</a></td>
      </tr>
      <tr class="py-6 shadow h-8">
        <td>A319</td>
        <td>2.3%</td>
        <td>860</td>
        <td>100</td>
        <td>40</td>
        <td>0</td>
        <td><a href="#">View</a></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'FleetManagerHome'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
