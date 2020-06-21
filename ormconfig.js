module.exports = {
  "name": "default",
  "type": "mongodb",
  "host": process.env.TYPEORM_HOST,
  "port": process.env.TYPEORM_PORT,
  "database": process.env.TYPEORM_DATABASE,
  "useUnifiedTopology": true,
  "entities": [
    "./src/modules/**/infra/typeorm/schemas/*.ts"
  ]
}
