const mongoose = require('mongoose')
const conString = "mongodb://127.0.0.1:2701/reactroomservice"

const createDbConnection = async () => {

    try {

        let res = await mongoose.connect(conString, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        if (res) {
            console.log('👉 Connection establish to DB 👈')
        }
    } catch (err) {
        console.error(err);
    }

    try {
        let res = awai
    } catch (error) {
        
    }

}

createDbConnection()

// module.exports = createDbConnection;
