
<!-- START JSOPX NOVA DOCX HEADER
group: 'Phases'
isDraft: false
isProductionReady: true
toc: true
END JSOPX NOVA DOCX HEADER -->

# ﻿JSopX™ Open Project EXperiences : Project Development Phases

From the ﻿jSilvestri.com BETA v 2024 JSopX Open Project EXperiences Collection of Projects

> [!CAUTION]
> **This is a Static DRAFT:**
> 
> The content before you is a draft version of the document. It **should not** be considered **accurate**. In fact, drafts will often times be for different reasons, such as testing styles, content, etc. The content itself may have only been used as a placeholder, making sections, or even the entire document contain information not relative to this project.

## Overview

I will be following a basic set of phases as I develop all JSopX Projects, so we can ensure unique documentation to each project for each phase that outlines at least a basic outline. Conversely, you do not need to use Phases in your approach to development and if you do, I am sure they are different. This is totally fine. In the case of Phases, think more about the importance of each phase, and less about a step-by-step phase lifecycle you need to follow in order.
  
> [!CAUTION]
> **Phase 1:**
> 
> This project is currently in **Phase 1** of Development. It **should not** be considered **accurate** or a **release candidate**. In fact, it should be treated as simply reference material for the time being, due to the absolute bare minimum resources created, to satisfy a minimum viable product requirement in Phase 1 (by design). Conversely, Phase 2 is days away, and Phase 3 is only a week after that. Phase 3 Projects will be mature, and action-packed with features, assets, documentation and more!
> 
> Please see [Phase 1 (Current Phase): Minimum Viable Product (MVP)](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/blob/master/JSopX.BridgeTooFar/Docs/JSopX/Master/Phases/Phase-1-Minimum-Viable-Product-MVP.md) for more details.

## Table of Contents

