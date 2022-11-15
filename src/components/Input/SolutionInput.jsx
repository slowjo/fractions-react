import { useState, useRef } from 'react';
import styles from './SolutionInput.module.css';

const SolutionInput = ({ solutionArray, makeNewFraction, displayedMessage, setDisplayedMessage }) => {
    const upperRef = useRef();
    const lowerRef = useRef();

    const [upperInput, setUpperInput] = useState('');
    const [lowerInput, setLowerInput] = useState('');

    const onUpperChange = (e) => {
        if (e.target.value <= 10) {
            setUpperInput(e.target.value);
        }
    }

    const onLowerChange = (e) => {
        if (e.target.value <= 10) {
            setLowerInput(e.target.value);
        }
    }

    const focusOnUpper = () => {
        upperRef.current.focus();
    };

    const focusOnLower = () => {
        lowerRef.current.focus();
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (upperInput === '' || lowerInput === '') return;
        if (parseInt(upperInput) === solutionArray[0] && parseInt(lowerInput) === solutionArray[1]) {
            console.log('correct!');
            setDisplayedMessage('Richtig! Gut gemacht!');
            setTimeout(() => {
                setDisplayedMessage('Schreibe das Tortendiagramm als Bruch!');
            }, 2000);
            makeNewFraction();
            setUpperInput('');
            setLowerInput('');
        } else {
            console.log('nope');
            setDisplayedMessage('Probiers noch mal!');
            setTimeout(() => {
                setDisplayedMessage('Schreibe das Tortendiagramm als Bruch!');
            }, 2000);
            console.log(solutionArray);
        }
    }

    return (
        <div style={{ fontSize: '50px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
            <p style={{ fontSize: '20px' }}>{displayedMessage}</p>
            <form onSubmit={onSubmit}>
                <input 
                    className={styles.hiddeninput}
                    type='number'
                    max='10'
                    value={upperInput} 
                    onChange={onUpperChange} 
                    ref={upperRef}
                />
                <div 
                    className={styles.displayedInput}
                    onClick={focusOnUpper}
                >{upperInput}</div>
                <div style={{
                    width: '100px',
                    height: '3px',
                    background: 'black',
                    margin: '10px auto',
                }}></div>
                <input
                    className={styles.hiddeninput} 
                    type='number' 
                    value={lowerInput} 
                    onChange={onLowerChange} 
                    ref={lowerRef}
                />
                <div 
                    className={styles.displayedInput}
                    onClick={focusOnLower}
                >{lowerInput}</div>
                <button className={styles.submitButton} type='submit'>Fertig!</button>
            </form>
        </div>
    );
};

export default SolutionInput;