# Music Player Widget
### Recruitment task for a Junior Web Developer role at HRtec

This is my approach of building "clickable" music player widget from provided PSD project.
<br/><br/><br/>

### Technologies and workflow
The final product is built using HTML, CSS and vanilla JavaScript (ES6). 

The Javascript code is splitted into appropriate components reflecting functionalities they maintaining. To provide modules integrity and compatibility of ES6 code webpack is used. It transpiles code and creates bundle .js + .map (for debugging purposes) files from provided sources. Only one external library ([perfect-scrollbar](https://github.com/utatti/perfect-scrollbar)) is used to provide a styled scrollbar on playlist view, as Mozilla doesn't support webkit properties in this case. 

Styles are written based on BEM methodology using SASS. Transpiling process is handled similar way to JavaScript part. There are several .sass module files located in /src directory which are converted to final style bundle in /dist directory. Compatibility prefixes are automatically injected to bundle. 

As mentioned above, webpack is used to process all the JavaScript code (via Babel loader), SASS styling (css-loader, postcss-loader, sass-loader) and also resources like images (image-webpack-loader) and fonts (url-loader).
<br/><br/>
### Working product
Working demo of the app can be found [here](https://damianszocik.github.io/HRtec_MusicPlayer_vanillaJS/)
<br/><br/>
### Development
To start developing the app there are 3 simple steps to follow:

* download and install node.js, npm and git client if you don't have them installed already. 
* clone the repository by typing in the command line:
```shell
git clone https://github.com/damianszocik/HRtec_MusicPlayer_vanillaJS.git
```
* install all needed dependencies:
```shell
npm install
```
