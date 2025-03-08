export const useArrayInput = (start, end) => {
    if (end - start < 1) return []; 
    const numbers = new Set(); 

    while (numbers.size < end - start) {
        let random = Math.floor(Math.random() * (end - start) + start);
        numbers.add(random);
    }
    console.log(Array.from(numbers));
    return Array.from(numbers);
};
