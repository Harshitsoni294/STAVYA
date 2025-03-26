// import { duration } from "@mui/material";
// import { delay } from "framer-motion";

export const fadIn = (diretion, delay) => {
    return {
        hidden: {
            y: diretion === 'up' ? 40 : diretion === 'down' ? -40 : 0,
            x: diretion === 'left' ? 40 : diretion === 'right' ? -40 : 0,
        },
        show: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                type: 'tween',
                duration: 1.2,
                delay: delay,
                ease: [0.25, 0.25, 0.25, 0.75],
            }
        }
    }
}
