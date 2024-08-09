<template>
    <div>
        <ul>
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/about">About</NuxtLink></li>
            <li><NuxtLink to="/posts">Posts</NuxtLink></li>
        </ul>
    </div>
</template>
<script setup></script>
<style scoped>
ul {
    list-style: none;
    display: flex;
}
a {
    color: blue;
    padding: 0 10px;
    text-decoration: none;
}
</style>
