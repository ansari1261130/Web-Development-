import React, { useState, useEffect } from 'react';
import { useArrayInput } from '../hooks/useArrayInput';

const BubbleSort = () => {
    const [range, setRange] = useState(5); 
    const [arr, setArr] = useState([]);

    useEffect(() => {
        const initialArray = useArrayInput(1, range); 
        setArr(initialArray);
    }, [range]);

    const swap = (arr, i, j) => { 
        const newArr = [...arr];
        [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
        return newArr; 
    };

    useEffect(() => {
        if (arr.length === 0) return;
        let sortedArray = [...arr]; 
        for (let i = 0; i < sortedArray.length; i++) {
            for (let j = 0; j < sortedArray.length - i - 1; j++) {
                if (sortedArray[j] > sortedArray[j + 1]) {
                    sortedArray = swap(sortedArray, j, j + 1);
                }
            }
        }
        setArr(sortedArray);
    }, [arr]); 

    return (
        <div>
            <label>
                Select Range: {range}
                <input 
                    type="range" 
                    min="1" 
                    max="50" 
                    value={range} 
                    onChange={(e) => setRange(parseInt(e.target.value))}
                />
            </label>
            <div>Sorted Array: {arr.join(', ')}</div>
        </div>
    );
};

export default BubbleSort;
