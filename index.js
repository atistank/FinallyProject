const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const models = require('./db.js')

app.use(bodyParser.urlencoded({extended: true}))
// cau hinh root


app.get('/',(req,res)=> res.send('wellcome web cua finally Project'))



// //read one
// app.get('/login', (req, res) => {
//     let {email,password} = req.query
//     models.User.findById(email)
//       .then(users => res.json({ketqua: 1, data: users}))
//       .catch(() => res.json({ketqua: 0}))
//   })


// read
app.get('/user2',(req,res)=> {
    models.User.findAll()
    .then(users => res.json({ketqua: 1, data: users}))
    .catch(() => res.json({ketqua: 0}))

})

app.get('/data',(req,res)=> {
    models.Data
    .then(khoaluan6 => res.json({ketqua: 1, data: khoaluan6}))
    .catch(() => res.json({ketqua: 0}))

})

// them user
app.post('/add_user',(req,res)=> {
let {username,email,password,avatar,cover,quyenhan,trangthai,like} = req.body
models.User.create({
     username,
     email,
     password,
     avatar,
     cover,
     quyenhan,
     trangthai,
     like
          
})
.then(() => res.json({ketqua: 1}))
.catch(() => res.json({ketqua: 0}))
})




// cap nhat user
app.post('/update_user',(req,res)=>{
let {userid,username,email,password,avatar,cover,quyenhan,trangthai,like} = req.body
   models.User.update({
            username,
            email,
            password,
            avatar,
            cover,
            quyenhan,
            trangthai,
            like
        },{ where: {userid},returning: true })
.then(row => res.json({ketqua: 1, rowsCount: row[0], data: row[1]  }))
.catch(err => res.json({ketqua: 0, error: err.message} ))

})//






app.post('/delete',(req,res)=>{
    let {id} = req.body
     models.User.destroy({
        where: {userid: id}
    })
    .then( row => res.json( {ketqua: 1, rowsCount: row}) )
    .catch(err => res.json( {ketqua: 0, error: err.message} ))

})

//tao port lang nghe cac ket noi

const port = process.env.PORT || 3000
app.listen(port, function(){ console.log(`server started on port ${port}`) })