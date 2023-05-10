<script setup>
import { housesService, state } from "~/Services/HousesService";
import HouseForm from "~/components/Forms/HouseForm.vue";
import { House } from "~/models/House";

definePageMeta({
  layout: "house",
})

const houses = await housesService.getHouses()
const test = computed(() => state.houses.value.map(h => House(h)))
// async function getHouses() {
//   try {
//     await housesService.getHouses()
//     console.log('HOUSES PAGE', houses)
//   } catch (error) {
//     console.log('[GETTING HOUSES]', error);
//   }
// }


</script>

<template>

<div class="container mx-auto ">
    <div v-for="h in houses" :key="h.id" class="masonry justify-content-center">
          <NuxtLink :to="`/homes/${h.id}`">
          <img class="items img-fluid mt-2" :src="h.imgUrl" alt="">
          </NuxtLink>
    </div>
  </div>


</template>

<style scoped>

/* .cardSize {
  width: 100%;
  height: 23dvh;
  border-top-left-radius: 2%;
  border-top-right-radius: 2%;
} */

p{
  margin: 0;
  padding: 0;
}

.houseCard:hover{
  box-shadow: 0px 0px 8px black;
  cursor: pointer;
}

.houseCard {
  padding: 0;
  border: 1px rgba(0, 0, 0, 0.185) solid;
}

.masonry { 
  display: flex;
  flex-flow: column wrap;
  max-height: 355px;
  /* margin-left: -8px; Adjustment for the gutter */
  width: 100%;
}

img {
   max-height: 350px;
   width: 100%;
   border-radius: 5px;
}

.container {
  gap: 10px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: masonry;
  column-count: 4;
}

/* Masonry on large screens */
@media only screen and (min-width: 1024px) {
  .masonry {
    column-count: 4;
  }
}

/* Masonry on medium-sized screens */
@media only screen and (max-width: 1023px) and (min-width: 768px) {
  .masonry {
    column-count: 3;
  }
   .container {
    column-count: 3;
  }
}

/* Masonry on small screens */
@media only screen and (max-width: 767px) and (min-width: 240px) {
  .masonry {
    column-count: 2;
  }
  .container {
    column-count: 2;
  }


}

</style>