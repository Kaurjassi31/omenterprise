// import { useEffect,useState } from 'react';
// import './cursor.css';
// import { motion } from "framer-motion";

// function Cursor() {
//     const [mousePosition, setMousePosition] = useState({
//         x: 0,
//         y: 0
//     });
//     const [ cursorVarient,setCursorVariant ] = useState("default");


   

//     useEffect(() => {
//         const mouseMove = e => {
//             setMousePosition({
//                 x: e.clientX,
//                 y: e.clientY
//             })
//         }

//         window.addEventListener("mousemove", mouseMove);

//         return () => {
//             window.removeEventListener("mousemove", mouseMove);
//         }
//     }, []);

//     const variants = {
//         default: {
//             x: mousePosition.x - 16,
//             y: mousePosition.y - 16,
//         },
//         text: {
//             height: 150,
//             width: 150,
//             x: mousePosition.x - 75,
//             y: mousePosition.y - 75,
//             backgroundColor: "transparent",
//             mixBlendMode: "difference",
//         },
//     }
    


//     const textEnter = () => setCursorVariant("text");
//     const textLeave = () => setCursorVariant("default");


//     return (
//                 <>
//                 <h1 onMouseEnter={textEnter} onMouseLeave={textLeave} className='title' />
//                 <h5 onMouseEnter={textEnter} onMouseLeave={textLeave} className='title' />
//                 <p  onMouseEnter={textEnter} onMouseLeave={textLeave} className='title' />
//                 <h2 onMouseEnter={textEnter} onMouseLeave={textLeave} className='title' />
//                 <h3 onMouseEnter={textEnter} onMouseLeave={textLeave} className='title' />
//                 <motion.div
//                  className='cursor' 
//                variants={variants}
//                 animate={cursorVarient}
//                 />
//                 </>
    
//    );
// }

// export default Cursor;
