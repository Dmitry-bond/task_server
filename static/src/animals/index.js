import Mn from 'backbone.marionette'
import AnimalTemplate from './template/AnimalTemplate.hbs'
import Bb from 'backbone'
import _ from 'underscore'

export class AnimalsView extends Mn.CollectionView{
    constructor(){
        super({
            template: false,
            childView: Animal,
            collection: new CollectionAnimals(),
        })
    }
    onRender(){
        this.collection.fetch()
    }
}

class CollectionAnimals extends Bb.Collection{
    url(){
        return '/ani_mal/animal/'
    }
}

class Animal extends Mn.View{
    constructor(option={}){
        _.defaults(option, {
            template: AnimalTemplate,
        });
        super(option)
    }
    templateContext(){
        return {
            kind: this.model.get('kind'),
            age: this.model.get('age')
        }
    }
}