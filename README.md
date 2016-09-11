Coding exercise. A simple CRUD style React+Redux application with Google Custom Search Engine integration.

## Installation
Edit the `src/config.js` file to set the **Product API endpoint**, **Google Search Engine ID**, and **Google API Key**. [Read here](https://developers.google.com/custom-search/json-api/v1/overview#prerequisites) on how to set up the latter.
```
npm install
npm start
```


## Tech stack
* [Google Custom Search JSON API](https://developers.google.com/custom-search/json-api/v1/overview) to find product images
* [Create React App](https://github.com/facebookincubator/create-react-app) to quickly bootstrap the project and avoid wasting half a day configuring WebPack
* [React](https://facebook.github.io/react/)
* [Redux](https://github.com/reactjs/redux) to manage state
* [redux-create-reducer](https://github.com/kolodny/redux-create-reducer) to reduce verbosity
* [redux-thunk](https://github.com/gaearon/redux-thunk)
* [fetch-mock](https://github.com/wheresrhys/fetch-mock)
* [Bootstrap](http://getbootstrap.com/)

## TODO
I spent 8-10 hours on this application and obviously there is plenty of room for improvement:
* ImmutableJS & performance optimizations
* Store selected product in Redux Store
* Ask if user wants to cancel the changes when closing the product edit view
* Show feedback message when product has been saved or failed to save
* Cache photo search results to localStorage to avoid unnecessary trips to Google Custom Search API. The API provides only 100 search queries per day for free. See [pricing details](https://developers.google.com/custom-search/json-api/v1/overview#pricing)
