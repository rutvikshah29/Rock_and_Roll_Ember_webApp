import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

// routes: /bands/:slug/songs or /bands/:slugs/details
// :slug refers to a dynamic route segment. In this case for each band.
export default Router.map(function() {
  this.route('bands', function() {
    this.route('band', { path: ':id' }, function(){
      this.route('songs');
      this.route('details');
    });
  }); 
});


