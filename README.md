# AT-take-home-test

## Brief
Create a simple product search page like the one below using whatever language/tech you feel is best and fetching the content from our API.

## Time Frame
I was given 2 days to complete this task. From Wednesday 8th February until Friday 10th February. 

## Technologies Used
Front End:
- React.js
- JavaScript
- CSS
- HTML
- NPM

Version Control:
- Git

## Planning
Since I was given a specific set of instructions and specific deliverables that I needed to meet, along with a general wireframe, I decided that I should start by thinking about which technologies I could employ to deliver an MVP. I felt comfortable with React so thats what I proceeded with. 
I then planned out how I should manage the stages of this project as it was relatively small however given the timeframe, I needed to work with haste. Hence the first thing I did was break everything down into smaller chunks. 
- My first thoughts was about how I would structure the app itself. Thinking about what components I would need. What pages would be appropriate to use here. 
- I was then going to focus on successfully fetching from the API and console.log the response.
- Once I successfully managed to do this I would think about how I was going to display the data. 
- Once that was done, I thought it would be appropriate to think about how the search functionality would work in this project and how it would work alongside the fetch. 
- Following that, I then thought about pagination and dealing with the data from the API. 

Once everything was working then I would focus on styling if there was time. 

## Wins, Bugs, and Future Improvements
- I successfully managed to meet all the requirements and deliverables. I was also able to complete it all in good time. 
- I think my code is easily readable and one could understand what was happening and where through the use of comments. This was not something I had heavily used before however I thought it would enhance my skills as a software engineer as it is good practice. 
- I was able to break down the project into small chunks that I could work on 1 by 1. I was very successful in this as the process was quite seamless and I ran into very few bugs which consumed a lot of time.

- However following on from the last point, there is a bug which is that users are able to spam click the load more button which could potentially cause the app to crash. 

- Future improvements would be to make the load more button disabled when there is an ongoing fetch request due to a users previous click
- Another thing which I thought could be improved upon is that when there is no image available, it would have been nice to have a suitable placeholder. 
- Finally, sometimes when a user searches for a specific term, the app takes a while to display the results. 

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)