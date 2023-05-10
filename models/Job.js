 export class Job {
   constructor(data) {
    this.id = data.id
    this.jobTitle = data.jobTitle
    this.company = data.company
    this.rate = data.rate
    this.hours = data.hours
    this.description = data.description
    this.image = useFetch('https://picsum.photos', {
      method: 'GET'
    })
  }
}