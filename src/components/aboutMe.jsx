import './aboutMe.css';
import {useState} from 'react';

const AboutMe = () => {
    const [name, setName] = useState('');

    const toggleName = () => {
        setName('Wesley Dugger');
    };
    
    return (
        <div className="about-me">
            <h1>Hi, my name is</h1>
            <h4>{name}</h4>

            <button onClick={toggleName}>See my name</button>
        </div>
    );
};

export default AboutMe;