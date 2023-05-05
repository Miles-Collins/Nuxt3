import { House } from "~/models/House"

export const state = () =>({
    houses: null,
    house: null
})




class HousesService {


async getHouses() {
  const {data: houses, error} = await useFetch('https://bcw-sandbox.herokuapp.com/api/houses', {
    method: "get"
  })
  if(!houses.value) {
     navigateTo({path: "/"})
    throw createError( {statusCode: 404, statusMessage: 'Sorry, something went wrong.'} )
  }
  state.houses = houses
  state.houses.value = state.houses.value.map(h => new House(h))
 return houses
}

async getHouse(id) {
const {data : house} = await useFetch(`https://bcw-sandbox.herokuapp.com/api/houses/${id}`, {
  method: "get"
})
console.log(house)
state.house = house
state.house.value = new House(state.house.value)
console.log(state.house.value)
return house
}
}

export const housesService = new HousesService()