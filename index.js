const { google } = require('googleapis')

const { OAuth2 } = google.auth

const oAuth2Client = new OAuth2(
    'client ID', 
    'Client secret'
)

oAuth2Client.setCredentials({
    refresh_token:
        'refresh token',
})

//declare calendar
const calendar = google.calendar({ version: 'v3', auth: oAuth2Client })

const eventStartTime = new Date()
eventStartTime.setDate(eventStartTime.getDay() + 3)

const eventEndTime = new Date()
eventEndTime.setDate(eventEndTime.getDay() + 5)
eventEndTime.setMinutes(eventEndTime.getMinutes() + 30)

const event = {
    summary: 'Meet with OurPets team',
    location: 'enter an address here',
    description: 'description of the event here',
    colorId: 1,
    start: {
        dateTime: eventStartTime,
        timeZone: 'America/Chicago',
    },
    end: {
        dateTime: eventEndTime,
        timeZone: 'America/Chicago',
    },
}

calendar.freebusy.query({
    resource: {
        timeMin: eventStartTime,
        timeMax: eventEndTime,
        timeZone: 'America/Chicago',
        items: [{ id: 'primary' }],
    },
},
(err, res) => {
    if (err) return console.error('Free or Busy Query Error', err)

        const eventsArr = res.data.calendars.primary.busy
        if (eventsArr.length === 0) {
            return calendar.events.insert(
                {calendarId: 'primary', resource: event },
                err => {
                    if (err)
                    return console.error('Calendar Event Creation Error:', err)

                    return console.log('Calendar Event Created')
                }
                )
        }
        return console.log(`Sorry I'm Busy`)
    }
)