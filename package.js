Package.describe({
  summary: "Provides Ratchet 2 for Meteor"
});

Package.on_use(function (api) {
  api.use('jquery');

  var path = Npm.require('path');
  var asset_path = path.join('ratchet-2');
  api.add_files(path.join(asset_path, 'css', 'ratchet.css'), 'client');
  api.add_files(path.join(asset_path, 'js', 'ratchet.js'), 'client');
  api.add_files(path.join(asset_path, 'js', 'ratchet.min.js'), 'client');
  api.use(['underscore','templating','jquery'], 'client')

  // fonts
  api.add_files(path.join(asset_path, 'fonts', 'ratchicons.eot'), 'client');
  api.add_files(path.join(asset_path, 'fonts', 'ratchicons.ttf'), 'client');
  api.add_files(path.join(asset_path, 'fonts', 'ratchicons.svg'), 'client');
  api.add_files(path.join(asset_path, 'fonts', 'ratchicons.woff'), 'client');  
  
   // XXX this makes the paths to the icon sets absolute. it needs
  // to be included _after_ the standard ratchet css so
  // that its styles take precedence.
  api.add_files(path.join('ratchet-override.css'), 'client');
});
