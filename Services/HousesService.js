import { House } from "~/models/House"

export const state = () =>({
    houses: [],
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

async createHouse(houseBody) {
  const {data : house} = await useFetch('https://bcw-sandbox.herokuapp.com/api/houses', {
    method: "post",
    body: houseBody
  })
  console.log('POST', house)
  console.log('STATE.HOUSES', state.houses)
  state.houses.value.push(new House(house.value))
  console.log('STATE.HOUSES.VALUE', state.houses.value)
}


async deleteHouse(houseId) {
  const {data: house} = await useFetch(`https://bcw-sandbox.herokuapp.com/api/houses/${houseId}`, {
    method: "delete"
  })
  console.log('DELETING HOUSE', house)
}

async editHouse(houseBody, houseId) {
  const {data: house} = await useFetch(`https://bcw-sandbox.herokuapp.com/api/houses/${houseId}`, {
    method: "put",
    body: houseBody
  })
  let editedHouse = new House(house.value)
  state.house.value = new House(house.value)
  console.log('EDITING HOUSE', editedHouse)
}
}

export const housesService = new HousesService()