import { createPlan } from "./plan.js"
// import { createCorn } from "./seeds/corn.js"
// import { createPotato } from "./seeds/potato.js"
// import { createAsparagus } from "./seeds/asparagus.js"
// import { createSoybean } from "./seeds/soybean.js"
// import { createWheat } from "./seeds/wheat.js"
// import { createSunflower } from "./seeds/sunflower.js"
// import { addPlant } from "./fields.js"
import { usePlants } from "./field.js"
import {plantSeeds} from "./tractor.js"
import {harvestPlants} from "./harvester.js"
import {Catalog} from "./catalog.js"

console.log("Welcome to the main module")

const yearlyPlan = createPlan()
console.log(yearlyPlan)

// const cornSeed = createCorn()
// const potatoSeed = createPotato()
// const asparagusSeed = createAsparagus()
// const wheatSeed = createWheat()
// const sunflowerSeed = createSunflower()
// const soybeanSeed = createSoybean()


// addPlant(cornSeed)

// addPlant(potatoSeed)

// addPlant(asparagusSeed)

// const fieldArray = usePlants()
// console.log(fieldArray)

plantSeeds(yearlyPlan)

let plantedSeeds = usePlants()
console.log(plantedSeeds)

let finalHarvest = harvestPlants(plantedSeeds)
console.log(finalHarvest)


const cropHTMLElement = document.querySelector(".container")

cropHTMLElement.innerHTML = Catalog(finalHarvest)