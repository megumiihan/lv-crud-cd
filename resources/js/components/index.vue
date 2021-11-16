<template>
  <div class="container">
    <h2 class="text-center">Products List</h2>
    <input type="text" v-model="search" placeholder="search products" />
    <div class="row">
      <div class="col-md-12">
        <router-link
          :to="{ name: 'ProductCreate' }"
          class="btn btn-primary btn-sm float-right mb-2"
          >Add Product</router-link
        >
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <table class="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(product, key) of filteredProducts" :key="product.id">
              <td>{{ key + 1 }}</td>
              <td>{{ product.name }}</td>
              <td>{{ product.description }}</td>
              <td>{{ product.price }}</td>
              <td>
                <router-link
                  class="btn btn-success btn-sm"
                  :to="{
                    name: 'ProductEdit',
                    params: { productId: product.id },
                  }"
                  >Edit</router-link
                >
                <button
                  class="btn btn-danger btn-sm"
                  @click="deleteProduct(product.id)"
                >
                  Delete
                </button>
              </td>
              <td></td>
            </tr>
           <!-- <Page :total="100" /> -->
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
      search: "",
    };
  },
  created() {
    this.getProducts();
  },

  computed: {
    filteredProducts() {
      //returns an array; drops items that are false aka does not contain search words
      /*
      return this.products.filter((product) => {
        return product.name.toLowerCase().match(this.search.toLowerCase());
      });
      return filtered;
      */

      let filtered = this.products.filter((el) => {
        return el.name.toLowerCase().match(this.search.toLowerCase());
      });
      return filtered;
    },
  },
  methods: {
    getProducts() {
      this.axios.get("http://127.0.0.1:8000/api/products").then((response) => {
        this.products = response.data;
      });
    },
    deleteProduct(productId) {
      this.axios
        .delete(`http://127.0.0.1:8000/api/products/${productId}`)
        .then((response) => {
          let i = this.products.map((data) => data.id).indexOf(productId);
          this.products.splice(i, 1);
        });
    },

    sortLowest() {
      this.products.price.sort((a, b) => (a.price > b.price ? 1 : -1));
    },
    sortHighest() {
      this.products.price.sort((a, b) => (a.price < b.price ? 1 : -1));
    },
  },
};
</script>