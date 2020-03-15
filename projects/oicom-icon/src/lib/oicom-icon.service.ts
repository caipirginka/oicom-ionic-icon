import { Injectable } from '@angular/core';

import { addIcons as ioniconsAddIcons } from 'ionicons';
import * as ionicons from 'ionicons/icons';       //ignore this error
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class OicomIconService {

  constructor() { }

  private _assignIcon(name: string, icon?: string) {
    return { [name]: ionicons[_.camelCase((icon || name))] };
  }

  public addIcons(icons: string[], prefer?: '' | 'outline' | 'sharp') {
    ioniconsAddIcons({
      ...icons.reduce((acc, name) => {
        return {
          ...acc,
          ...this._assignIcon(name, prefer ? `${name}-${prefer}` : name),
          ...this._assignIcon(`${name}-fill`, name),
          ...this._assignIcon(`${name}-outline`),
          ...this._assignIcon(`${name}-sharp`),
          /*           [`${name}`]: m[_.camelCase(name)],
                    [`${name}-outline`]: m[_.camelCase(`${name}-outline`)],
                    [`${name}-sharp`]: m[_.camelCase(`${name}-sharp`)], */
        }
      }, {}),
    });
  }

  public addAlias(name: string, md: string, ios: string) {
    ioniconsAddIcons({
      ...this._assignIcon(`md-${name}`, md),
      ...this._assignIcon(`ios-${name}`, ios),
    });
  }

  public addPlatform(name: string, md: string, ios: string) {
    ioniconsAddIcons({
      ...this._assignIcon(`md-${name}`, md),
      ...this._assignIcon(`ios-${name}`, ios),
    });
  }
}
