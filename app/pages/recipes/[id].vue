<script setup>
const { id } = useRoute().params;

const { data, error } = await useFetch(`https://dummyjson.com/recipes/${id}`);

// if (error.value) {
//   throw createError({
//     statusCode: error.value?.statusCode,
//     statusMessage: error.value?.statusMessage,
//   });
// }
</script>

<template>
  <div>
    <img :src="data?.image" alt="" />
  </div>
</template>
