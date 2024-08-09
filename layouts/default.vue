<template>
    <header>
        <Header></Header>
    </header>
    <main>
        <slot></slot>
    </main>
</template>
<script setup>
import Header from '~/components/Header.vue';
</script>
