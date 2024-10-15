
{{[jsopx-includes](./DocsX/AllGlobal/Master/Includes/Content/Template/BasicMarkdownPage/Header.md)}}

<!-- START JSOPX NOVA DOCX HEADER
group: 'BasicMarkdownPage'
isDraft: false
isProductionReady: true
toc: true
END JSOPX NOVA DOCX HEADER -->


{{[jsopx-includes](./DocsX/AllGlobal/Master/Includes/Content/Common/Draft-Notice.md)}}

## Overview

{{[jsopx-includes](./DocsX/AllGlobal/Master/Includes/Content/Template/BasicMarkdownPage/Overview.md)}}

{{[jsopx-includes](./DocsX/AllGlobal/Master/Includes/Content/Common/Current-Phase.md)}}

## Table of Contents

1. [Overview](#overview)
2. [Prerequisites](#prerequisites)
3. [Corequisites](#corequisites)
4. [Postrequisites](#postrequisites)
5. [Concomitants](#concomitants)
6. [Getting Started](#getting-started)
7. [Step-by-Step Instructions](#step-by-step-instructions)
   1. [Step 1: Create the Parent Basic Markdown Page Template](#step-1-create-the-parent-basic-markdown-page-template)
   2. [Step 2: Create the Child Basic Markdown Page Template Content Includes](#step-2-create-the-parent-basic-markdown-page-template-content-includes)
   3. [Step 3: Double Check the Parent Basic Markdown Page Template for all Includes](#step-3-double-check-the-parent-basic-markdown-page-template-for-all-includes)
7. [Usage](#usage)
8. [In Conclusion](#in-conclusion)

{{[jsopx-includes](./DocsX/AllGlobal/Master/Includes/Content/Common/Alerts.md)}}

{{[jsopx-includes](./DocsX/AllGlobal/Master/Includes/Content/Common/Alerts-Current.md)}}

[Back to Top](#table-of-contents)

## Prerequisites

{{[jsopx-includes](./DocsX/AllGlobal/Master/Includes/Content/Template/BasicMarkdownPage/Prerequisites.md)}}

[Back to Top](#table-of-contents)

## Corequisites

{{[jsopx-includes](./DocsX/AllGlobal/Master/Includes/Content/Template/BasicMarkdownPage/Corequisites.md)}}

[Back to Top](#table-of-contents)

## Postrequisites

{{[jsopx-includes](./DocsX/AllGlobal/Master/Includes/Content/Template/BasicMarkdownPage/Postrequisites.md)}}

[Back to Top](#table-of-contents)

## Concomitants

{{[jsopx-includes](./DocsX/AllGlobal/Master/Includes/Content/Template/BasicMarkdownPage/Concomitants.md)}}

[Back to Top](#table-of-contents)

## Getting Started

{{[jsopx-includes](./DocsX/AllGlobal/Master/Includes/Content/Template/BasicMarkdownPage/GettingStarted.md)}}

[Back to Top](#table-of-contents)

## Step-by-Step Instructions

{{[jsopx-includes](./DocsX/AllGlobal/Master/Includes/Content/Template/BasicMarkdownPage/StepByStepInstructions.md)}}

[Back to Top](#table-of-contents)

## Usage

{{[jsopx-includes](./DocsX/AllGlobal/Master/Includes/Content/Template/BasicMarkdownPage/Usage.md)}}

## In Conclusion

{{[jsopx-includes](./DocsX/AllGlobal/Master/Includes/Content/Template/BasicMarkdownPage/InConclusion.md)}}

[Back to Top](#table-of-contents)

---

Here are three options to manage the visibility of your `includes` folder and original `ReadMe.md` files:

---

### **Option 1: Using `.gitignore` (Git-based approach)**
You can use a `.gitignore` file to exclude the `includes` folder and original `ReadMe.md` from the public repository, but still keep them accessible locally.

#### Example `.gitignore`:
```bash
docs/includes/
docs/README.md
```

This will hide the files from Git, but they’ll still exist locally.

---

### **Option 2: Using Node.js Scripts (Rename to Hidden Files)**
You can write Node.js scripts to rename files and folders to hide them (e.g., prepend `.`), which makes them hidden in most file systems.

#### Example: Hide the `includes` folder and `README.md` by renaming them:
**Hide Script (`hide-jsopx-nova-builder.js`)**:
```javascript
const fs = require('fs');
const path = require('path');

fs.renameSync(path.join(__dirname, 'docs/includes'), path.join(__dirname, 'docs/.includes'));
fs.renameSync(path.join(__dirname, 'docs/README.md'), path.join(__dirname, 'docs/.README.md'));

console.log('Files hidden.');
```

**Unhide Script (`open-jsopx-nova-builder.js`)**:
```javascript
const fs = require('fs');
const path = require('path');

fs.renameSync(path.join(__dirname, 'docs/.includes'), path.join(__dirname, 'docs/includes'));
fs.renameSync(path.join(__dirname, 'docs/.README.md'), path.join(__dirname, 'docs/README.md'));

console.log('Files visible.');
```

---

### **Option 3: Move Files Temporarily (More Control Over Visibility)**
Move files to a hidden directory when not in use and move them back when you need to work on them.

#### Example:
**Hide Files (`hide-jsopx-nova-builder.js`)**:
```javascript
const fs = require('fs-extra');
const path = require('path');

fs.moveSync(path.join(__dirname, 'docs/includes'), path.join(__dirname, '.hidden/includes'));
fs.moveSync(path.join(__dirname, 'docs/README.md'), path.join(__dirname, '.hidden/README.md'));

console.log('Files hidden.');
```

**Unhide Files (`open-jsopx-nova-builder.js`)**:
```javascript
const fs = require('fs-extra');
const path = require('path');

fs.moveSync(path.join(__dirname, '.hidden/includes'), path.join(__dirname, 'docs/includes'));
fs.moveSync(path.join(__dirname, '.hidden/README.md'), path.join(__dirname, 'docs/README.md'));

console.log('Files visible.');
```

You can use these scripts to toggle the visibility of the files when needed.

{{[jsopx-includes](./DocsX/AllGlobal/Master/Includes/Layout/Footer.md)}}