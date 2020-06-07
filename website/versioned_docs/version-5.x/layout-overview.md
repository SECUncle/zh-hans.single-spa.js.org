---
id: layout-overview
title: Layout Engine
sidebar_label: Overview
---

## Introduction

[Github repository](https://github.com/single-spa/single-spa-layout/)

The `single-spa-layout` npm package is an optional add-on to single-spa. The layout engine provides a routing API that controls your top level routes, applications, and dom elements. Using single-spa-layout makes it easier to accomplish the following:

- DOM placement and ordering of applications.
- Loading UIs when applications are downloaded.
- Default routes for Not Found / 404 pages.
- Transitions between routes (implementation pending).

The layout engine performs two major tasks:

1. Generate [single-spa registration config](./api#configuration-object) from an HTML Element and/or JSON object.
1. Listen to [routing events](./api#events) to ensure that all DOM elements are laid out correctly before the single-spa applications are mounted.

`single-spa-layout` is 3.2kb gzipped (9kb ungzipped).

## Installation

You only need to install the layout engine into your [root config](./configuration) (not in any other application).

```sh
npm install --save single-spa-layout@beta

# or
yarn add single-spa-layout@beta
```

### Project status

`single-spa-layout` is new and currently released under the `beta` dist-tag on npm. We are gathering feedback and improving the layout engine in preparation for a stable release. Although we do not expect the layout engine to change drastically, we do not recommend using it in a production setting until it is released as stable.

### Browser support

`single-spa-layout` works in all browsers supported by single-spa, including IE11.

### Requirements

You must use single-spa@>=5.4.0 in order for the layout engine to work. Additionally, you may not provide custom `domElementGetter` functions for any of your single-spa applications, as those override the configuration within single-spa-layout.

## Basic usage

In your root HTML file, add a `<single-spa-router>` element to the body. It should contain `<route>` elements, `<application>` elements, and any other dom elements:

```html
<html>
  <body>
    <single-spa-router style="display: none">
      <nav class="topnav">
        <application name="@organization/nav"></application>
      </nav>
      <div class="main-content">
        <route path="settings">
          <application name="@organization/settings"></application>
        </route>
        <route path="clients">
          <application name="@organization/clients"></application>
        </route>
      </div>
      <footer>
        <application name="@organization/footer"></application>
      </footer>
    </single-spa-router>
  </body>
</html>
```

Then inside of your root-config's JavaScript code, add the following:

```js
import { registerApplication, start } from 'single-spa';
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from 'single-spa-layout';

const routes = constructRoutes(document.querySelector('single-spa-router'));
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);
start();
```