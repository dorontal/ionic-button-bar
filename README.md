# ionic-button-bar
A simple "row of buttons" component.

Demonstration of an Angular / Ionic component that creates a button bar similar in appearance to the tab-bar but containing just buttons.

To run the app:
* In the shell, type:
  ```bash
  > git clone https://github.com/dorontal/ionic-button-bar

  > cd ionic-button-bar

  > yarn

  > yarn start
  ```
To use the component:
* Add the `button-bar` component's folder (`./src/app/components/button-bar`)
to your app
* Add to the module file of the component (or page) that uses `button-bar` a
  new import - `ButtonBarModule` - in the `imports` section - see how this
  is done in the `./src/app/pages/home/home.module.ts` of this app
* In the template, you'll be able to refer to the component as
  `app-button-bar`, for example, from `home.page.html` in this app:
  ```html
      <app-button-bar [radio]="true" [buttons]="bar1Buttons"></app-button-bar>
  ```
