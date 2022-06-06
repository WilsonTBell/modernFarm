import { createPlan } from "./plan.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createSoybean } from "./seeds/soybean.js"
import { createWheat } from "./seeds/wheat.js"
import { createSunflower } from "./seeds/sunflower.js"
import { addPlant } from "./fields.js"

export const plantSeeds = (planArray) => {
    // Iterate through the array of arrays
    for (const plan of planArray) {
         // Iterate through each individual array
         for (const crop of plan) {
             // If the value is equal to a certain plant, 
            //  invoke the create and addPlant functions
            //  for that plant
             if (crop === "Corn"){
                 let cornSeed = createCorn();
                 addPlant(cornSeed)
             }
             else if (crop === "Potato"){
                 let potatoSeed = createPotato();
                 addPlant(potatoSeed)
             }
             else if (crop === "Asparagus"){
                let asparagusSeed = createAsparagus();
                addPlant(asparagusSeed)
            }
            else if (crop === "Soybean"){
                let soybeanSeed = createSoybean();
                addPlant(soybeanSeed)
            }
            else if (crop === "Wheat"){
                let wheatSeed = createWheat();
                addPlant(wheatSeed)
            }
            else if (crop === "Sunflower"){
                let sunflowerSeed = createSunflower();
                addPlant(sunflowerSeed)
            }
         }
    }
}