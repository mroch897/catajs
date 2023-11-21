// Usa un for para remplazar todas las comidas que no sean veganas con las frutas del array de frutas. Recuerda no usar frutas duplicadas. Finalmente, imprime el array resultante.
const fruits = ["Strawberry", "Banana", "Orange", "Apple"];
const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

for (let i = 0; i < foodSchedule.length; i++) {
    const food = foodSchedule[i];
  
    if (!food.isVegan) {
      
      const randomIndex = Math.floor(Math.random() * fruits.length);
      const uniqueFruit = fruits.splice(randomIndex, 1)[0];
      
   
      food.name = uniqueFruit;
      food.isVegan = true;
    }
  }
  
  console.log(foodSchedule);