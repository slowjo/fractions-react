import { Pie } from 'react-chartjs-2';
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Chart as ChartJS, ArcElement } from 'chart.js';

// ChartJS.register(ArcElement, Tooltip, Legend);
ChartJS.register(ArcElement);

const ChartContainer = ({ currentFraction, fractionArray, colorArray }) => {
    console.log(currentFraction);
    console.log(fractionArray);
    console.log(colorArray);

    return (
        <div style={{
            width: '90%',
            maxWidth: '500px',
            margin: 'auto',
            display: 'grid',
            alignItems: 'center',
            justifyContent: 'center',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: '10px',
            marginBottom: '2rem',
        }}>
            {currentFraction && currentFraction.map((fraction, index) => (
                <div style={{ width: '100%' }}>
                    <Pie width={'100%'} datasetIdKey='id' data={{
                        labels: [
                        'Red',
                        'Blue',
                        'Yellow'
                        ],
                        datasets: [{
                        label: 'My First Dataset',
                        data: fractionArray[index],
                        backgroundColor: colorArray[index],
                        //   hoverOffset: 4
                        }]
                    }} />
                </div>
            ))}
        </div>
    );
};

export default ChartContainer;