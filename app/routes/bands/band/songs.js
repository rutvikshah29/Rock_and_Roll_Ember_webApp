import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return this.modelFor('bands.band');

    },

    resetController(controller) {
        controller.setProperties({
            isAddingSong: false,
            newSongTitle: ''
        });
    },

    actions: {
        didTransition() {
            let band = this.modelFor(this.routeName); //gets the model of this route. this.routeName = bands.band.songs
            document.title = `${band.name} songs - Rock & Roll` ;
        },
    }
});