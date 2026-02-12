<script setup>
definePageMeta({
  layout: "default",
});

const { data, error } = await useFetch(
  "https://dummyjson.com/recipes?limit=20",
);
</script>

<template>
  <div>
    <main>
      <section>
        <h1>Recipes</h1>
      </section>
      <section v-if="!error">
        <div v-for="recipe in data?.recipes" :key="recipe.id">
          <h2>{{ recipe.name }}</h2>
          <!-- <img :src="recipe.image" alt="" /> -->
          <NuxtLink :to="`/recipes/${recipe.id}`">View</NuxtLink>
        </div>
      </section>
      <!-- <p v-else>Opps, something went wrong. Please try again later</p> -->
    </main>
  </div>
</template>
