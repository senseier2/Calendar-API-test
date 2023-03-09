const {google} = require('googleapis')
const {OAuth2} = google.auth

const oauth2client = new OAuth2('clientId', 'clientsecret')

oAuth2Client.setCredentials({
    refresh_token:
    'refresh-token-value',
})

//declare calendar
const calendar = google.calendar({ version: 'v3', auth:oAuth2Client })




const eventStartTime = new Date()
eventStartTime.setDate(eventStartTime.getDay() + 2)

eventEndTime = newDate()
eventEndTime.setDate(eventEndTime.getDay() + 2)
eventEndTime.setMinutes(eventEndTime.getMinutes() +45)

const event = {
    summary: 'Meet with OurPets team',
    location: 'enter an address here',
    description: 'description of the event here',
    start: {
        dateTime: eventStartTime,
        timeZone: 'America/Chicago',
    },
    end: {
        dateTime: eventEndTime,
        timeZone: 'America/Chicago',
    },
    colorId: 1
}

calendar.freebusy.query({
    resource: {
        timeMin: eventStartTime,
        timeMax: eventEndTime,
        timeZone: 'America/Chicago',
        items: [{ id: primary }] //test name
    },
},
(err, res) => {
    if (err) {
        return console.error('Free or Busy Query Error', err)

        const eventsArr = res.data.calendar.primary.freebusy
        if (eventsArr.length === 0) {
            return calendar.events.insert(
                {calendarId: 'primary', resource: event},
                err => {
                    if (err)
                    return console.error('Calendar Event Creation Error:', err)

                    return console.log('Calendar Event Created')
                }
                )
                return console.log(`Sorry I'm Busy`)
        }
    }

}
)