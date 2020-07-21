const { MongoClient } = require('mongodb')

const config = {
  url: 'mongodb://localhost:27017/crud-serverless-mongo-wavy',
  dbName: 'crud-serverless-mongo-wavy'
}

async function createConnection () {
  const connection = await MongoClient.connect(config.url, { useNewUrlParser: true })
  const db = connection.db(config.dbName)
  return {
    connection,
    db
  }
}

module.exports = createConnection
