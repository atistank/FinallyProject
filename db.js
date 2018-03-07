const sequelize = require('sequelize')
const pg = require('pg');
pg.defaults.ssl = true;

const db = new sequelize({

    database: "d5rvn4isku8tlu",
    username: "adyssuakmijxbm",
    password: "2200dd5691094abe8dc7faed9b50c4713756e8a57a93036433c401e0a61f62a0",
    host: "ec2-107-21-236-219.compute-1.amazonaws.com",
    port: 5432,
    dialect: 'postgres',
    ssl: true
})

// ham kiem tra test ket noi
db.authenticate()
  .then( function(){ console.log( 'ket noi thanh cong' )})
  .catch(err => console.log( err.message) )
// dinh nghia table
const User = db.define('UserData',
{
    username: sequelize.STRING,
    email: sequelize.STRING,
    password: sequelize.STRING,
    avatar: sequelize.STRING,
    cover: sequelize.STRING,
    quyenhan: sequelize.INTEGER,
    trangthai: sequelize.INTEGER,
    like: sequelize.INTEGER,
    userid: {
      type: sequelize.INTEGER,
      primaryKey: true,
      unique: true,
      allowNull: false,
      autoIncrement: true
    }
  }, 
  {
    freezeTableName: true

})

User.create({
  username: 'Jean',
  email: 'jean.dupont@gmail.com',
  password : "Mr",
  avatar : "12342"
});

const Data = db.define('Khoaluan4',
{
   stt: {
      type: sequelize.INTEGER,
      primaryKey: true,
      unique: true,
      allowNull: false
    },
    cbgv: sequelize.STRING,
    holot: sequelize.STRING,
    ten: sequelize.STRING,
    hocky: sequelize.STRING,
    mahp: sequelize.STRING,
    tenhp: sequelize.STRING,
    sotc: sequelize.STRING,
    lythuyet: sequelize.STRING,
    thuchanh: sequelize.STRING,
    nhom: sequelize.STRING,
    sototh: sequelize.STRING,
    sosv: sequelize.STRING,
    sotiec: sequelize.STRING,
    bomon: sequelize.STRING,
    khoa: sequelize.STRING
   
  }, 
  {
    freezeTableName: true

})

db.sync({force: true})

module.exports = {
  User,
  Data
}