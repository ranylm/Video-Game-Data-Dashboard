# [Link to Netlify](https://admirable-arithmetic-47f34c.netlify.app/)

## Design approach

THe navigation is handled by using a nav bar made using react-router and a main content area that all page components are rendered to. Redux is used for caching and persisting data across rerenders of different pages. Some data is also stored in redux to monitor stats and handling the adding and removal of items from a favorites list. @formkit/auto-animate was used to provide easy animation to elements that were added/removed/moved with their position backed by redux. Data from several third party APIs were based through a generic article component that handled data hierarchy differences.

## Technologies Used

- React
- React-Router
- React-Redux
- React-dnd
- Typescript
- @formkit/auto-animate
- Tailwind
- Radix-ui

## To be Implemented

- Multi-list functionality
- Creation and deletion of list
- Support multi-data types for lists, and data classification
- Enhanced key indexing for all data types

# Installation

1. Clone the repo `git clone https://github.com/ranylm/Video-Game-Data-Dashboard.git`
2. Install dependencies

```
cd [folder path]
npm install
```

## Start development server

`npm run dev`

## Build site

`npm run build`
