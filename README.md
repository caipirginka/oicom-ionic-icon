# OicomIonicIcon

Avoid the hundreds of .svg files of Ionicons.
This is for a Ionic/Angular project, using Ionicons 5.

## Installation

TDB

## Usage

Remove the following lines from the __angular.json__ file:

    ,
    {
        "glob": "**/*.svg",
        "input": "node_modules/ionicons/dist/ionicons/svg",
        "output": "./svg"
    }

Add the following to the __app.module.ts__ file:

    import { OicomIconModule } from 'oicom-icon';
    ...
    @NgModule({
    ...
    imports: [
        ...
        OicomIconModule

Add the following to the __app.component.ts__ file:

    import { OicomIconService } from 'oicom-icon';
    ...
    export class AppComponent {
    constructor(
        ...
        private iconService: OicomIconService,
    ...
        this.platform.ready().then(() => {
            ...
            const icons = [
                'arrow-back', 'close', 'search',
                'chevron-back', 'chevron-forward', 'close-circle',
                'call', 'globe', 'heart', 'mail', 'navigate', 'person', 'settings', 'share', 'share-social'];
        this.iconService.addIcons(icons, 'outline');

This list of icon names is just an example.
All icon names used through the App, as __ion-icon__ tags must be added, plus any icon name used by other components,
such as __ion-back-button__ and the like.
Keep an eye on the error log for any missing .svg file error and add the missing filename (without the extension) to this list.

The second parameter to the __addIcons__ method, 'outline' in this example, is the preferred icon style.
By specifying this parameter, the corresponding icon variation will be used, even if not specified.
This way is easy to experiment with different icon styles, comparing filled, with outline, for example,
without having to go through the App code and substitute all icon names.

The base icon style is always available as __basename-fill__.
This must be used when explicit filled vs outline variation is needed (i.e. empty/full heart icon for favorites).
