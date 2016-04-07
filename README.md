Clone the angular-ui-seed repository using [git][git]:

```
git clone https://github.com/dearlordlt/npc-index.git
cd npc-ondex
```

### Install Dependencies

```
npm install
```

* `bower install` will be called automatically

* `node_modules` - contains the npm packages for the tools we need
* `app/bower_components` - contains the angular framework files

### Run the Application

```
npm start
```

Now browse to the app at `http://localhost:8000/app/index.html`.


## Testing

There are two kinds of tests in the angular-ui-seed application: Unit tests and End to End tests.

### Running Unit Tests

```
npm test
```

```
npm run test-single-run
```


### End to end testing

* the configuration is found at `test/protractor-conf.js`
* the end-to-end tests are found in `test/e2e/`

```
npm start
```

```
npm run update-webdriver
```

```
npm run protractor
```

## Updating Angular

```
npm update
```

```
bower update
```

### Running the App during Development

```
sudo npm install -g http-server
```

```
http-server
```