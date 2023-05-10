 
 export class Job{
    constructor(data) {
    this.id = data.id
    this.jobTitle = data.jobTitle
    this.company = data.company
    this.rate = data.rate
    this.hours = data.hours
    this.description = data.description
    this.image =  `https://picsum.photos/id/${Math.round(Math.random() * 1000)}/200/300`
  }
}

