function rotateArray(array) {
    let rotations = Number(array.pop()) % array.length;
    for (let i = 0; i < rotations; i++) {
        array.unshift(array.pop());
    }
    console.log(array.join(' '));
}
rotateArray(['1', '2', '3', '4', '2'])