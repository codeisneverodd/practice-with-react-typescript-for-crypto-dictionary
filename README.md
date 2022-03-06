# Coin Dictionary

## Table of Contents

- [Languages](#languages)
- [Frameworks](#frameworks)
- [APIs](#apis)
    - [coinpaprika](#coinpaprika)
- [Guides](#guides)
    - [Make Skeleton Site](#make-skeleton-site)
        - [Result of Skeleton](#result-of-skeleton)

    - [Color the skeletons](#color-the-skeletons)
        - [Result of Coloring](#result-of-coloring)

    - [Deploy](#deploy)
        - [Result of Deployment](#result-of-deployment)

## You can check result


[Here: ![favicon-32x32](https://user-images.githubusercontent.com/54318460/156914742-2680d7bf-16d0-411b-8b5a-b99aef135b63.png)](https://codeisneverodd.github.io/practice-with-react-typescript-for-crypto-dictionary/)

## Languages

[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white)](https://www.typescriptlang.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=black)](https://en.wikipedia.org/wiki/JavaScript)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white)](https://en.wikipedia.org/wiki/HTML5)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white)](https://en.wikipedia.org/wiki/CSS)

## Frameworks

[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black)](https://reactjs.org/)

## Notable Packages

[![styled-components](https://img.shields.io/badge/ReactQuery-FF4154?style=for-the-badge&logo=ReactQuery&logoColor=white)](https://styled-components.com/)
[![React Query](https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)](https://react-query.tanstack.com/)
[![ApexCharts.js](https://img.shields.io/badge/ApexCharts.js-0F7AEB?style=for-the-badge&logo=ApexCharts.js&logoColor=white)](https://apexcharts.com/)
[![ReactHelmet](https://img.shields.io/badge/ReactHelmet-2FBCD9?style=for-the-badge&logo=ApexCharts.js&logoColor=white)](https://apexcharts.com/)

## APIs

### coinpaprika

[![coinpaprika](https://tva1.sinaimg.cn/large/e6c9d24egy1gzxsnep080j213b075mxm.jpg)](https://api.coinpaprika.com/)

- Purpose: Fetch cryptocurrency data
- Guide: [api.coinpaprika.com](https://api.coinpaprika.com/)

## Guides

### Make Skeleton Site

1. Initialize project using Create React App, `npx create-react-app my-app --template typescript`.
2. Erase useless files, in my case I delete all the files except `App.tsx` and `index.tsx`.
3. Make `api.ts` file and define api functions.
3. Install react-query via npm,  `npm i react-query`.
3. Make `routes` folder.
3. Make `Home.tsx` file in `routes` folder and fetch all data you need by using `api.ts` and `react-query`.
3. Make `componets` folder.
3. Make `Coin.tsx` file in `components` folder and define the `Coin` component using props from `Home.tsx`.
3. Make `Detail.tsx` file in `routes` folder and fetch all data you need by using `api.ts` and `react-query`.
3. Install react-router-dom via npm, `npm i react-router-dom`.
3. Make `Router.tsx` file and define routes for `Home.tsx` and `Detail.tsx`.
3. Add `Router` component to `App.tsx` by importing it from `Router.tsx`.
3. Add `useParams` in `Detail.tsx` file to get `coinId` parameter from url.
3. Install apexcharts.js via npm,  `npm install apexcharts --save`.
3. Make `Chart.tsx`  file in `routes` folder and fetch all data you need by using `api.ts` and `react-query`.
3. Link `Coin` compenents in `Home.tsx` to navigate to  `Detail.tsx` .
3. Make `Back` Components in `Detail.tsx` to navigate to `Home.tsx`.
3. Make `MoreDetails` Components in `Detail.tsx`.
3. Make `Tab` in `Detail.tsx`  show and hide `Chart.tsx`  and `MoreDetails.tsx`. Done.

#### Result of Skeleton

> Please dont' care about the coloring things in this stage, just fetch and show data.

![image-20220306153432689](https://tva1.sinaimg.cn/large/e6c9d24egy1h005hmch6tj20u00w5jta.jpg)

### Color the skeletons

1. Design it with design tools or something, in my case Figma.

![image-20220306153945664](https://tva1.sinaimg.cn/large/e6c9d24egy1h005n295o2j20w70u0dix.jpg)

2. Visit [Google Fonts](https://fonts.google.com/) and select the fonts you want to use. Copy the `<link>` to embed.
3. Install react-helmet via npm,  `npm install --save react-helmet`.
4. Add `Helmet` component above `Router` component and embed the link that we copied in step 2.
5. Install styled-compents via npm,  `npm install --save styled-components`.
6. Make `styles` folder.
7. Remove default settings in CSS. You can do this in various ways. In my case, define `createGlobalStyle` in  `App.tsx`
   and copy and paste the code in [here](https://meyerweb.com/eric/tools/css/reset/).
8. Make `styled.d.ts` file in `styles` folder and declare module `'styled-components'` and add interface `DefaultTheme`.
9. Make `theme.ts` file in `styles` folder and define colors in themes using `DefaultTheme`  you want to use. In my
   case, I defined `darkTheme` and `lightTheme` .
10. Make `global.d.ts` file in `src` folder and declare modules to use image files.
11. Show off your CSS skills! Make styled components in the files you need. If you have to make a identical styled
    components in different files, make `styles.tsx` file in `styles` folder, put them there, and import them where you
    need.

#### Result of Coloring

> Please don't just copy my design or code. That doesn't help you at all.

![스크린샷 2022-03-06 오후 4.07.28](https://tva1.sinaimg.cn/large/e6c9d24egy1h006hq20kfj20u00uatac.jpg)

![스크린샷 2022-03-06 오후 4.07.48](https://tva1.sinaimg.cn/large/e6c9d24egy1h006hwjr57j20u00uytac.jpg)

![스크린샷 2022-03-06 오후 4.08.30](https://tva1.sinaimg.cn/large/e6c9d24egy1h006i3y0x2j21h10u0jwi.jpg)

![스크린샷 2022-03-06 오후 4.08.48](https://tva1.sinaimg.cn/large/e6c9d24egy1h006i9j6toj21gs0u0wg8.jpg)

### Deploy

1. You can deploy your website in various ways. In my case, I deployed by publishing files to `gh-pages` branch on
   GitHub.

2. Make Repository on GitHub and push all the files.

3. Install gh-pages via npm,  `npm install gh-pages --save-dev`.

4. Go to `package.json`  and add `"homepage"`  right above the last curly brace.
   Use `https://user-id-here.github.io/repository-name-here`

1. ```json
      },
        "homepage": "https://codeisneverodd.github.io/practice-with-react-typescript-for-crypto-dictionary/"
      }
      ```

5. Add `"deploy"` and `"predeploy"` to `script` in `package.json`.

1. ```json
      "scripts": {
          "deploy": "gh-pages -d build",
          "predeploy": "npm run build"
        },
      ```

6. Finish deployment by entering `npm run deploy` in the console.

#### Result of Deployment

![IMG_6770](https://tva1.sinaimg.cn/large/e6c9d24egy1h007h4jswwj20u01szgp7.jpg)

![IMG_6771](https://tva1.sinaimg.cn/large/e6c9d24egy1h007h33r7fj20u01sz0wz.jpg)

![IMG_6772](https://tva1.sinaimg.cn/large/e6c9d24egy1h007h103g4j20u01szjvw.jpg)






