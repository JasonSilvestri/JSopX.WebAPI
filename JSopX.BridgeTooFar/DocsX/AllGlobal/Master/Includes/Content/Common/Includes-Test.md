
# JSopX Open Project EXperiences : Parent - Working with Includes in MarkDown (Static Draft)

###### From the ﻿jSilvestri.com BETA v 2024 JSopX Open Project EXperiences Collection of Projects (Static Draft)

> [!CAUTION]
> **This is a Static DRAFT:**
> 
> The content before you is a draft version of the document. It **should not** be considered **accurate**. In fact, drafts will often times be for different reasons, such as testing styles, content, etc. The content itself may have only been used as a placeholder, making sections, or even the entire document contain information not relative to this project.


## Overview

This guide is an attempt at adding some clarity to reusing Markdown using includes. 

{{[jsopx-includes](./DocsX/AllGlobal/Master/Includes/Content/Common/Current-Phase.md)}}

### Problem Addressed

Given the nested and multi-tiered structure of JSopX projects, managing all the documentation and similar re-use of content required across all has been daunting.

## Table of Contents

1. [Overview](#overview)
2. [Prerequisites](#prerequisites)
3. [Corequisites](#corequisites)
4. [Postrequisites](#postrequisites)
5. [Concomitants](#concomitants)
6. [Step-by-Step Instructions](#step-by-step-instructions)
   1. [Step 1: Create the Parent Working With Includes Read Me](#step-1-create-the-parent-working-with-includes-read-me)
   2. [Step 2: Create the Child Working With Includes Read Me](#step-2-create-the-child-working-with-includes-read-me)
   3. [Step 3: Create sample include in Alert section to prove the child include works](#step-3-sample-include-in-alert-section-to-provide-the-child-include-works)
7. [In Conclusion](#in-conclusion)

## Prerequisites

- Visual Studio 2022 or higher installed.
- Basic understanding of `.csproj` and `.targets` file structures.
- Existing JSopX projects (e.g., `JSopX.ClassLibrary`, `JSopX.WebAPI`, etc.).
- Installed .NET 8.0 SDK.

## Corequisites

- Ensure we can have a markdown readme like the parent markdown we are in now, and add markdown includes from the child, to see if GitHub supports includes in a way that we need them to.

## Postrequisites

- Clean and rebuild each project markdown after making changes to ensure includes are properly configured.

## Concomitants

- You may need to update Git configurations to handle dependencies between projects, especially if using Git submodules or Git subtree.

## Step-by-Step Instructions

### Step 1: Create the Parent Working With Includes Read Me

1. **Create a `WorkingWithIncludesParent` markdown file** we can use to embed include test markdowns into it.

### Step 2: Create the Child Working With Includes Read Me

2. **Create a `WorkingWithIncludesChild` markdown file** we can use to embed include test markdown into the  `WorkingWithIncludesParent` readme.

### Step 3: Create sample include in Alert section to prove the child include works

1. Add `include` block below. 
   
2. If this was done correctly, you should see the alerts section below. 

## In Conclusion

By centralizing project documents with this approach to mark down will be very helpful.