


# ﻿JSopX™ Open Project EXperiences : Phase 2: Minimum Viable Refactor Product (MVRP) (Draft)
From the ﻿jSilvestri.com BETA v 2024 JSopX Open Project EXperiences Collection of Projects







  
> [!CAUTION]
> **This is a DRAFT:**
> 
> The content before you is a draft version of the document. It **should not** be considered **accurate**. In fact, drafts will often times be for different reasons, such as testing styles, content, etc. The content itself may have only been used as a placeholder, making sections, or even the entire document contain information not relative to this project.


## Overview

﻿

The purpose of Project Development Steps in Phase 2 is to create a Minimum Viable Reactor Product (MVRP) to similuate a real-world case where the developers should be quickly getting rid of creating more proof-of-concept features. The Minimum Viable Product did its job. Most importantly, it has already outlived its purpose. It is time to start refactoring some of the code and processes created this far, and start thinking about focusing on tying in re-usable Web APIs, assets, and other object oriented programming design patterns and best practices you would expect in a Multi-Plaform, Multi-Stack, Enterprise-Leval Application.



## Table of Contents

1. [Overview](#overview)
2. [Prerequisites](#prerequisites)
3. [Corequisites](#corequisites)
4. [Postrequisites](#postrequisites)
5. [Concomitants](#concomitants)
6. [Project Development Phase 2: Minimum Viable Refactor Product (MVRP)](#project-development-phase-2-minimum-viable-refactor-product-mvrp)
7. [In Conclusion](#in-conclusion)


## Prerequisites

- Basic understanding of `JSopX Phases`.


[Back to Top](#table-of-contents) | [Back to Parent](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/blob/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Phases.md)


## Corequisites﻿

- Ensure you are pro-active in at least your own checklist of action items if you do not plan to follow the phases of development of Phase 2.


[Back to Top](#table-of-contents) | [Back to Parent](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/blob/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Phases.md)


## Postrequisites
﻿

- Clean and rebuild each project after making changes to ensure all changes are working as expected before starting a new phase.


[Back to Top](#table-of-contents) | [Back to Parent](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/blob/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Phases.md)



## Concomitants
﻿

- As you see more projects being created, pay close attention to the instructions for Git SubTree and Visual Studio Project References. Special considerations had to be made to ensure all projects can be cloned in an `all-in-one` project (e.g., `JSopX.OpenProjectX`) or by independent project isolation for a unique educational user experience not common in most projects.


[Back to Top](#table-of-contents) | [Back to Parent](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/blob/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Phases.md)


# Project Development Phase 2: Minimum Viable Refactor Product (MVRP)

The purpose of Project Development Steps in Phase 2 is to create a Minimum Viable Reactor Product (MVRP) to similuate a real-world case where the developers should be quickly getting rid of creating more proof-of-concept features. The Minimum Viable Product did its job. Most importantly, it has already outlived its purpose. It is time to start refactoring some of the code and processes created this far, and start thinking about focusing on tying in re-usable Web APIs, assets, and other object oriented programming design patterns and best practices you would expect in a Multi-Plaform, Multi-Stack, Enterprise-Leval Application.

The basic steps I am taking for this Phase is as follows:

1. **Add All Frontend Projects, Assets Projects & Web API to jSilvestri.com BETA v2025 Web API Demo Collection Solutions**:
   - Clone all projects and add them to the jSilvestri.com BETA v2025 Web API Demo Collection project for full access and testing of all projects in one, unified, location.

2. **Update Class Library**: Update ASP.NET Core Class Library project and solution parts we want to use across all applications, such as Constants, Enums, Helpers, etc.
   
3. **Update Web API Project**: Update ASP.NET Core Web API project and solution. This project will serve as the backend API that the frontend projects will communicate with.

4. **Update Shared Assets Project**: Update new ASP.NET Core project and solution that will handle common, static, assets and resources, shared across all applications. This project will serve as the resource project with all HTML, CSS, JS, Images and other creative all projects will use to carry the same theme, look and feel across applications.

5. **Setup Communication**:
   - Each frontend and backend project (_AngularJS_, _Vue_, _ReactJS_, _Blazor_, etc.) will make HTTP requests to the Web API project to fetch data or perform operations. For the first iteration of data, we will use some static weather data. 

6. **Configure Routes**:
   - We will define appropriate routes in our Web API project to handle incoming requests from the frontend projects.
   - We will implement controllers and actions to handle these routes and interact with our data layer.

7. **Web API Shared Models and Services**:
   - We will consider creating shared models and services that can be used across both the Web API project and the frontend projects. This will help in maintaining consistency and reducing duplication of code.

8. **Authentication and Authorization (Optional)**:
   - Implement authentication and authorization mechanisms in Web API project if required (final version should).

9. **Testing and Debugging**:
   - Test the communication between the frontend projects and the Web API project.
   - Debug any issues that arise during development.

10. **Deployment**:
    - Deploy the Web API project and frontend projects to the desired hosting environment. Ensure that all projects are configured correctly for production.

11. **Continuous Integration and Continuous Deployment (CI/CD)**:
    - Set up CI/CD pipelines to automate the build and deployment process for your solution.


[Back to Top](#table-of-contents) | [Back to Parent](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/blob/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Phases.md)



## In Conclusion

﻿

The `Phase 2: Minimum Viable Refactor Product (MVRP)` Phase is an important aspect of all applications being developed.


[Back to Top](#table-of-contents) | [Back to Parent](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/blob/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Phases.md)



---

##### [JSopX.com](https://www.jsopx.com/) | [Jason's Official Website](https://www.jsilvestri.com/) | [X](https://www.x.com/JasonSilvestri) | [LinkedIn](http://www.linkedin.com/in/JasonSilvestri) | [GitHub](https://github.com/JasonSilvestri) | [Gmail](mailto:therealjasonsilvestri@gmail.com) | [Phone : 508-851-9445](phoneto:508-851-9445)

###### Copyright © 2024 - All Rights Reserved by Jason Silvestri