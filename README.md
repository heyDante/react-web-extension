## React Web Extension

Creating web extensions with react.


### Clone the repository & `cd` into it

`git clone https://github.com/heyDante/react-web-extension.git`

`cd react-web-extension`


### Install npm packages

`npm install`


### Bundle with webpack

`npm run compile:jsx-prod`

_All the files will be bundled in the /dist directory_

### Running extension
1. Go to `chrome://extensions`
2. Turn on **developer mode**
3. Click **Load unpacked**
4. Point to the `/dist` folder and load it.
5. Click the extension icon on the toolbar to make it work.