const Description = [
   {name: 'Fiddleheads', description: 'Fiddleheads are sweet like asparagus, grassy and snappy like a great green bean, with a touch of broccoli stem'},
   {name: 'Perogies', description: 'Pierogi are filled dumplings made by wrapping unleavened dough around a savory or sweet filling and cooking in boiling water'},
   {name: 'Bison', description:'Bison is an excellent source of complete protein and a rich source (20% or more of the Daily Value, DV) of multiple vitamins, including riboflavin, niacin, vitamin B6, and vitamin B12, and is also a rich source of minerals, including iron, phosphorus, and zinc'},
   {name: 'Pacific Salmon', description:'Pacific salmon tends to be a richer color, with firmer flesh and more robust flavor'},
   {name: 'Dungeness Crab', description:'The Dungeness crab is a species of crab inhabiting eelgrass beds and water bottoms along the west coast of North America'},
   {name: 'Flapper Pie', description:'Flapper pie is a vanilla custard pie topped with meringue'},
   {name: 'Bannock', description:'Bannock is a variety of flatbread or quick bread cooked from flour, typically round'},
   {name: 'Saskatoon berry pie', description:'Saskatoon berry pie is a type of pie with a saskatoon berry filling and is often served with vanilla ice cream as a dessert.'},
   {name: 'Regina Style Pizza', description:'Regina Style Pizza is like Chicago deep-dish without the deep dish. Toppings are plentiful with plenty of sauce.'},
   {name: 'Butter Tarts', description:'The sweet tart consists of a filling of butter, sugar, syrup, and egg, baked in a pastry shell until the filling is semi-solid with a crunchy top'},
   {name: 'Maple syrup', description:'Maple syrup is a syrup made from the sap of maple trees'},
   {name: 'Halifax Donair', description:'It is made with spiced ground beef, tomatoes, onions, topped with a uniquely delicious sweet garlic donair sauce, all wrapped up inside of steamed pita bread!'},
   {name: 'Creamed Lobster', description:'Lobster Thermidor is a French dish of lobster meat cooked in a rich wine sauce, stuffed back into a lobster shell, and browned'},
   {name: 'Poutine', description:'Poutine is a dish of french fries and cheese curds topped with a brown gravy'},
   {name: 'Crepes', description:'A crêpe or crepe is a very thin type of pancake.'},
   {name: 'Fries with the works', description:'Fries With The Works (or FWTW) is a tasty Prince Edward Island Potato dish that must consist of four key ingredients: PEI French Fries topped with Gravy, Island Ground Beef and Canned Peas'},
   {name: 'Lobster Supper', description:'Lobster served in the shell, hot or cold, with lots of melted butter for dipping that succulent lobster'},
   {name: 'Jiggs dinner', description:'Jiggs dinner is a traditional Newfoundland meal, comparable to corned beef and cabbage'},
   {name: 'Mallar Cottage Cod Cheeks', description:'cod cheek is a small muscle taken from the fish’s neck'},
   {name: 'Sourdough pancakes', description:'This is a flat cake, often thin and round, prepared from a starch-based batter that may contain eggs, milk and butter and cooked on a hot surface such as a griddle or frying pan, often frying with oil or butter'},
   {name: 'Smoked Salmon', description:'Smoked salmon is a preparation of salmon, typically a fillet that has been cured and hot or cold smoked'},
   {name: 'Muktuk', description:'It is most often made from the bowhead whale, although the beluga and the narwhal are also used. It is usually consumed raw, but can also be eaten frozen, cooked,[2] or pickled.'},
   {name: 'Caribou Stew', description:'The stew is usually made with a combination of boneless caribou cubes, onions, celery, red wine, tomato paste, bay leaves, thyme, potatoes, carrots, turnips, beef stock, oil, salt, and pepper.'},
   {name: 'Artic char', description:'The Arctic char or Arctic charr is a cold-water fish in the family Salmonidae, native to alpine lakes and arctic and subarctic coastal waters'},
   {name: 'akutuq', description:'It is traditionally made of whipped fat or tallow and meat mixed with berries or mild sweeteners such as roots of Indian potato or wild carrot, mixed and whipped with a whisk'},
  // {name: 'Crepes', description:''},
]

export function getAllDescription() {
return Description

}

export function foodData(foodName){
   return(Description.find(record => record.name === foodName))
}

