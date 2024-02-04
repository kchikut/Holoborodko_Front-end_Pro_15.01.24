function generateStatistics() {
    const textInput = document.getElementById("textInput").value.trim();

    if (!textInput) {
        console.log("Input is empty");
        return;
    }
    const wordsArray = customSplit(textInput).filter(word => word !== "").map(word => word.toLowerCase());
    const uniqueWords = new Set(wordsArray);
    const wordCountMap = new Map();
    wordsArray.forEach(word => {
        const count = wordCountMap.has(word) ? wordCountMap.get(word) + 1 : 1;
        wordCountMap.set(word, count);
    });
    const statisticsOutput = document.getElementById("statistics");
    statisticsOutput.innerHTML = `<p>Unique words: ${uniqueWords.size}</p><ul>`;
    wordCountMap.forEach((count, word) => {
        statisticsOutput.innerHTML += `<li>${word}: ${count}</li>`;
    });
    statisticsOutput.innerHTML += `</ul>`;
}
function customSplit(input) {
    // Custom split implementation (space as delimiter)
    return input.split(' ');
}
