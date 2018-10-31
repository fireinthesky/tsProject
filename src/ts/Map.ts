import * as L from 'leaflet';
import { mapMergeOption } from './interface';

export class Map {
    mergeOptions?:mapMergeOption[];
    
    constructor(){
        this.cleanIcons();
    }
    
    private cleanIcons(){
        delete (<any>L.Icon.Default.prototype)._getIconUrl;
    }


}