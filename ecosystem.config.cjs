module.exports = {
    apps: [
      {
        name: 'Creative HR Solutions',
        port: '3031',
        exec_mode: 'cluster',
        instances: '1',
        script: './.output/server/index.mjs' 
      }
    ]
  }