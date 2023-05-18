# do-sls-typescript

A typescript template project for use deploying DigitalOcean Serverless functions targetting the NodeJS runtime. This is intended as a starting point for new Typescript projects so customizing the template is encouraged.

# Requirements

1. NodeJS 18
2. doctl

# Usage 

1. Clone or Fork the repo. 
2. Install dependencies in the root directory.

```
$ npm install
```

3. Run the tests

```
$ npm run test
```

4. Package the project for deployment

```
$ npm run deploy:prepare
```

5. Connect your workspace and deploy the project

```
$ doctl serverless connect
$ npm run deploy
```

# License

```
Copyright 2023 Nish Tahir

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```
