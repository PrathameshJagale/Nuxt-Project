<script setup>
const {data:products, pending, error, refresh} = await useFetch("https://fakestoreapi.com/products");
// console.log("Data: ",products);
// console.log(error);
</script>

<template>
    <div class="fixed-200">
        <h1>All Products Page</h1>
        <h1 v-if="error">Oops!! Error encountered:  {{ error }}</h1>
        <div>
            <div v-for="product in products" class="container">
                <div class="left-column">
                    <h3>{{ product.id }}</h3>
                    <img :src="product.image" alt="" class="img-70">
                </div>
                <div class="right-column">
                    <h3>{{ product.title }}</h3>
                    <h3>{{ product.description }}</h3>
                    <h3>Price:$ {{ product.price }}</h3>
                </div>
            </div>
        </div>
    </div>
</template>