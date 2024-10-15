
// # 1 - First Rev
//const fs = require('fs-extra');
//const path = require('path');


//console.log(path);
//console.log(__dirname);


//fs.moveSync(path.join(__dirname, 'SandBox/AllGlobal'), path.join(__dirname, '.hidden/AllGlobal'));
//fs.moveSync(path.join(__dirname, 'SandBox/README.md'), path.join(__dirname, '.hidden/README.md'));

//console.log('Files hidden.');

//// # 2 - Second Rev
//const fs = require('fs-extra');
//const path = require('path');

//const docsDir = path.join(__dirname, 'DocsX');
//const hiddenDir = path.join(__dirname, '.hidden');

//// Define paths for the current files
//const docsIncludes = path.join(__dirname, 'DocsX/AllGlobal/Master/Includes');
//const docsReadme = path.join(__dirname, 'DocsX/AllGlobal/Master/README.md');
//const hiddenIncludes = path.join(__dirname, '.hidden/DocsX/AllGlobal/Master/Includes');
//const hiddenReadme = path.join(__dirname, '.hidden/DocsX/AllGlobal/Master/README.md');

//// Check if the doc and hidden directories exist
//if (fs.existsSync(docsDir) && fs.existsSync(hiddenDir)) {

//    // Check if the includes and README.md exist before trying to hide
//    if (fs.existsSync(docsIncludes) && fs.existsSync(docsReadme)) {
//        // Move the files to the hidden location
//        fs.moveSync(docsIncludes, hiddenIncludes);
//        fs.moveSync(docsReadme, hiddenReadme);

//        console.log('Files hidden successfully.');
//    } else {
//        console.log('Files are already hidden or not found.');
//    }

//} else {
//    console.log('Files are already hidden or not found.');
//}


// # 3 - 3rd Rev
const fs = require('fs-extra');
const path = require('path');

//// Define paths for the current files
//const docsxDir = path.join(__dirname, './DocsX');
//const hiddenDir = path.join(__dirname, './.hidden');
//const hiddenDocsxDir = path.join(__dirname, './.hidden/DocsX');

//// Check if the Docx Directory and Hidden exist before trying to hide
//if (!fs.existsSync(docsxDir) && !fs.existsSync(hiddenDir)) {

//    console.log('File Directories do not exist. No action taken.');
//}
//else if (fs.existsSync(docsxDir) && !fs.existsSync(hiddenDir)) {
//    // Move the files to the hidden location
//    fs.moveSync(docsxDir, docsxHiddenDir);

//    console.log('Files Docx files existed, but hidden directory did not. We were still able to successfully close file operations for checkin.');
//}
//// Check if the Docx Directory and Hidden Docx Directory exist before trying to hide
//else if(fs.existsSync(docsxDir) && !fs.existsSync(docsxHiddenDir)) {
//        // Move the files to the hidden location
//        fs.moveSync(docsxDir, docsxHiddenDir);

//        console.log('Files Docx files existing, and but hidden DocsX directory did not. We were still able to successfully move to hidden.');

//} else {
//    console.log('Files are already hidden or not found.');
//}


// ⚠ IMPORTANT:
// These directories defined and the file / directory quote on quote "Includes / paths" are different 

const docsDir = path.join(__dirname, 'DocsX');
const hiddenDir = path.join(__dirname, '.hidden');

// Define paths for the hidden files
const toHiddenIncludes = path.join(__dirname, '.hidden/DocsX');
const fromDocsxIncludes = path.join(__dirname, 'DocsX');

// Check if hidden and docx DIRECTORIES both exist. We need to jump out and troubleshoot if so.
// UPDATE: After hidden directory gets created for the first time, this condition is always true.
//if ((fs.existsSync(docsDir)) && (fs.existsSync(hiddenDir))) {

//    console.log('DocsX Files directory and Hidden directory in both places exist, and shouldnt. Action was not taken. Best to troubleshoot.');
//} 

// Check if hidden Include Docx and docx DIRECTORIES both exist. We need to also jump out and troubleshoot if so. 
if ((fs.existsSync(toHiddenIncludes)) && (fs.existsSync(fromDocsxIncludes))) {

    console.log('DocsX File Includes and Hidden DocsX File Includes both exist, and shouldnt. Action was not taken. Best to troubleshoot.');
}

// Check if hidden Include Docx exist and docx DIRECTORIES dont exist.
else if ((fs.existsSync(toHiddenIncludes)) && (!fs.existsSync(fromDocsxIncludes))) {

    console.log('DocsX File Includes have already been closed as Hidden DocsX File Includes.');
}

// Check if Docx INCLUDES exist before moving back to Hidden
else if (fs.existsSync(fromDocsxIncludes)) {

    // Move the hidden files back to their original locations
    fs.moveSync(fromDocsxIncludes, toHiddenIncludes);

    console.log(fromDocsxIncludes + ' DocsX File Includes have been successfully closed as Hidden DocsX File Includes.');

} else {
    console.log(fromDocsxIncludes + ' files not found. Nothing to hide.');

}

