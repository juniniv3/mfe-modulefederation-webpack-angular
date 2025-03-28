const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  remotes: {
    "remoteA": "http://localhost:4201/remoteEntry.js",
    "remoteB": "http://localhost:4202/remoteEntry.js",    
    "remoteC": "http://localhost:4203/remoteEntry.js",    
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
