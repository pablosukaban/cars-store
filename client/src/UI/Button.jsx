import { motion } from 'framer-motion';

const Button = ({ isOrange, onClick }) => {
    const colors = isOrange
        ? 'bg-primaryOrange text-secondaryGray hover:bg-secondaryGray hover:text-white'
        : 'bg-secondaryGray text-white hover:bg-white hover:text-secondaryGray';
    return (
        <motion.button
            initial={{ x: -100 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className={`rounded px-12 py-4 font-semibold uppercase transition-colors ${colors}`}
            onClick={onClick}
        >
            Подробнее
        </motion.button>
    );
};

export default Button;
