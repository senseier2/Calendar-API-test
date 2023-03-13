const {google} = require('googleapis')

const { OAuth2 } = google.auth

const oAuth2Client = new OAuth2(
    '807282470908-stjl2ss7bkr9plo7kdn3ranhnfo61gcg.apps.googleusercontent.com', 
    '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'
)

oAuth2Client.setCredentials({
    refresh_token:
        '1//04FrrF4KG9xuICgYIARAAGAQSNgF-L9IrFaG9drakPvZshJu4gROtONMShjI-5obdi4uomrAIm9hX4n14pYWTFICwfrev1ehc8Q',
})

//declare calendar
const calendar = google.calendar({ version: 'v3', auth: oAuth2Client })

const eventStartTime = new Date()
eventStartTime.setDate(eventStartTime.getDay() + 2)

eventEndTime = new Date()
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

// calendar.freebusy.query({
//     resource: {
//         timeMin: eventStartTime,
//         timeMax: eventEndTime,
//         timeZone: 'America/Chicago',
//         items: [{ id: primary }] //test name
//     },
// },
// (err, res) => {
//     if (err) return console.error('Free or Busy Query Error', err)

//         const eventsArr = res.data.calendar.primary.busy
//         if (eventsArr.length === 0) {
//             return calendar.events.insert(
//                 {calendarId: 'primary', resource: event},
//                 err => {
//                     if (err)
//                     return console.error('Calendar Event Creation Error:', err)

//                     return console.log('Calendar Event Created')
//                 }
//                 )
//         }
//         return console.log(`Sorry I'm Busy`)
//     }
// )