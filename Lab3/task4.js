function someFunction(...args) {
    const inputs = [...args];
    let sum = 0;
    let sentence = "";

    for (let i = 0; i < inputs.length; i++) {
        if (!isNaN(inputs[i])) {
            sum += inputs[i];
            continue;
        }

        if (sentence === "") {
            sentence += inputs[i];
            continue;
        }

        sentence += ` ${inputs[i]}`
    }

    return {
        "Sentence": sentence,
        "Sum of numbers": sum
    }
}

console.log(someFunction("Jane", 1, 3, "like", 5, 9, "read", 4, "books"));