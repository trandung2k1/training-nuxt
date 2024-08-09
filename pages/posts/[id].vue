<template>
    <div>
        <h1>Post Item</h1>
        <h2>{{ post.title }}</h2>
    </div>
</template>
<script setup>
let post = ref();
const route = useRoute();
//  useAsyncData chặn điều hướng cho đến khi trình xử lý không đồng bộ của nó được giải quyết
//  useAsyncDatalà một thành phần có thể được gọi trực tiếp trong ngữ cảnh Nuxt . Nó trả về các thành phần có thể phản ứng và xử lý việc thêm phản hồi vào tải trọng Nuxt để chúng có thể được truyền từ máy chủ sang máy khách mà không cần lấy lại dữ liệu ở phía máy khách khi trang bị hydrat hóa.
await useAsyncData(() =>
    $fetch(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`),
).then((res) => {
    // console.log(res.pending.value);
    post = res.data.value;
});

//Not block link
await useLazyAsyncData(() =>
    $fetch(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`),
).then((res) => {
    // console.log(res.pending.value);
});
</script>
<style></style>
