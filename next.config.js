module.exports = {
    reactStrictMode: true,
    serverRuntimeConfig: {
        secret: '0B85FF74-1A45-4D5F-83EE-406863BD6B689FA4FA86-ADC8-4A39-9E3A-BBC18A1706E77260E0D7-1B6D-4D19-915B-0D17A508E131'
    },
    publicRuntimeConfig: {
        apiUrl: process.env.NODE_ENV === 'development'
            ? 'http://deb9:3000/api' // development api
            : 'https://versatilecardcreator.herokuapp.com/api' // production api
    }
}
