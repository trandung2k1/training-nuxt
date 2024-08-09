<template>
    <header>
        <!-- <Header></Header> -->
        <Header></Header>
    </header>
    <main>
        <slot></slot>
    </main>
    <!-- <footer>
        <Footer></Footer>
    </footer> -->
</template>
<script setup>
import Header from '~/components/Header.vue';
</script>
