import { motion } from 'motion/react';

import { type Tech } from '../types/types.ts';

import '../styles/TechCard.css';

function TechCard(props: Tech) {
    return (
        <motion.a
            href={props.link}
            target='_blank'
            className="tech-card" 
            style={{ borderWidth: "2px", borderStyle: "solid", borderColor: props.accent_color }}

            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0, transition: { delay: props.delay, duration: 0.5 } }} 
            viewport={{ once: false, amount: 0.1 }} 

            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            {props.svg}
            <p style={{ color: props.accent_color }}>{props.tech_name}</p>
        </motion.a>
    )
}

export default TechCard;