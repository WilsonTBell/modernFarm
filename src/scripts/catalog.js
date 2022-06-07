export const Catalog = (availableCrops) => {
    let HTMLstring = ""
    for (const crop of availableCrops) {
        HTMLstring += `<section class="plant">${crop.type}</section>`
    }
    return HTMLstring
}