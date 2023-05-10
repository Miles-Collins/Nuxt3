<script setup>

const {data : cars} = await useFetch('https://bcw-sandbox.herokuapp.com/api/cars', {
  method: "get"
})
console.log(cars)

definePageMeta({
  layout: "cars"
})
</script>

<template>

<div class="container"> 
 
  <div v-for="c in cars" :key="c.id" class="masonry rounded mt-2">
    <div class="carCard">
    <NuxtLink :to="`/cars/${c.id}`"><img class="items" :src="c.imgUrl" alt=""></NuxtLink>
    <div class="details">
    <span>{{c.make}} {{ c.model }}</span>
    <span>Price: ${{ c.price }}</span>
    </div>
    </div>
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

.carCard {
  border: 1px solid rgba(0, 0, 0, 0.3);
  position: relative;
  overflow: hidden;
  display: inline-block;
}

.carCard img {
  width: 100%;
  height: auto;
  transition: opacity 0.5s ease-in-out;
}
.carCard:hover img{
  opacity: .25;
}
.carCard .carText {
  opacity: 0;
  position: absolute;
}

.carCard .carText:hover {
  opacity: 1;
}

.carCard .details {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.792);
  color: white;
  font-size: 18px;
  font-weight: bold;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.carCard:hover .details {
  opacity: 1;
}

.carCard .details span {
  display: block;
}


/* .carText {
  
} */

.carText:hover {
  opacity: 2;
}

p{
  margin: 0;
  padding: 0;
}

.carCard:hover{
  box-shadow: 0px 0px 8px black;
  cursor: pointer;
}

.carCard {
  padding: 0;
  border: 1px rgba(0, 0, 0, 0.185) solid;
}

img{
  object-fit: cover;
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