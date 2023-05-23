import { motion } from 'framer-motion';
const UnderlineBlock = () => {
    return (
        <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '92px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className='mx-auto h-2 w-[92px] bg-primaryOrange'
        />
    );
};

export default UnderlineBlock;
