import Controller from '@ember/controller';
import { empty } from '@ember/object/computed';

export default Controller.extend({
    isAddingBand: false,
    newBandName: '',

    isAddButtonDisabled: empty('newBandName'),

    actions: {
        addBand() {
            this.set('isAddingBand', true);
        },

        cancelAddBand() {
            this.set('isAddingBand', false);
        },

        async saveBand(event) {
            //create a new band
            event.preventDefault();
            // let newBand = Band.create({name: this.newBandName});
            // this.model.pushObject(newBand);
            let newBand = this.store.createRecord('band', {name: this.newBandName});
            await newBand.save(); //wait until the changes are saved. 
            this.setProperties({
                newBandName: '',
                isAddingBand: false
            });
            this.transitionToRoute('bands.band.songs', newBand.slug);
        }
    }

});
