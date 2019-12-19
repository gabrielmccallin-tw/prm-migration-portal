# Migration Portal Front End
Make sure you are in the `/migration-portal` folder.

### Prerequisites
* Node 12.x

### Set up
```
npm install
```

### Run application
```
npm start
```

Application runs at `http://localhost:3000/prm-migration-portal`, because the site is deployed to GitHub pages at `https://nhsconnect.github.io/prm-migration-portal`

### Switch between API domains
- By default the front end will not make network calls, all data is hardcoded.
- To call an API running at `http://localhost:5001` append `?api=stub`
- To call the production API running at `http://deployed.com/migration:5000` append `?api=prod`

Change the API domains in `/src/env.js`, the production URL above is not real at the moment.

### Running the tests

Run the tests in watch mode
```
npm test
```

### Running accessibility tests
```
npm run pa11y-ci
```

We are using pa11y for accessibility testing. 
As the tests are currently being run on localhost pages, make sure you are running the app locally before running the tests. 
To run the tests, use the following command:


If a new page needs testing, add it to the array of URLs in the `.pa11yci.json` file.

### Deploy site to GitHub Pages
```
npm run deploy
```

Will deploy to: `https://nhsconnect.github.io/prm-migration-portal`