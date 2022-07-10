const express = require('express')
const cookieParser = require('cookie-parser')
const createDbConnection = require('./db/db')
const app = express()
const PORT = 5000

// ====================> Database Connection <====================  

createDbConnection()

// ====================> MiddleWare <==================== 

app.use(express.json())
app.use(cookieParser())

// ====================> Routes <====================

app.use('/api/auth', require('./routes/auth/auth'))
app.use('/api/hotel', require('./routes/hotel/hotel'))

app.use((err, req, res, next)=>{

    const errStatus = err.status || 500
    const errMsg = err.message || "Something went wrong!"
    return res.status(errStatus).json({msg: errMsg})
})

// ====================> Default Route <====================
app.get('/', (req, res) => res.status(200).send('Server Run'))

app.listen(PORT, () => {
    console.clear()
    console.log(`Server listening on PORT ${PORT}!`)
})