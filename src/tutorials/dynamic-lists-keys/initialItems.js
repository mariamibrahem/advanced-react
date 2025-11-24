// Sample data with unique IDs
export const initialItems = [
  { id: 1, name: 'Apple', price: 1.50 },
  { id: 2, name: 'Banana', price: 0.75 },
  { id: 3, name: 'Cherry', price: 3.00 },
  { id: 4, name: 'Date', price: 2.25 },
  { id: 5, name: 'Elderberry', price: 4.50 },
]

// Helper to generate new items with unique IDs
let nextId = 6
const fruits = ['Fig', 'Grape', 'Honeydew', 'Kiwi', 'Lemon', 'Mango', 'Orange', 'Papaya']

export const generateNewItem = () => {
  const fruit = fruits[(nextId - 6) % fruits.length]
  const price = (Math.random() * 5 + 0.5).toFixed(2)
  return {
    id: nextId++,
    name: fruit,
    price: parseFloat(price)
  }
}

