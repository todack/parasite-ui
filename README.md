<h1 align="center"> Parasite UI </h1> <br/>
<p align="center">
    <a href="https://parasite.todack.com">
        <img alt="Parasite UI" title="Parasite UI" src="" width="450">
    </a>
</p>

<p align="center">
    Web Interface for Parasite API
</p>

### Philosophy

> The data may not contain the answer. The combination of some data
> and an aching desire for an answer does not ensure that a resonable 
> answer can be extracted from a given body of data.
>
> By John Tukey, Father of modern exploratory data analysis.

## Table of Contents

- [Overview](#overview)
- [Services](#services)
- [Feedback](#feedback)
- [Contribution](#contribution)
- [References](#references)

## Overview

[![Build Status](https://travis-ci.com/todack/parasite-ui.svg?branch=main)](https://travis-ci.com/todack/parasite-ui)
![Website](https://img.shields.io/website?down_color=red&down_message=offline&up_color=green&up_message=online&url=http%3A%2F%2Fparasite.todack.com%2F)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)](http://makeapullrequest.com)
![GitHub](https://img.shields.io/github/license/todack/parasite-ui)

Parasite UI is a web interface to access and manage the [Parasite API](https://github.com/todack/parasite). It provides graphical means to access a wide range of machine learning models and also provides support for managing the API quotas and call history.

### Features

- Modern, intuitive and easy to use interface.
- Access to variety of Machine Learning APIs.
- Inference with custom metrics and cross-comparison.
- Visual results through beautiful graphs and charts.
- Many more...

## Services

| Service Name | Status | Link |
|--------------|--------|------|
| Image Classifier | Inactive | http://parasite.todack.com |
| Language Translation | Inactive | http://parasite.todack.com |

## Feedback

- For bugs, complaints and issues, follow the [Issue Template]() and report [here](https://github.com/todack/parasite-ui/issues).
- For questions and feature requests, create a new discussion [here]().
- If you find an issue, pull-request or discussion useful, upvote it.
- For any other concerns reach us at parasite@todack.com.

## Contribution

If, for some strange reason, you wish to contribute to this project then follow the guidelines below to locally setup this project.

### Prerequisites
- `node-14` and `npm`. If you don't have it installed on your system, follow the guide [here](https://nodejs.org/en/download/).
- Fundamentals of web programming using `HTML`, `CSS` and `Javascript`.
- Basics of `VueJS`, `Vuex`, `Vue-Router`, `Vuetify`. All of these have great documentation to get started.
 
### Local Setup
- Fork the repo to your preferred account. Look for a `fork` button on the top right corner of the github repo page.
- Clone the forked repo.
```sh
git clone https://github.com/<username>/parasite-ui.git 
```
- Install project dependencies.
```sh
cd parasite-ui
npm install
```
- Run the project.
```sh
npm run serve
```

### Workflow

The follwing workflow is recommended to contribute to this project. Follow each step carefully.

- Create a topic branch.
```sh
git checkout -b <topic-name>
```
- Make changes and run tests to check if it breaks anything.
```sh
npm run test:unit
```
- If nothing breaks, commit the changes.
```sh
git commit -a -m "descriptive message"
```
- Push the changes to GitHub repo.
```sh
git push origin <topic-name>
```
- Finally, check for the `pull-request` option on GitHub and submit with proper details.

For a more descriptive guide follow the [link](https://git-scm.com/book/en/v2/GitHub-Contributing-to-a-Project).

## References
- [TODO] Add research papers and relevant examples.
