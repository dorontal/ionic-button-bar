# ionic-button-bar
Demonstration of an Angular / Ionic component that creates a button bar similar in appearance to the tab-bar but containing just buttons.

To use the component:
* Add its folder (`./src/app/components/button-bar`)
to your app
* Add to the module file of the component (or page) that uses `button-bar` a
  new import - `ButtonBarModule` in the `imports` section, as is done in the
  `./src/app/pages/home/home.module.ts` of this example app
You'll be able to refer to the component as `app-button-bar`, e.g, from `home.page.html`:
```html
    <app-button-bar [radio]="true" [buttons]="bar1Buttons"></app-button-bar>
```
