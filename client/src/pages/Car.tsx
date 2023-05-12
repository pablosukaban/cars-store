import { useParams } from 'react-router-dom';

const Car = () => {
    const { id } = useParams();
    return <div>Car {id}</div>;
};

export default Car;
