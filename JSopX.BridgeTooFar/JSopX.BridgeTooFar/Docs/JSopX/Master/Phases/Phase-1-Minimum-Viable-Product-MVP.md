


# ﻿JSopX™ Open Project EXperiences : Phase 1 (Current Phase): Minimum Viable Product (MVP)
From the ﻿jSilvestri.com BETA v 2024 JSopX Open Project EXperiences Collection of Projects







  
> [!CAUTION]
> **This is a DRAFT:**
> 
> The content before you is a draft version of the document. It **should not** be considered **accurate**. In fact, drafts will often times be for different reasons, such as testing styles, content, etc. The content itself may have only been used as a placeholder, making sections, or even the entire document contain information not relative to this project.


## Overview

﻿

The sole purpose of Project Development Steps in Phase 1 (Current Phase) is to create a Minimum Viable Product (MVP) to similuate a real-world case where stakeholders need some form of proof-of-concept at the soonest possible. 



## Table of Contents

1. [Overview](#overview)
2. [Prerequisites](#prerequisites)
3. [Corequisites](#corequisites)
4. [Postrequisites](#postrequisites)
5. [Concomitants](#concomitants)
6. [Project Development Phase 1: Minimum Viable Product (MVP)](#project-development-phase-1-minimum-viable-product-mvp)
7. [In Conclusion](#in-conclusion)


## Prerequisites

- Basic understanding of `JSopX Phases`.


[Back to Top](#table-of-contents) | [Back to Parent](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/blob/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Phases.md)


## Corequisites﻿

- Ensure you are pro-active in at least your own checklist of action items if you do not plan to follow the phases of development of Phase 1.


[Back to Top](#table-of-contents) | [Back to Parent](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/blob/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Phases.md)


## Postrequisites
﻿

- Clean and rebuild each project after making changes to ensure all changes are working as expected before starting a new phase.


[Back to Top](#table-of-contents) | [Back to Parent](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/blob/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Phases.md)



## Concomitants
﻿

- As you see more projects being created, pay close attention to the instructions for Git SubTree and Visual Studio Project References. Special considerations had to be made to ensure all projects can be cloned in an `all-in-one` project (e.g., `JSopX.OpenProjectX`) or by independent project isolation for a unique educational user experience not common in most projects.


[Back to Top](#table-of-contents) | [Back to Parent](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/blob/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Phases.md)


# Project Development Phase 1: Minimum Viable Product (MVP)

The sole purpose of Project Development Steps in Phase 1 (Current Phase) is to create a Minimum Viable Product (MVP) to similuate a real-world case where stakeholders need some form of proof-of-concept at the soonest possible. 

The basic steps I am taking for this Phase is as follows:

1. **Add a Class Library**: Add a new ASP.NET Core Class Library project and solution. This project will serve as the common place where we share the most common class and interface parts we want to use across all applications, such as Constants, Enums, Helpers, etc.
   
2. **Add a Web API Project**: Add a new ASP.NET Core Web API project and solution. This project will serve as the backend API that the frontend projects will communicate with.

3. **Add a Shared Resources Project**: Add a new ASP.NET Core project and solution that will handle common, static, assets and resources, shared across all applications. This project will serve as the resource project with all HTML, CSS, JS, Images and other creative all projects will use to carry the same theme, look and feel across applications. For now, all projects will use the basic, out-of-the-box vanilla assets.

4. **Add Frontend & Backend Web API Demo Projects**:
   - Add separate projects and solutions for AngularJS, Vue, ReactJS, and Blazor. We will initially choose the appropriate project templates provided by Visual Studio.
   - For AngularJS, Vue, and ReactJS, we will consider creating separate ASP.NET Core Web Application projects and choosing the respective frontend frameworks (i.e., _Angular_, _Vue.js_, _React.js_) during project creation.
   - For Blazor, we will create a Blazor WebAssembly or Blazor Server project, depending on time. If I have bandwidth, I may also create a MAUI Hybrid Project, which is relatively new to the scene.

5. **Add Common Projects to Frontend & Backend Web API Demo Projects**:
   - Each frontend and backend project (_AngularJS_, _Vue_, _ReactJS_, _Blazor_, etc.) will make HTTP requests to the Web API project to fetch data or perform data operations, will use the Class Library containing constants, DTOs, and helper classes to perform other common operations, and will use the Shared Resources Library to share common themes, such as common CSS, JS, HTML. etc...).
   - Each frontend and backend project (_AngularJS_, _Vue_, _ReactJS_, _Blazor_, etc.) will use the Class Library containing constants, DTOs, and helper classes to perform other common operations. 
   - Each frontend and backend project (_AngularJS_, _Vue_, _ReactJS_, _Blazor_, etc.) will use the Shared Resources Library to share common themes, such as common CSS, JS, HTML. etc...).
   **These projects will be added to each project in Phase 1, but configured for full use in later phases. **

6. **Testing and Debugging**:
   - Test the communication between the frontend projects and the Web API project.
   - Debug any issues that arise during development.

7. **Deployment**:
    - Deploy the Web API project and frontend projects to the desired hosting environment. Ensure that all projects are configured correctly for production.


[Back to Top](#table-of-contents) | [Back to Parent](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/blob/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Phases.md)



## In Conclusion

﻿

The `Phase 1 Minimum Viable Product (MVP)` Phase is an important aspect of all applications being developed.


[Back to Top](#table-of-contents) | [Back to Parent](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/blob/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Phases.md)



---

##### [JSopX.com](https://www.jsopx.com/) | [Jason's Official Website](https://www.jsilvestri.com/) | [X](https://www.x.com/JasonSilvestri) | [LinkedIn](http://www.linkedin.com/in/JasonSilvestri) | [GitHub](https://github.com/JasonSilvestri) | [Gmail](mailto:therealjasonsilvestri@gmail.com) | [Phone : 508-851-9445](phoneto:508-851-9445)

###### Copyright © 2024 - All Rights Reserved by Jason Silvestri

[Back to Parent](Docs/JSopX/Master/Phases)