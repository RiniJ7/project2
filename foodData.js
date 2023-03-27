
var iconicFoods = [
    //Provinces
    {name: 'NB', food1: 'Fiddleheads', food2: 'Chicken Fricot'},
    {name: 'AB', food1: 'Perogies', food2: 'Bison' },
    {name: 'BC', food1: 'Pacific Salmon', food2:'Dungeness Crab'},
    {name: 'MB', food1: 'Flapper pie', food2:'Bannock'},
    {name: 'SK', food1: 'Saskatoon berry pie', food2:'Regina Style Pizza'},
    {name: 'ON', food1: 'Butter tarts', food2:'Beaver Tails'},
    {name: 'NS', food1: 'Halifax donair', food2:'Creamed Lobster'},
    {name: 'QC', food1: 'Poutine', food2:'Crepes'},
    {name: 'PE', food1: 'Fries with the works',food2:'Lobster Supper'},
    {name: 'NL', food1: 'Jiggs dinner',food2:'Mallar Cottage Cod Cheeks'},
    // Territories
    {name: 'YT', food1: 'Sourdough pancakes',food2:'Smoked Salmon'},
    {name: 'NT', food1: 'Muktuk', food2:'Caribou Stew'},
    {name: 'NU', food1: 'Artic char', food2:'akutuq'},
]

export function getAllIconicFoods(){
    return iconicFoods
}

export function addIconicFoods(food){
iconicFoods.push(food)
}

export function changeFood(provinceName, newFood){
    const theFood = iconicFoods.find(province => province.name === provinceName)
    Object.assign(theFood,newFood)
    
}

export function foodInfo(provinceName){
    return(iconicFoods.find(record => record.name === provinceName))
}

export function deleteProvince(provinceName){
    iconicFoods = iconicFoods.filter(province => province.name !== provinceName)
    
}





