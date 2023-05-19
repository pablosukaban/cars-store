export const getCarName = (brands, brandId, models, modelId) => {
    const brand = brands.find((brand) => brand.id === brandId);
    const model = models.find((model) => model.id === modelId);
    if (!brand) return 'Unknown';

    return `${brand.car_brand_name} ${model.car_model_name}`;
};

export function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// export function shuffleArray(array) {
//     const newArr = [...array];
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }
//     return newArr;
// }
