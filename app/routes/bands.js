import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return this.store.findAll('band');
    },

    // For changing the title of the browser tab after transitioning to this route (bands).
    actions: {
        didTransition() {
            document.title = 'Bands - Rock & Roll';
        },
    }

});
