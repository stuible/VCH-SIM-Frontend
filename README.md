<div align="center">

<img src="assets/image/logos/sim-light.svg" alt="VCH Simulation" width="300"/>

<br/>
<br/>
The frontend for VCH's Simulation Educational Site written in Nuxt.js
<br/>
<a href="https://simulation.vchlearn.ca/">https://simulation.vchlearn.ca/</a>
</div>

#

## How to update content
This frontend displays the data stored in the backend:

https://admin.simulation.vchlearn.ca

#### 🎬 Update / Add Videos
* Login to admin panel
* Go to 'Collections' > 'Video'
* Either add a new entry or modify an existing video entry

#### 🔗 Update / Add Course Registration Links
* Login to admin panel
* Go to 'Singletons' > 'Class Registration List'
* Either scroll to the bottom and click 'add item' or modify an existing course

#### ❓ Edit Survey Questions (that appear below each video page)
* Login to admin panel
* Go to 'Singletons' > 'Survey Questions'
* Edit any of the 4 survey questions

#### 📊 View Survey Results
* Login to admin panel
* Go to 'Forms' > 'Survey' (Make sure to click the icon and not the word survey because of some strange bug in the CMS)
* See what people think about the videos

#### 🔰 Export Survey Results
* Login to admin panel
* Go to 'Forms'
* Hover over the cog on the 'Survey' card and click 'Export entries' This will download a json file with all the survey results


## Local Dev Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev
```

## Deploy 
If you need to update to currently deployed version of the front-end, SSH into the VCHLearn Server: 

``` bash
# Navigate to the simulation directory
$ cd simulation

# Pull the latest version from GIT
$ git pull

# Rebuild the app
$ npm run build

# Restart the node server
$ pm2 restart all
```
## Troubleshooting
If anything has broken with the simulation site, ensure:
#### 1. The backend is up: https://admin.simulation.vchlearn.ca/
#### 2. The nodeJS server is up (ssh into the server) and run:
``` bash
# View status of all nodeJS apps
$ pm2 monit

# If [0] npm is not listed in the process list, exit out of the screen (Ctrl + C) and run:
$ pm2 restart all

```


## How I setup nodeJS on an apache server
It's hacky but it works: Using .htacess to create a reverse proxy to my node server (running on port 3000)

If this has to be done in the future add this to your .htaccess file:
``` apache
RewriteEngine On 
# Enforce HTTPS
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Reverse Proxy to port 3000
RewriteRule ^(.*)$ http://127.0.0.1:3000/$1 [P,L] 
RewriteRule ^$ http://127.0.0.1:3000/ [P,L] 
DirectoryIndex disabled
RewriteEngine On

```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).

