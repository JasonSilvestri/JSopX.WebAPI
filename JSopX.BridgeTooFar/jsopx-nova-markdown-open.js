
// # 1 created
//const fs = require('fs-extra');
//const path = require('path');


////console.log(path);
////console.log(__dirname);

//fs.moveSync(path.join(__dirname, '.hidden/SandBox/AllGlobal'), path.join(__dirname, 'Docs/SandBox/AllGlobal'));
//fs.moveSync(path.join(__dirname, '.hidden/SandBox/README.md'), path.join(__dirname, 'Docs/SandBox/README.md'));

//console.log('Files visible.');


// # 2 created

//const fs = require('fs-extra');
//const path = require('path');


//const docsDir = path.join(__dirname, 'DocsX');
//const hiddenDir = path.join(__dirname, '.hidden');

//// Define paths for the hidden files
//const hiddenIncludes = path.join(__dirname, '.hidden/DocsX/AllGlobal/Master/Includes');
//const hiddenReadme = path.join(__dirname, '.hidden/DocsX/AllGlobal/Master/README.md');
//const docsIncludes = path.join(__dirname, 'DocsX/AllGlobal/Master/Includes');
//const docsReadme = path.join(__dirname, 'DocsX/AllGlobal/Master/README.md');

//// Check if hidden includes and README.md exist before moving
//if (fs.existsSync(docsDir) && fs.existsSync(hiddenDir)) {

//    // Check if hidden includes and README.md exist before moving
//    if (fs.existsSync(hiddenIncludes) && fs.existsSync(hiddenReadme)) {
//        // Move the hidden files back to their original locations
//        fs.moveSync(hiddenIncludes, docsIncludes);
//        fs.moveSync(hiddenReadme, docsReadme);

//        console.log('Files made visible.');
//    } else {
//        console.log('Hidden files not found. Nothing to unhide.');
//    }
//} else {
//    console.log('Hidden files not found. Nothing to unhide.');
//}

// # 3:
const fs = require('fs-extra');
const path = require('path');

// ⚠ IMPORTANT:
// These directories defined and the file / directory quote on quote "Includes / paths" are different 

const docsDir = path.join(__dirname, 'DocsX');
const hiddenDir = path.join(__dirname, '.hidden');

// Define paths for the hidden files
const fromHiddenIncludes = path.join(__dirname, '.hidden/DocsX');
const toDocsxIncludes = path.join(__dirname, 'DocsX');

// Check if hidden and docx DIRECTORIES both exist. We need to jump out and troubleshoot if so. 
if ((fs.existsSync(docsDir)) && (fs.existsSync(hiddenDir))) {

    console.log('DocsX Files directory and Hidden Docsx Files directories in both places exist and shouldnt. Action was not taken. Best to try and close DocsX File Includes and directory.');
}

// Check if hidden Docx INCLUDES exist before moving back to Docx
else if (fs.existsSync(fromHiddenIncludes)) {

    // Move the hidden files back to their original locations
    fs.moveSync(fromHiddenIncludes, toDocsxIncludes);

    console.log(fromHiddenIncludes + ' DocsX File Includes have been successfully opened and no longer exist as Hidden DocsX File Includes.');
} else {
    console.log(fromHiddenIncludes + ' Hidden DocsX File Includes not found. Nothing to open.');

}