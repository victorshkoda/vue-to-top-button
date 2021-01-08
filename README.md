# vue-to-top-button plugin

A simple custom plugin for Vue and Nuxt projects, that embeds a "to-top" button on a page. The plugin is easily customizable for the appearance of the page. It is possible to automatically connect a button to all pages or connect to individual pages using a directive.

## Installation

```
npm install vue-to-top-button --save
```
## Usage Vue
### Import statement:
If use mixin (auto connection)
```javascript
// Your main.js code
import vueToTopButton from "vue-to-top-button"
Vue.use(vueToTopButton)

//or with options
Vue.use(vueToTopButton, {
    //options
})
```
If use directive:
```javascript
// Your main.js code
import vueToTopButton from "vue-to-top-button"
Vue.use(vueToTopButton, {
    auto: false,
    //other options
})
```
```vue
// Your App.vue code
<template>
  <div id="app">
   ...  
   <div v-totopbutton></div>
  </div>
</template>
```
## Usage Nuxt
### Import statement:
If use mixin (auto connection)
```javascript
// Create vueToTopButton.js in plugins directory
// Your vueToTopButton.js code
import vueToTopButton from "vue-to-top-button";
Vue.use(vueToTopButton)

//or with options
Vue.use(vueToTopButton, {
    //options
})

// Your nuxt.config.js
module.exports = {
    plugins: [
        {src: '~/plugins/vueToTopButton.js',  ssr: false}
    ],
    ...
}
```
If use directive:
```javascript
// Create vueToTopButton.js in plugins directory
// Your vueToTopButton.js code
import vueToTopButton from "vue-to-top-button";
Vue.use(vueToTopButton)
//or
Vue.use(vueToTopButton, {
    auto: false,
    //other options
})

// Your nuxt.config.js
module.exports = {
    plugins: [
        {src: '~/plugins/vueToTopButton.js',  ssr: false}
    ],
    ...
}
```
```vue
// Your any-page.vue or any-layout.vue code
<template>
  <div>
   ...  
   <div v-totopbutton></div>
  </div>
</template>
```

## OPTIONS
| Property | Type | Description |
| ------ | ------ | ------ |
| auto | *boolean* | Choose to use directive or mixin mode. If set to true, the button connects automatically to all pages. If set to false, then you need to use the *totopbutton* directive on any page. Default true |
| type | *number* | Button appearance. 0 - Static button (no animation). 1 - Animated button. Default 0 |
| color | *string* | Button color. Default "#777" |
| width | *number* | The size of the button in pixels. Default 50 |
| offset | *number* | Number of scrolled screens before the button appears. Default 1.5 |
| bg | *string* | The fill color of the button. Default "transparent" |
| radius | *number* | Button border radius as a percentage. Default 50 |
| bottom | *number* | Bottom padding in pixels. Default 70 |
| right | *number* | Right indent in pixels. Default 70 |
| transition | *number* | Smoothness of appearance in milliseconds. Default 300 |
| classname | *string* | Additional class. Default null |