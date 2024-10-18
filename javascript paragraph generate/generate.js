// function generateParagraphs() {
//     const numParagraphs = document.getElementById("numParagraphs").value;
//     const output = document.getElementById("output");
//     const sampleText = [
//         "This is the first line of the paragraph.",
//         "Here is the second line, adding more detail.",
//         "This third line continues the narrative.",
//         "The fourth line might add an example.",
//         "Fifth line could be some elaboration.",
//         "Sixth line keeps the information flowing.",
//         "And the final, seventh line wraps things up."
//     ];

//     output.innerHTML = ''; 

//     let paragraphCount = 0;

//     function showLine(lineIndex, paragraph) {
//         if (lineIndex < sampleText.length) {
//             const line = document.createElement("p");
//             line.textContent = sampleText[lineIndex];
//             output.appendChild(line);
//             setTimeout(() => showLine(lineIndex + 1, paragraph), 500); 
//         } else if (paragraph < numParagraphs - 1) {
//             paragraphCount++;
//             setTimeout(() => showLine(0, paragraphCount), 1000); 
//         }
//     }

//     showLine(0, paragraphCount); 
// }



function generateParagraphs() {
    const numParagraphs = parseInt(document.getElementById("numParagraphs").value);
    const output = document.getElementById("output");
    const sampleText = [
        "This is the first line of the paragraph.",
        "Here is the second line, adding more detail.",
        "This third line continues the narrative.",
        "The fourth line might add an example.",
        "Fifth line could be some elaboration.",
        "Sixth line keeps the information flowing.",
        "And the final, seventh line wraps things up."
    ];

    output.innerHTML = ''; 

    // Show only the number of lines equal to numParagraphs
    function showParagraphs() {
        for (let i = 0; i < numParagraphs && i < sampleText.length; i++) {
            const line = document.createElement("p");
            line.textContent = sampleText[i];
            output.appendChild(line);
        }
    }

    showParagraphs();
}
