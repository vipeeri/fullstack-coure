if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
  }
  
  let port = 3003
  let mongoUrl = process.env.MONGODB_URI
  
  if (process.env.NODE_ENV === 'test') {
    port = process.env.TEST_PORT
    mongoUrl = process.env.TEST_MONGODB_URI
  }
  
  module.exports = {
    mongoUrl,
    port
  }