const Description = [
   {name: 'Fiddleheads', description: 'Very good food!'},
   {name: 'Perogies', description: 'Awesome food!'},
]

export function getAllDescription() {
return Description

}

export function foodData(foodName){
   return(Description.find(record => record.name === foodName))
}

