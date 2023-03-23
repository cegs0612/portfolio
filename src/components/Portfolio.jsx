import React, {useState} from 'react'
import "../css/portfolio.css";
import { motion } from "framer-motion";


function Portfolio() {
    //
    const [switchOn, setSwitchOn] = useState(true);
    const spring = {
        type: "spring",
        bounce:0.5,
        duration: 2 
    }
    const toggleSwitch = () =>{
        if(switchOn){
            document.getElementById("switch-container").classList.replace("on","off");
        } else {
            document.getElementById("switch-container").classList.replace("off","on");
        }
        setSwitchOn(!switchOn);        
    }

  return (
    <div className='portafolio'>
        <div className="head">
            <h5>English</h5>
            <motion.div className="switch-container on" layout layoutRoot id="switch-container" onClick={()=>{toggleSwitch()}}>
                <motion.div className="switch-handle" layout transition={spring}/>
            </motion.div> 
            <h5>Español</h5>
        </div>
        <div className="body-portfolio">
            <div className="welcome">
                <div className="texto">
                    {switchOn? <p>Hi! Thank you for being interested in visiting my portfolio. In the following sections I’m going to tell you a little about myself and about my first projects.</p> : <p>¡hola! Gracias por interesarte en visitar mi portafolio. En las siguientes secciones te contaré un poco sobre mí y sobre mis primeros proyectos.</p> }
                </div>
                <div className="imagen-container">
                   <img className='img-profile' src={require("../images/profilePic.jpeg")} alt="Profile pic" /> 
                </div>
                
            </div>
            <div className="about">
                {switchOn? <><p>My name is Carlos Eduardo Gutiérrez Sánchez, I come from Cochabamba, Bolivia and I´m 35 years old. Last year I decided to turn my career path towards the web and app development. Since I was a Kid I’ve been in contact with technology and computers. I always enjoyed thinking differently and being able to translate these thoughts to a programming language.</p> <p>I studied Industrial Engineering in San Simon University (Cochabamba, Bolivia); in the last few months I joined a Full Stack Web Development course where I learned HTML, CSS, JavaScript NodeJS, SQL and React. Since last January I’ve been working on these three web apps, in which I have set myself clear learning goals.</p><p>I’m passionate about music and languages, I studied music in San Simon University (Cochabamba, Bolivia), I´m a lyric singer and I also play the piano. I speak fluently both English and Spanish and I also learned French, German, Portuguese and a bit of Italian. Currently I’m learning Russian and Hindi.</p></> : <><p>Mi nombre es Carlos Eduardo Gutiérrez Sánchez, soy boliviano y actualmente tengo 35años. En este último año he decidido dar un giro a mi carrera profesional y adentrarme en el mundo del desarrollo. Desde que era niño tuve contacto con la tecnología y con la programación. Siempre me ha gustado pensar de forma diferente y traducir esos pensamientos al lenguaje de programación.</p><p>Soy ingeniero industrial titulado en la Universidad Mayor de San Simón (Cochabamba, Bolivia), y en los pasados meses hice un curso de desarrollo web, en el que me familiaricé con HTML, CSS, JavaScript, NodeJS, SQL y React. Desde enero de este año comencé a desarrollar estas tres primeras aplicaciones web, en las que me he planteado metas de aprendizaje claras.</p><p>La música y los idiomas son grandes pasiones para mí, estudié música en la Universidad Mayor de San Simón, soy cantante lírico y toco el piano. Hablo fluidamente español e inglés, y también aprendí francés, alemán, portugués y algo de italiano. Actualmente aprendo ruso y algo de hindi.
                </p></>}
            </div>
            <div className="sec-projects">
                {switchOn? <h1>Projects</h1>:<h1>Proyectos</h1>}
            </div>
            {switchOn? <div className='intro-text'>
                    <p>Before continuing explaining the projects, I must say that only the first project was designed to be displayed both in mobile and desktop. The following are meant to be displayed only in desktop. Also due to the conditions of the hosting all apps may experience some sort of delay when first loading.</p>
                </div> : <div className='intro-text'>
                    <p>Antes de comenzar con la descripción de los proyectos, debo resaltar que el único proyecto diseñado para ser usado en móvil y escritorio es el primero. Los siguientes fueron diseñados para escritorio. También debido a las condiciones del servicio de hosting que he usado para todos los proyectos, es posible que se experimenten algunos retrasos al cargarlas en un principio.</p>
            </div>}
            <div className="proy">
                {switchOn? <div className="pr1text">
                    <h2>Beethoven Sonatas' Blog</h2>
                    <p>The first project was a responsive Blog that contains a catalog with cards, the card’s information is a database. The blog is displayed in English and is about Beethoven’s piano sonatas.</p>
                    <p>To code the Front-end I used React and libraries such as Axios to work with the server and js-file-downloader to allow the user to download the sonata’s scores. I also used the React Router to connect the different pages within the blog. In the Back-end I used Express, mysql, cors and dotenv to manage the database and to send the requested files for download.</p>
                    <motion.button className='btn'   whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} onClick={()=>{window.open("https://blog-beethoven-sonatas.onrender.com")}}>Try it!</motion.button>
                </div> :<div className="pr1text">
                    <h2>Beethoven Sonatas' Blog</h2>
                    <p>El primer proyecto es un Blog responsivo que tiene un catálogo para utilizar tarjetas; la información de las tarjetas está guardada en una base de datos. El blog está en inglés y se trata sobre las sonatas para piano de Beethoven.</p>
                    <p>Para el Front-end usé React, las librerías Axios para las peticiones al servidor y js-file-downloader para la funcionalidad de descarga de las partituras del catálogo. También utilicé el Router de React para el ruteo de las páginas del blog. En el Back-end utilicé Express, mysql, cors y dotenv para el manejo de la base de datos y el envío de los archivos para la descarga.</p>
                    <motion.button className='btn'   whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} onClick={()=>{window.open("https://blog-beethoven-sonatas.onrender.com")}}>¡Pruébalo!</motion.button>
                </div>}
                <div className='carrusel'>
                    <motion.img className='img-car'   initial={{ opacity: 0, scale: 0}}  whileInView={{ opacity: 1, scale:1}} src={require("../images/imgP1-1.png")} />
                    <motion.img className='img-car' initial={{ opacity: 0, scale: 0}}  whileInView={{ opacity: 1, scale:1}}  src={require("../images/imgP1-2.png")} />
                    <motion.img className='img-car' initial={{ opacity: 0, scale: 0}}  whileInView={{ opacity: 1, scale:1}}  src={require("../images/imgP1-3.png")} />
                </div>
            </div>
            <div className="proy">
                {switchOn? <div className="pr2text">
                    <h2>Hangman game</h2>
                    <p>In this project I wanted to develop a game that changes the components in the app during the interaction with the user, I also wanted to get the information from an external API. The game is the Hangman game, and it requests the word to the API WordsAPI.</p>
                    <p>This app was entirely built in React, with the Axios library to handle the API requests and framer-motion to add some visual effects to some components. This app has no Back-end.</p>
                    <motion.button className='btn'   whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} onClick={()=>{window.open("https://hangman-game-d5m1.onrender.com")}}>Try it!</motion.button>
                </div> : <div className="pr2text">
                    <h2>Juego del ahorcado</h2>
                    <p>En este proyecto quise desarrollar un pequeño juego para que la aplicación cambie durante interacción con el usuario. también quise consumir una API ajena. El juego es el juego del ahorcado, en la que la aplicación solicita a la API WordsAPI una palabra en inglés para el juego.</p>
                    <p>Esta aplicación solamente fue desarrollada con React, con las librerías Axios para manejar los pedidos a la API y framer-motion para agregar efectos visuales a algunos componentes. Esta aplicación no tiene Back-end.</p>
                    <motion.button className='btn'   whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} onClick={()=>{window.open("https://hangman-game-d5m1.onrender.com")}}>¡Pruébalo!</motion.button>
                </div>}
                <div className='carrusel'>
                    <motion.img className='img-car'   initial={{ opacity: 0, scale: 0}}  whileInView={{ opacity: 1, scale:1}} src={require("../images/imgP2-1.png")} />
                    <motion.img className='img-car' initial={{ opacity: 0, scale: 0}}  whileInView={{ opacity: 1, scale:1}}  src={require("../images/imgP2-2.png")} />
                    <motion.img className='img-car' initial={{ opacity: 0, scale: 0}}  whileInView={{ opacity: 1, scale:1}}  src={require("../images/imgP2-3.png")} />
                    <motion.img className='img-car' initial={{ opacity: 0, scale: 0}}  whileInView={{ opacity: 1, scale:1}}  src={require("../images/imgP2-4.png")} />
                </div>
            </div>
            <div className="proy">
                {switchOn? <div className='pr3text'>
                    <h2>Sales Control App</h2>
                    <p>This is a Mern Stack Project designed to control the sales in any store. The UI is in Spanish and there are two profiles, the manager profile (admin) and the sales profiles (ventas), both with different functionalities.</p>
                    <p>The manager profile (Admin) can add, modify and delete information about the stores, the products and user profiles. It is possible to obtain sales reports of every store, user and dates. Both profiles can change their own password and personal information and every report can be exported to Excel.</p>
                    <p>Some of the data cannot be modified or deleted in order to maintain the integrity of the app’s functionalities. If you want to try the report function, try it between March 6, 2023 and March 17, 2023.</p>
                    <p>In the Front-end I used Axios for the requests, Moment to format the dates and Table-to-excel. In the Back-end I used Express, Mongoose, Cors and Dotenv.</p>
                    <p>To log in in the app you may use the following information:</p>
                    <table>
                        <thead>
                            <tr><th>Usuario</th><th>Contraseña</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>admin1</td><td>admin1</td></tr>
                            <tr><td>ventas1</td><td>ventas1</td></tr>
                        </tbody>
                    </table>
                    <motion.button className='btn'   whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} onClick={()=>{window.open("https://control-ventas-app.onrender.com")}}>Try it!</motion.button>
                </div> : <div className='pr3text'>
                    <h2>Aplicación de Control de Ventas</h2>
                    <p>Es un proyecto MERN Stack, en el que quise trabajar con una base de datos no relacional. La aplicación está diseñada para controlar ventas en una tienda de cualquier tipo. Existen dos tipos de perfiles, el perfil de administrador y el perfil de ventas con diferentes funcionalidades.</p>
                    <p>El perfil de administrador puede crear, modificar y eliminar perfiles de usuario, productos y sucursales. También puede obtener reportes de ventas de las diferentes sucursales, usuarios y fechas. El perfil de ventas puede agregar, modificar y eliminar el registro de ventas (sólo del mismo día) y obtener reportes de ventas propios del día y de diferentes fechas. Ambos perfiles pueden cambiar sus contraseñas de ingreso y sus datos personales y todos los reportes pueden ser exportados a Excel.</p>
                    <p>Algunos datos no pueden ser eliminados, con la finalidad de que se puedan acceder a todas las funcionalidades correctamente. Si deseas probar la función de reporte, intenta generar reportes entre 06/03/2023 y 17/03/2023.</p>
                    <p>En el Front-end utilicé Axios para las peticiones al servidor, Moment para el formato de las fechas y Table-to-excel para la exportación a Excel. En el Back-end usé Express, Mongoose, Cors y Dotenv.</p>
                    <p>Para acceder a ambos perfiles esta es la información de usuarios y contraseñas:</p>
                    <table>
                        <thead>
                            <tr><th>Usuario</th><th>Contraseña</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>admin1</td><td>admin1</td></tr>
                            <tr><td>ventas1</td><td>ventas1</td></tr>
                        </tbody>
                    </table>
                    <motion.button className='btn'   whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} onClick={()=>{window.open("https://control-ventas-app.onrender.com")}}>¡Pruébalo!</motion.button>
                </div>}
                <div className='carrusel'>
                    <motion.img className='img-car'   initial={{ opacity: 0, scale: 0}}  whileInView={{ opacity: 1, scale:1}} src={require("../images/imgP3-1.png")} />
                    <motion.img className='img-car' initial={{ opacity: 0, scale: 0}}  whileInView={{ opacity: 1, scale:1}}  src={require("../images/imgP3-2.png")} />
                    <motion.img className='img-car' initial={{ opacity: 0, scale: 0}}  whileInView={{ opacity: 1, scale:1}}  src={require("../images/imgP3-3.png")} />
                    <motion.img className='img-car' initial={{ opacity: 0, scale: 0}}  whileInView={{ opacity: 1, scale:1}}  src={require("../images/imgP3-4.png")} />
                    <motion.img className='img-car' initial={{ opacity: 0, scale: 0}}  whileInView={{ opacity: 1, scale:1}}  src={require("../images/imgP3-5.png")} />
                    <motion.img className='img-car' initial={{ opacity: 0, scale: 0}}  whileInView={{ opacity: 1, scale:1}}  src={require("../images/imgP3-6.png")} />
                    <motion.img className='img-car' initial={{ opacity: 0, scale: 0}}  whileInView={{ opacity: 1, scale:1}}  src={require("../images/imgP3-7.png")} />
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Portfolio