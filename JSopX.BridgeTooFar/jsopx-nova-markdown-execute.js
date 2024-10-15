const fs = require('fs');
const path = require('path');


// Define the regex to match the comment block
const commentBlockRegex = /<!-- START JSOPX NOVA DOCX HEADER[\s\S]*?END JSOPX NOVA DOCX HEADER -->/g;


// Read the main README.md file
let mainMarkdown = fs.readFileSync('./DocsX/AllGlobal/Master/Includes/Templates/README.md', 'utf8');

// Remove the comment block if it exists before includes
//mainMarkdown = mainMarkdown.replace(commentBlockRegex, '');

// Manually replace {{[jsopx-includes](path)}} with the file content
mainMarkdown = mainMarkdown.replace(/\{\{\[jsopx-includes\]\((.*?)\)\}\}/g, (match, includePath) => {
    const absolutePath = path.join(__dirname, includePath);
    try {
        return fs.readFileSync(absolutePath, 'utf8');
    } catch (err) {
        console.error(`Error including file: ${absolutePath}`);
        return '<!-- Error including file -->';
    }
});

// Remove the comment block if it exists after includes
mainMarkdown = mainMarkdown.replace(commentBlockRegex, '');

// Save the processed markdown (no HTML conversion involved)
fs.writeFileSync('./DocsX/AllGlobal/Master/Includes/Templates/README-processed.md', mainMarkdown);

console.log('Markdown processing complete. Output saved locally to AllGlobal in DocsX as README-processed.md for testing purposes');

// Save the processed markdown from 'Docs/AllGlobal' to official public documentation 'Docs/JSopX'
// (no HTML conversion involved)
fs.writeFileSync('./Docs/JSopX/Master/README.md', mainMarkdown);

console.log('Markdown processing complete. Output saved to JSopX in Docs as official README.md');

//// Version before comments header check
//// Read the main README.md file
//let mainMarkdown = fs.readFileSync('./DocsX/AllGlobal/Master/Includes/Templates/README.md', 'utf8');

//// Manually replace {{[jsopx-includes](path)}} with the file content
//mainMarkdown = mainMarkdown.replace(/\{\{\[jsopx-includes\]\((.*?)\)\}\}/g, (match, includePath) => {
//    const absolutePath = path.join(__dirname, includePath);
//    try {
//        return fs.readFileSync(absolutePath, 'utf8');
//    } catch (err) {
//        console.error(`Error including file: ${absolutePath}`);
//        return '<!-- Error including file -->';
//    }
//});

//// Save the processed markdown (no HTML conversion involved)
//fs.writeFileSync('./DocsX/AllGlobal/Master/Includes/Templates/README-processed.md', mainMarkdown);

//console.log('Markdown processing complete. Output saved to README-processed.md');