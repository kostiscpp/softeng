// commands/adduser.js
const axios = require('axios');
const { endpoints } = require('../config');
const fs = require('fs/promises');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

dotenv.config(); // Load environment variables from .env file
const https = require('https');
const agent = new https.Agent({
  rejectUnauthorized: false, // Ignore SSL certificate validation (not recommended in production)
});
module.exports = {
  command: 'adduser',
  describe: 'Add a new user (admin only)',
  builder: (yargs) => {
    yargs.option('username', {
      describe: 'Specify the username for the new user',
      type: 'string',
      demandOption: true,
    }).option('passw', {
      describe: 'Specify the password for the new user',
      type: 'string',
      demandOption: true,
    });
  },
  handler: async (argv) => {
    try {
      // Read the authentication token from the file
      const storedToken = await fs.readFile('authToken.txt', 'utf-8');

      if (!storedToken) {
        console.log('No authentication token found. Please log in first.');
        return;
      }

      // Check if the user is an admin (use process.env for comparison)
      const isAdmin = jwt.verify(storedToken, process.env.JWT_SECRET_KEY).role === 'admin';

      if (!isAdmin) {
        console.log('You need to be an admin to add a new user.');
        return;
      }

      // Append the username and password to the usersUrl
      const addUserUrl = `${endpoints.usermod}/${argv.username}/${argv.passw}`;

      const response = await axios.post(addUserUrl, null, {
        httpsAgent : agent,
        headers: { 'X-OBSERVATORY-AUTH': storedToken },
      });

      console.log('User addition successful');
      // console.log('Response:', response.data);
    } catch (error) {
      console.error('User addition failed:', error.message);
    }
  },
};
