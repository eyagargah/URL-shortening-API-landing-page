#ShortURL URL shortening API

## Table of contents

- [Overview](#overview)
  - [The project](#the-project)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Live Site URL](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Useful resources](#useful-resources)
- [Unit tests](#useful-resources)

## Overview
A landing page that integrates with the ShortUrl API to mainly shorten URLs [https://rapidapi.com/Walter678/api/shorturl9/]

### The project
This project provides a web interface for a URL shortening API, allowing users to input a long URL and receive a shortened version that can be used for sharing links. The landing page is designed to be user-friendly and intuitive, making it easy for users to quickly generate shortened URLs.


### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- Shorten any valid URL
- See a list of their shortened links, even after refreshing the browser
- Copy the shortened link to their clipboard in a single click
- Receive an error message when the `form` is submitted if:
- The `input` field is empty

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [https://github.com/eyagargah/URL-shortening-API-landing-page]


#### Live Site URL

The live site URL for the landing page is [https://eyagargah.github.io/URL-shortening-API-landing-page/home]. Users can access this URL to interact with the landing page, experience the URL shortening process, and explore its features firsthand.
### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Angular]


### Useful resources

- [Example resource 1](https://zeroesandones.medium.com/how-to-copy-text-to-clipboard-in-angular-e99c0feda501) - This helped me to copy selected short link to clipboard and paste it. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.syncfusion.com/blogs/post/host-angular-app-in-github-pages.aspx) - This helped me to host my project in github pages.

#### Unit Tests

The project includes a comprehensive suite of unit tests written using the Jasmine testing framework. These tests cover critical functionality within the application and ensure the reliability and functionality of the codebase. The unit testing framework, setup, and configuration are designed to provide thorough validation of the code, ensuring a robust and dependable platform.

### Testing Framework

We have utilized Jasmine, a behavior-driven development framework for testing JavaScript code. Jasmine provides a clean and intuitive syntax for defining and running tests, making it an ideal choice for our testing needs.

### Setup and Configuration

To run the unit tests locally, follow these steps:

1. Install Jasmine using npm:

npm install jasmine --save-dev


2. Configure the test environment and setup any necessary dependencies.

### Writing Tests

Our unit tests are organized into separate spec files and cover critical functionality within the application. Each test case follows the Jasmine syntax for assertions and expectations, ensuring thorough validation of our code.

### Running Tests

To run the unit tests, execute the following command:

npm test

This will trigger the Jasmine test runner and display the test results in the console.

### Coverage Reports

We also generate test coverage reports using Jasmine's built-in coverage tools. These reports provide insights into the percentage of code covered by our unit tests, helping us assess the overall quality of our test suite.

### Sample Code

Here's an example of a simple Jasmine test case:

```javascript
 it('should return short link', async ()=> {
    const url = 'https://www.google.com';
    const api = new ApiService()
    const result = await api.getShortLinks(url)
    const expectedResult = 'https://shorturl.ac/7arzr'
    expect(result).toBe(expectedResult)
  }) 

### Project Overview

The ShortURL API Landing Page project aims to provide users with a seamless and intuitive platform for generating shortened URLs. By integrating with the ShortURL API, the project addresses the need for quick and efficient URL shortening while offering a user-friendly interface.

#### Project Objectives

The primary objective of the project is to streamline the URL shortening process by leveraging the ShortURL API. This includes providing users with a simple and efficient way to shorten long URLs, copy the shortened links, and manage their shortened URLs effectively. The key features and benefits of using the ShortURL API include fast URL shortening, reliable link management, and seamless integration with existing workflows.

#### User Interaction

Upon visiting the landing page, users will be greeted with a clean and user-friendly interface. They can easily input any valid URL into the provided field and generate a shortened link with a single click. The landing page offers a step-by-step guide, allowing users to quickly copy the shortened link to their clipboard and view a list of their shortened links for easy reference.

#### API Integration

The landing page seamlessly integrates with the ShortURL API, leveraging its endpoints and functionalities to shorten URLs effectively. The integration process ensures that users can enjoy the benefits of the ShortURL API directly from the landing page, without the need for complex configurations or additional steps.

#### Error Handling

In the event of an error, the landing page provides clear and concise error messages to users. For instance, when the form is submitted with an empty input field, users will receive an immediate error message prompting them to enter a valid URL. This proactive error handling ensures a smooth user experience and reduces potential frustration.




