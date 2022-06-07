
export const harvestPlants = (plantArray) => {
    let harvestedPlants = []
    for (const plant of plantArray) {
            const finalPlantOutput = plant.type === "Corn" ? plant.output * 0.5 : plant.output
        
            for (let index = 1; index <= finalPlantOutput; index++) {
                harvestedPlants.push(plant)
             }
        }
    return harvestedPlants
}