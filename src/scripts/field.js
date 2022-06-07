// create an empty field array
let field = []

// Check if the Plant is an array, if so, push each individual seed to the 
// Push a seed object to the field array
export const addPlant = (seedObject) => {
    if (Array.isArray(seedObject)){
        field.push(seedObject[0])
        field.push(seedObject[1])
    }
    else{
    field.push(seedObject)}
}

// Return a copy of the field array
export const usePlants = () => {
    return field.map(row => ({ ...row }))
}