<template>
    <div>
        <h1>About Page</h1>
        <h1>Middleware activates in the console</h1>
        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto corrupti, placeat repellat dignissimos laborum incidunt eveniet reprehenderit recusandae amet unde laboriosam ipsum voluptas asperiores provident dolore quibusdam consequatur doloremque ut!
        </p>
    </div>
</template>

<script setup>
    definePageMeta({
        middleware: "logon",
    });
</script>