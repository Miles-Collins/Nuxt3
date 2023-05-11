<script setup>
import { carsService } from "~/Services/CarsService"

const {id} = useRoute().params
const uri = `https://bcw-sandbox.herokuapp.com/api/cars/${id}`

// fetch

const {data: car} = await useFetch(uri, {
  method: "get"
})

async function deleteCar() {
  try {
    await carsService.deleteCar(id)
    navigateTo({path: "/cars"})
  } catch (error) {
    console.error('[DELETING CAR]', error)
  }
}



</script>

<template>

  <div class="container carCard">
    <div class="row">
      <div class="col-2 my-3">
        <NuxtLink to="/cars"><button class="btn">Go Back</button></NuxtLink>
      </div>
      <div class="col-2 my-3">
        <button @click="deleteCar" class="btn">Delete Car</button>
      </div>
      <div class="col-2 my-3">
        <button data-bs-target="#editHouse" data-bs-toggle="modal" class="btn">Edit Car</button>
      </div>
      <div class="col-12">
        <h1>{{ car.make }} {{ car.model }}</h1>
      </div>
      <div class="col-5">
        <img class="carImage" :src="car.imgUrl" alt="">
      </div>
      <div class="col-7">
        <div class="row">
           <div class="col-12 mt-2">
              <p class="fs-1">Car Description</p>
            </div>
            <div class="col-12">
              <p class="fs-3">{{ car.description }}</p>
            </div>
            <div class="col-12">
              <p class="fs-1">Price: ${{ car.price }}</p>
            </div>
        </div>
      </div>
    </div>  
  </div>

</template>

<style scoped>

.carImage{
  height: 45dvh;
  width: 100%;
}

img {
object-fit: cover;
box-shadow: 0px 0px 10px black;
}

</style>