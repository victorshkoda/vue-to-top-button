# vue-to-top-button

A simple customizable go-to-top button. Directive & mixin for Vue or Nuxt projects.

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
| auto | *boolean* | Choose to use directive or mixin. The default is true. The button connects automatically to all pages. If set to false, then you need to use the *totopbutton* directive on any page. |
| type | *number* | Default 0. |
| color | *string* | Default "#777". |
| width | *number* | Default 50. |
| offset | *number* | Default 2. |
| bg | *string* | Default "transparent". |
| radius | *number* | Default 50. |
| bottom | *number* | Default 70. |
| right | *number* | Default 70. |
| transition | *number* | Default 300. |
| classname | *string* | Default null. |