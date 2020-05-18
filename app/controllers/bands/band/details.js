import Controller from '@ember/controller';

export default Controller.extend({
    isEditing: false,

    actions: {
        edit() {
            this.set('isEditing', true);
        },

        async save() {
            let band = this.model;
            await band.save();  //wait until the changes are saved in the store band object.
            this.set('isEditing', false);
        }
    }
});
    


