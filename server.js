const express = require('express');
const app = express();
const path = require('path');
const AccessToken = require('twilio').jwt.AccessToken;
const VideoGrant = AccessToken.VideoGrant;
require('dotenv').config();

const MAX_ALLOWED_SESSION_DURATION = 14400;
const twilioAccountSid = process.env.TWILIO_ACCOUNT_SID;
const twilioApiKeySID = process.env.TWILIO_API_KEY_SID;
const twilioApiKeySecret = process.env.TWILIO_API_KEY_SECRET;

const authToken = process.env.TWILIO_authToken;

app.use(express.static(path.join(__dirname, 'build')));

app.get('/token', (req, res) => {
  const { identity, roomName } = req.query;
  const token = new AccessToken(twilioAccountSid, twilioApiKeySID, twilioApiKeySecret, {
    ttl: MAX_ALLOWED_SESSION_DURATION,
  });
  token.identity = identity;
  const videoGrant = new VideoGrant({ room: roomName });
  token.addGrant(videoGrant);
  res.send(token.toJwt());
  console.log(`issued token for ${identity} in room ${roomName}`);
});

// http://localhost:8081/create_small_group_room
app.post('/create_small_group_room', (req, res) => {

    const client = require('twilio')(twilioAccountSid, authToken);
    const faker = require('faker')
    const firstname = faker.fake("{{name.firstName}}")
    console.log("API from console:",firstname)

    client.video.rooms
        .create({
            recordParticipantsOnConnect: true,
            statusCallback: 'http://example.org',
            type: 'group-small',
            uniqueName: 'PrivateCourtRoom_'+firstname
        })
        .then(room => res.send(room))
        .then(room => console.log('API response: ', room))
        .catch(err => console.error(err));
})

app.get('*', (_, res) => res.sendFile(path.join(__dirname, 'build/index.html')));

app.listen(8081, () => console.log('token server running on 8081'));
