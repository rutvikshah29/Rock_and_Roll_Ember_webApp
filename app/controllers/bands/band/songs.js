import Controller from '@ember/controller';
import { empty } from '@ember/object/computed';

export default Controller.extend({
    isAddingSong: false,
    newSongTitle: '',

    isAddButtonDisabled: empty('newSongTitle'),

    actions: {
        addSong() {
            this.set('isAddingSong', true);
        },

        cancelAddSong() {
            this.set('isAddingSong', false);
        },

        async saveSong(event) {
            event.preventDefault();
            // let newSong =  Song.create({title: this.newSongTitle});
            // this.model.songs.pushObject(newSong);
            let newSong = this.store.createRecord('songs', {
                title: this.get('newSongTitle'),
                band: this.model
            });
            await newSong.save();
            this.set('newSongTitle', '');
        },

        // ch-7 components (112)
        updateRating(song, rating) {
            song.set('rating', song.rating === rating ? 0 : rating);
            song.save();
        }
    }
});
