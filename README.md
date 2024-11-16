<a id="readme-top"></a>
<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#structure">Project Structure</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project
This project involves automating "Learn Automation Course" website. An user can sign-up with registration page and will be able to enroll to the courses. 

As part of the automation project, playwright automation framework along with javascript has been used to automate the tests.
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Built With

Below frameworks have been used in this project

* [![Node][Node.js]][Node-url]
* [![PlayWright][Playwright.js]][Playwright-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Getting Started

Please follow these steps.

### Prerequisites

1. [NodeJs installation](https://nodejs.org/en/download/package-manager)
2. Add node in PATH variable
3. Check successful node installation
   ```sh
   node -v
   ```
4. Check successful npm installation
   ```sh
   npm -v
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Usage

1. Clone the Repository
```sh
git clone https://github.com/offsecdawn/online_tutorial.git
cd online_tutorial
```

2. Install Project Dependencies
```sh
npm install
```

3. Install PlayWright Browsers
```sh
npx playwright install
```

4. Run Automation Tests
```sh
npx playwright test --workers=1
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Project Structure

* `tests` folder contains all test execution files
* `page-objects` folder contains all page objects(locators&event functions) files
* `constants` folder contains all global constants files
* `utilities` folder contains user data files
* `.github` folder contains github action

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contact

[![LinkedIn][linkedin-shield]][linkedin-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/arthiyadevi-thiruvenkadam/
[forks-shield]: https://img.shields.io/github/forks/offsecdawn/online_tutorial.svg?style=for-the-badge
[forks-url]: https://github.com/offsecdawn/online_tutorial/network/members
[stars-shield]: https://img.shields.io/github/stars/offsecdawn/online_tutorial.svg?style=for-the-badge
[stars-url]: https://github.com/offsecdawn/online_tutorial/stargazers
[issues-shield]: https://img.shields.io/github/issues/offsecdawn/online_tutorial.svg?style=for-the-badge
[issues-url]: https://github.com/offsecdawn/online_tutorial/issues
[Playwright.js]: https://img.shields.io/badge/Playwright-end_to_end_tests-blue
[Playwright-url]: https://playwright.dev/
[Node.js]: https://img.shields.io/badge/Node.js-339933?logo=Node.js&logoColor=white
[Node-url]: https://nodejs.org/en% 