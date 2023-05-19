export const getCarName = (brands, brandId, models, modelId) => {
    const brand = brands.find((brand) => brand.id === brandId);
    const model = models.find((model) => model.id === modelId);
    if (!brand) return 'Unknown';

    return `${brand.car_brand_name} ${model.car_model_name}`;
};
