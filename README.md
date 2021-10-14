# GitHub Organizations
## How to use
### Locally
1. From the project root, open two terminals
2. Run `npm run start-server` to kick off the express server on Port `3001`. (Note: Nodemon is used by default. Switch the `start-server` script to `node` if `nodemon` is not desired)
3. Run `npm run start-react` to kick off the react dev server on Port `3000`

### Hosted
[Heroku link](https://schapm16-react-practice.herokuapp.com/)

## Implementation Notes
### Why the heck is there an Express Server?
1. I do not get to write back-end code at my day job
2. I knew that each page was going to need data from at least two GitHub endpoints. I wanted to perform the data aggregation outside of the Client, because the Client should not have to worry about that imho.

### Create-React-App?
1. Yep! I used it. I have configured webpack before...but that seemed unnecessary for this exercise.

### Axios vs Node-fetch on the server?
1. Node-fetch has been converted to be only an `esmodule`. I'm on a "pre-esmodule" version of Node at work. I did not want to mess with configuring the back-end to support `esmodule` for this exercise... It is a bummer I have two different syntaxes for front-end/back-end HTTP work.

### React Router DOM
1. I think it is probably heavy handed for something this small -- but it's very convenient.

## What I would have done differently
### GitHub API rate limiting got me good!
Unauthenticated requests are limited to 60/hour. The home page of the app makes `11` calls and each view of the organization-detail page makes `3`.  Response caching would help to some extent... but I really would need authenticated requests to make this app useable. Click sparingly!

### Rendering Delay and Animations
1. I really wanted the cards on the homepage to sequentally pop in.
2. I would ideally like to display some kind of loading animation on both pages to hold off rendering my views until API data has been aggregated.

### Infinite scrolling on mobile devices
1. On the `Home` page, I would incrementally load each chunk of paginated data based on scroll position.

### Error handling
1. I would fully protect the front-end/back-end from failed GitHub requests, missing data properties or incorrect requests.
2. I would create front-end messaging to let the user know when something went wrong.

### ADA Compliance
1. The app satifies several ADA topics: tabbable active elements with visual focus indication, `aria-label`, `alt` text. However, there are bigger considerations with SPAs that I still have to learn. Do react components need to announce to screen readers that they have been rendered because the HTML is not static?

### Wrote Tests & Incorporated Mocking
1) GitHub is probably annoyed with me. Once the app got more complicated, I hit the rate limit frequently. I did incorporate some simple data mocks so that I could keep working on the front-end -- I did not commit those though.

### React Components
1. Need reusable components!
2. I was in a mad dash to complete `OrganizationDetail` before the deadline. I'd refactor that one for sure.
3. I like to compose my components at the highest level possible. `Home` has a nested component architecture going on (ie. `Home` > `RecursiveCardList` > `Card`). Ideally, I'd like all the components used on `Home` to be seen inside the code of the `Home` component so that it's easy to follow what's actually happening.

### I would have ... Finished!
The pages are not complete from a navigation, content and user experience standpoint. They are more widgets than pages at this point. :)
## What I liked!
### CSS Grid
I've never used CSS grid before! I'm typically a flexbox or rows/columns guy. Grid is super powerful and I will definitely be digging into it more.

### Separation of Concerns
I did a good job of keeping server routes, API calls (from the front-end and back-end) and views separate from a file structure standpoint. For example, there is not a lot of noise in the React components concerning hitting the right endpoint on my serve.

### React Hooks
This is the first time I used React Hooks beyond minor tinkering.  Functional components with Hooks look funny, but it is growing on me.