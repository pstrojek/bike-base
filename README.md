# BikeBase

App created for a coding assignment using bikeindex.org API

## Before starting

Make sure you have correct Node.js version. Currently for angular 17.1.2 you need to have Node.js ^18.13.0 or ^20.9.0

## To start the app

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## My work process

- Research and Prototyping
  - Checking acceptance criteria
  - Trying the api (https://bikeindex.org/documentation/api_v3)
  - Trying potential libraries
- Implementation
- Fixes and improvements
- Making sure the acceptance criteria are meet

## Libraries I choose for this project

In bigger production projects I prefer building custom UI component library according to project requirements and possibly design system, but in this small project building with ready ui libs was better option to have good ui experience and fast development.

- Angular material
  - Good autocomplete component
  - Most popular for angular
  - Fast development
- Tailwind
  - Good for consistency with padding margins and all the sizes
  - Mobile first development
  - Fast development

## Limitations

- Currently city suggestions includes bigger cities in europe, normally this could be moved to an API that dynamically gives you suggestions of cities from the entire globe.
- Currently after search you get 25 items and that's it. Ideally we should have "Load more" button or pagination

## Out of scope things I would normally do

- Replace Karma with Jest
- Add e2e (Cypress)
- Write more unit tests
- Investigate if we need a server side rendering
