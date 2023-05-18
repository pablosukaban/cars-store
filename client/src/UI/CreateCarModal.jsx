import { useAppSelector } from '../hooks/redux';

const CreateCarModal = () => {
    const { brands, models } = useAppSelector((state) => state.car);
    return (
        <>
            <select>
                {brands.map((brand) => (
                    <option key={brand.id}>{brand.car_brand_name}</option>
                ))}
            </select>
            <select>
                {models.map((model) => (
                    <option key={model.id}>{model.car_model_name}</option>
                ))}
            </select>
            <input type='file' />
            <input
                type='text'
                placeholder='Enter car name'
                className='border px-6 py-4'
            />
        </>
    );
};

export default CreateCarModal;
