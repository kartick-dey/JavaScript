function removedExtraSpace(paragraph) {
    const removedExtraSpaces = paragraph.replace(/\s+/g, ' ').trim();
    return removedExtraSpaces;
}

const para = `    I am Kartick      Dey, having
    2 years    of experience as a Software Developer     in                   IT
    `;
let paragraph = removedExtraSpace(para);
console.log(paragraph);
