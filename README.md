# collapse-web-component

A web components learning project.
This web component creates a collapse element which has a label and a content section.
If the user clicks on the label, the content will expand.

## Installation:

To use this Web-Component you have to do 3 things:

+ Add the `<template>` and it contents to your HTML.
+ Load jQuery (a no jQery Version is planned in the future)
+ Load the collapse.js file `<script src="collapse.js"></script>`

Now you can use the `<collapse-component>` tag in your HTML.

## Usage

Once you have completed the installation steps, you can add your `collapse-component` anywhere on your page:
Wrap any html content you want to be collapsed in a span with the `slot="collapse-content"` and put it inside the custom element: 

```html
<collapse-component open-text="Read more" close-text="Read less" style="display: none; width: 600px">
  <span slot="collapse-content">
   <h2>Lorem ipsum dolor</h2>
   <p>
     At vero eos et accusam et justo duo dolores et ea rebum. 
     Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. 
   </p>
  </span>
</collapse-component>
```

**Note:*** the `slot="collapse-content"` attribute must be set otherwise  the component will not work.

### Properties

#### close-text

Use the `close-text` property to specify the text which should appear on the label when the component can be collapsed.

#### open-text

Use the `open-text` property to specify the text which should appear on the label when the collapsed component can be expanded.

## Planned features

* Remove jQery as a dependency to increase modularity
