import Mn from 'backbone.marionette'
import SecondTemplate from './template/secondTemplate.hbs'

export class SecondView extends Mn.View{
    constructor(){
        super({
            tagName: 'div',
            className: 'second_view',
            template: SecondTemplate
        })
    }
}