1. [Overview](#overview)
2. [Prerequisites](#prerequisites)
3. [Corequisites](#corequisites)
4. [Postrequisites](#postrequisites)
5. [Concomitants](#concomitants)
6. [Project Development Phases](#project-development-phases)
   1. [Phase 1: (Current Phase): Minimum Viable Product (MVP)](#phase-1-current-phase-minimum-viable-product-mvp)
   2. [Phase 2: Minimum Viable Refactor Product (MVRP)](#phase-2-current-phase-minimum-viable-refactor-product-mvrp)
   3. [Phase 3: Advanced User Interface Connectivity and Re-Usability](#phase-3-advanced-user-interface-connectivity-and-reusability)
   4. [Phase 4: Implement Final Security Protocols, Deployment Strategies and More](#phase-4-implement-final-security-protocols-deployment-strategies-and-more)
8. [In Conclusion](#in-conclusion)

### Current Alerts

> [!IMPORTANT]
> This document is for **advanced users only**, and this Include outlines a sample `Current Alert`.


## Prerequisites

﻿

- Visual Studio 2022 or higher installed.
- Basic understanding of `.csproj` and `.targets` file structures.
- Existing JSopX projects (e.g., `JSopX.BridgeTooFar`, `JSopX.ClassLibrary`, `JSopX.WebAPI`, etc.).
- Installed .NET 8.0 SDK.
- Installed Node.js 20.14.0


[Back to Top](#table-of-contents)

## Corequisites

﻿

- Ensure you are pro-active in at least your own checklist of action items if you do not plan to follow the phases of development. Even setting up Jira, DevOps, or some basic ticket system is better than nothing.



[Back to Top](#table-of-contents)

## Postrequisites

﻿

- Clean and rebuild each project after making changes to ensure all changes are working as expected before starting a new phase.


[Back to Top](#table-of-contents)

## Concomitants

﻿

- You may need to update Git configurations to handle dependencies between projects. As they app grows, there will be updates to repositories and projects over all that require certain configurations you may or may not be familar with, such as using Git submodules or Git subtree, to ensure all projects can be cloned in an all-in-one project (e.g., `JSopX.OpenProjectX`) or by independent project isolation for a unique educational user experience not common in most projects.


[Back to Top](#table-of-contents)

# Project Development Phases
﻿

I will be following a basic set of phases as I develop all JSopX Projects. 

## Phase 1 (Current Phase): Minimum Viable Product (MVP)

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

## Phase 2: Minimum Viable Refactor Product (MVRP)

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


## Phase 3: Advanced User Interface Connectivity and Re-Usability

The purpose of Project Development Steps in Phase 3 is to dig in hard with some of the most advanced aspects of all parts of each project, across the entire project suite. Whatever base assets should be included. Primary Web API should be included. All Project Referenced should be configured. Even the start of Security Protocols should be developed hand-and-hand with areas of the projects that require it.

The basic steps I am taking for this Phase is as follows:

1. **Update Class Library**: Update ASP.NET Core Class Library project and solution parts we want to use across all applications, such as Constants, Enums, Helpers, etc.
   
2. **Update Web API Project**: Update ASP.NET Core Web API project and solution. This project will serve as the backend API that the frontend projects will communicate with.

3. **Update Final Shared Resources Project**: Update new ASP.NET Core project and solution that will handle common, static, assets and resources, shared across all applications. This project will serve as the resource project with all HTML, CSS, JS, Images and other creative all projects will use to carry the same theme, look and feel across applications.

4. **Setup Communication**:
   - Each frontend project (_AngularJS_, _Vue_, _ReactJS_, _Blazor_, etc.) will make HTTP requests to the Web API project to fetch data or perform operations. The final version will access real-time weather data from one or more weather APIs available today.
   - Ensure that CORS (_Cross-Origin Resource Sharing_) is properly configured in the Web API project to allow requests from the frontend projects.

5. **Configure Routes**:
   - We will define appropriate routes in our Web API project to handle incoming requests from the frontend projects.
   - We will implement controllers and actions to handle these routes and interact with our data layer.

6. **Shared Models and Services**:
   - We will consider creating shared models and services in their own project, as opposed to housing them in the Web API project that can be used across both the Web API project and the frontend projects. This will help in maintaining consistency and reducing duplication of code.
   - An eventual version of this approach will leverage a structure where we have specific repositories for each service along with a generic repository to handle common CRUD operations, following a design pattern like the Repository Pattern.

7. **Authentication and Authorization (Optional)**:
   - We will use JWT (_JSON Web Tokens_) for authentication and role-based authorization.

8. **Testing and Debugging**:
   - Test the communication between the frontend projects and the Web API project.
   - Debug any issues that arise during development.

9. **Deployment**:
    - Deploy the Web API project and frontend projects to the desired hosting environment. Ensure that all projects are configured correctly for production.

10. **Continuous Integration and Continuous Deployment (CI/CD)**:
    - Set up CI/CD pipelines to automate the build and deployment process for your solution.


## Phase 4: Implement Final Security Protocols, Deployment Strategies and More

The purpose of Project Development Steps in Phase 4 is to Implement Final Security Protocols, Deployment Strategies and any other major aspects of the applications you have not yet handled. This isn't a little pat on the back and lets do a good job. If you yet implemented or close to finishing Final Security Protocols you should be worried, along with any other related security design patterns and best practices you may have missed. I cannot stress enough about the importance of taking care of these things before your first release candidate.

The basic steps I am taking for this Phase is as follows:

1. **Update Final Class Library**: Update Final ASP.NET Core Class Library project and solution parts we want to use across all applications, such as Constants, Enums, Helpers, etc.
   
2. **Update Final Web API Project**: Update ASP.NET Core Web API project and solution. This project will serve as the backend API that the frontend projects will communicate with.

3. **Update Final Shared Resources Project**: Update new ASP.NET Core project and solution that will handle common, static, assets and resources, shared across all applications. This project will serve as the resource project with all HTML, CSS, JS, Images and other creative all projects will use to carry the same theme, look and feel across applications.

4. **Implement Final Security Protocols**:
   - Each frontend project (_AngularJS_, _Vue_, _ReactJS_, _Blazor_, etc.) will need several security protocols implemented before final release. 
   -- Add custom validation client-side logic
   -- Add custom validation side-side logic
   -- Add custom validators to models
   -- Secure binding objects
   -- Update any shared objects of a sensitive nature to utilized sealed and internal objects over public defaults.
   
5. **Configure Routes**:
   - We will define appropriate routes in our Web API project to handle incoming requests from the frontend projects.
   - We will implement controllers and actions to handle these routes and interact with our data layer.

6. **Shared Models and Services**:
   - We will consider creating shared models and services in their own project, as opposed to housing them in the Web API project that can be used across both the Web API project and the frontend projects. This will help in maintaining consistency and reducing duplication of code.
   - An eventual version of this approach will leverage a structure where we have specific repositories for each service along with a generic repository to handle common CRUD operations, following a design pattern like the Repository Pattern.

7. **Authentication and Authorization (Optional)**:
   - We will use JWT (_JSON Web Tokens_) for authentication and role-based authorization.

8. **Testing and Debugging**:
   - Test the communication between the frontend projects and the Web API project.
   - Debug any issues that arise during development.

9. **Deployment**:
    - Deploy the Web API project and frontend projects to the desired hosting environment. Ensure that all projects are configured correctly for production.

10. **Continuous Integration and Continuous Deployment (CI/CD)**:
    - Set up CI/CD pipelines to automate the build and deployment process for your solution.

## In Conclusion

﻿

These Phases will undoutably grow, include better breakdowns of business requirements, etc.


[Back to Top](#table-of-contents)


---

##### [JSopX.com](https://www.jsopx.com/) | [Jason's Official Website](https://www.jsilvestri.com/) | [X](https://www.x.com/JasonSilvestri) | [LinkedIn](http://www.linkedin.com/in/JasonSilvestri) | [GitHub](https://github.com/JasonSilvestri) | [Gmail](mailto:therealjasonsilvestri@gmail.com) | [Phone : 508-851-9445](phoneto:508-851-9445)

###### Copyright © 2024 - All Rights Reserved by Jason Silvestri