import Mn from 'backbone.marionette'
import ViewTemplate from './template/main.hbs'
import { SecondView } from '../secondView/index.js'
import { AnimalsView } from '../animals/index.js'

export class View_ extends Mn.View{
    constructor(){
        super({
            tagName: 'p',
            className: 'container_view',
            template: ViewTemplate,
            regions: {
                region_1: '.container_1',
                animals: '.container_2'
            }
        })
    }

    onRender(){
        this.showChildView('region_1', new SecondView());
        this.showChildView('animals', new AnimalsView());
    }
}