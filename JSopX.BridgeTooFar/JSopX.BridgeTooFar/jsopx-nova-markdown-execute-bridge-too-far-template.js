
const fs = require('fs');
const path = require('path');

// Define the regex to match the comment block
const commentBlockRegex = /<!-- START JSOPX NOVA DOCX HEADER[\s\S]*?END JSOPX NOVA DOCX HEADER -->/g;

// Function to scan for properties in the comment block
function extractCommentProperties(content) {
    const properties = {};
    const match = content.match(commentBlockRegex);

    if (match) {
        const block = match[0];
        const propertyRegex = /(\w+):\s*(\w+)/g;
        let propMatch;
        while ((propMatch = propertyRegex.exec(block)) !== null) {
            properties[propMatch[1]] = propMatch[2];
        }
    }
    return properties;
}

// Function to handle properties
function handleProperties(properties, filePath) {
    if (properties.isDraft === 'true') {
        console.log(`Processing draft version for ${filePath}.`);
    } else {
        console.log(`Not a draft version: ${filePath}`);
    }

    if (properties.toc === 'true') {
        console.log(`Generating Table of Contents for ${filePath}`);
        return true; // Flag to generate TOC
    }

    if (properties.isProductionReady === 'false') {
        console.log(`File ${filePath} is not marked as production-ready.`);
        return false; // Skip processing if not production-ready
    }
    return true;
}

// Function to process includes in markdown
function processIncludes(content) {
    return content.replace(/\{\{\[jsopx-includes\]\((.*?)\)\}\}/g, (match, includePath) => {
        const absolutePath = path.join(__dirname, includePath);
        try {
            return fs.readFileSync(absolutePath, 'utf8');
        } catch (err) {
            console.error(`Error including file: ${absolutePath}`);
            return '<!-- Error including file -->';
        }
    });
}

// Function to remove comments from markdown
function removeComments(content) {
    return content.replace(commentBlockRegex, '');
}

// Function to generate Table of Contents, while ignoring footer sections
function generateTOC(content) {
    const toc = [];
    const lines = content.split('\n');
    let footerDetected = false;

    lines.forEach(line => {
        if (line.match(/^---/) || line.includes('##### [JSopX.com]')) {
            footerDetected = true;
        }

        const headerMatch = line.match(/^(#{1,6})\s+(.*)/);
        if (headerMatch) {
            const level = headerMatch[1].length;
            const headerText = headerMatch[2].trim();
            const anchor = headerText.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');

            if (!footerDetected && !headerText.toLowerCase().includes('from the jsilvestri.com beta')) {
                toc.push(`${' '.repeat((level - 1) * 2)}- [${headerText}](#${anchor})`);
            }
        }
    });

    return toc.join('\n');
}

// Function to insert or replace the TOC
function insertTOC(content, toc) {
    if (content.includes('# Table of Contents') || content.includes('## Table of Contents')) {
        return content.replace(/(#{1,2} Table of Contents[\s\S]*?)(\n#{1,6}\s+)/, `# Table of Contents\n${toc}\n\n$2`);
    }

    const overviewMatch = content.match(/(#{1,2} Overview)/);
    if (overviewMatch) {
        return content.replace(overviewMatch[0], `${overviewMatch[0]}\n\n# Table of Contents\n${toc}`);
    }

    return `# Table of Contents\n${toc}\n\n${content}`;
}

// Function to clean hidden characters
function cleanHiddenCharacters(content) {
    return content.replace(/^\uFEFF/, '').replace(/\s+$/, '');
}

// Function to handle draft notices
//function handleDraftNotice(content, isDraft) {
//    const draftRegex = />\s*\[!\s*CAUTION\s*\]\s*>\s*\*\*\s*This\s+is\s+a\s+DRAFT\s*:\s*\*\*/g;
//    if (isDraft === 'true') {
//        return content;
//    } else {
//        return content.replace(draftRegex, '').replace(/>\s*The\s+content\s+before\s+you[\s\S]*?relative\s+to\s+this\s+project\./g, '');
//    }
//}
// Function to handle draft notices
function handleDraftNotice(content, isDraft) {
    // Regex to match the entire draft block including all lines, handling varying whitespace
    const draftRegex = />\s*\[!\s*CAUTION\s*\]\s*>\s*\*\*\s*This\s+is\s+a\s+DRAFT\s*:\s*\*\*[\s\S]*?>[\s\S]*?\n{0,2}/g;

    if (isDraft === 'true') {
        // If it's a draft, keep the content as is
        return content;
    } else {
        // If it's not a draft, remove the entire draft block
        return content.replace(draftRegex, '').trim();
    }
}



// Function to process markdown files (universal operations for all phases and templates)
function processMarkdownFile(filePath) {
    let markdownContent = fs.readFileSync(filePath, 'utf8');
    const properties = extractCommentProperties(markdownContent);

    console.log(`Processing file ${filePath}`);

    // Handle file based on extracted properties
    const isProductionReady = handleProperties(properties, filePath);
    if (!isProductionReady) {
        return;
    }

    // Clean Hidden Characters
    markdownContent = cleanHiddenCharacters(markdownContent);

    // Process includes
    markdownContent = processIncludes(markdownContent);

    // Handle draft notices
    markdownContent = handleDraftNotice(markdownContent, properties.isDraft);

    // Remove comments
    markdownContent = removeComments(markdownContent);

    // Generate TOC if enabled
    if (properties.toc === 'true') {
        const toc = generateTOC(markdownContent);
        markdownContent = insertTOC(markdownContent, toc);
    }

    // Save the processed file to the Docs directory with the right path
    const processedFilePath = filePath
        .replace('DocsX', 'Docs')
        .replace('Includes/Templates/', '');

    fs.writeFileSync(processedFilePath, markdownContent);
    console.log(`Processed markdown saved to: ${processedFilePath}`);
}

// Example usage
const markdownFilePath = 'DocsX/jsopx.BridgeTooFar/Master/p1/v1/Includes/Templates/README.md'; // Example path for p1/v1/
processMarkdownFile(markdownFilePath);
