<script setup>
const {data:posts, pending, error, refresh} = await useFetch("https://jsonplaceholder.typicode.com/posts");
console.log("Data: ",posts);
// console.log(error);
</script>

<template>
    <div>
        <div class="fixed-200">
        <h1>Home Page</h1>
        <h1 v-if="error">Oops!! Error encountered:  {{ error }}</h1>
        <div>
            <div v-for="post in posts" class="container">
                <div class="left-column">
                    <h3>{{ post.id }}</h3>
                </div>
                <div class="right-column">
                    <h3>{{ post.title }}</h3>
                    <h3>{{ post.body }}</h3>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>