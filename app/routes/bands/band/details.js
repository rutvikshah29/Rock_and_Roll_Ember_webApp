import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return this.modelFor('bands.band');
    },

    resetController(controller) {
        controller.setProperties({
            isEditing: false,
        });
    },

    actions: {
        //alert the user before transitioning without saving the changes.
        willTransition(transition) { 
            if (this.controller.isEditing) {
                let leave = window.confirm('Are you sure?'); 
                if (!leave) {
                    transition.abort();
                } else {
                    let band = this.modelFor('bands.band');
                    band.set('description', ''); //unsaved changes for description field vanish.
                }
                
            }
        },
    }
});
