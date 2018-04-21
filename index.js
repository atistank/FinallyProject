const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const {User,Data,klcv_bomon,klcv_chitiet_hdcm,klcv_chitiet_hdkhcn,klcv_chucvu,klcv_giangvien,klcv_hdgd,klcv_giangvienXacnhan,klcv_hdcm,klcv_hdg,klcv_hdkhcn,klcv_heso,klcv_hocphan,klcv_ketqua,klcv_khoa,klcv_luong,klcv_namhoc,klcv_ngach,klcv_nhatky,klcv_phanhoi,klcv_quyen,klcv_thanhvien}  = require('./db.js')

app.use(bodyParser.urlencoded({extended: true}))
// cau hinh root


app.get('/',(req,res)=> res.send('wellcome web cua finally Project'))
//s

app.get('/khoiluongcongviec', (req, res) => {
    klcv_hdcm.findAll({  
        include: [
            {
              attributes: ['ID_GiangVien','SoLuong'],
              model: klcv_chitiet_hdcm,
              include: [
                {
                  attributes: ['Ho_GiangVien','Ten_GiangVien','GioiTinh'],
                  model: klcv_giangvien,
                  include: [
                    {
                      attributes: ['Ten_BoMon'],
                      model: klcv_bomon                  
                    },{
                        model: klcv_ngach,attributes: ['Ten_Ngach','DinhMuc_GD','DinhMuc_NCKH','DinhMuc_HDK'],
                    }
                  ]
                }
              ]
            }
          ]
    })
    .then(users => res.json({ketqua: 1, data: users}))
    .catch(() => res.json({ketqua: 0}))
 })




app.post('/khoiluongcongviec2', (req, res) => {
    const ID_BoMon = req.body.ID_BoMon
    klcv_bomon.findById(ID_BoMon,
        {   
        attributes: ['Ten_BoMon','ID_Khoa'],
        include: [
            {
              attributes: ['ID_GiangVien','Ho_GiangVien','Ten_GiangVien','GioiTinh'],
              model: klcv_giangvien,
              include: [
                {
                    model: klcv_ngach, 
                    attributes: ['Ten_Ngach','DinhMuc_GD','DinhMuc_NCKH','DinhMuc_HDK']
                },
                {
                    model: klcv_hdgd
                },
                {
                    attributes: ['SoLuong'],
                    model: klcv_chitiet_hdcm,
                    include: [
                      {
                        model: klcv_hdcm                  
                      }
                    ]
                  }
              ]
            }
          ]
    }
)
    .then(users => res.json({ketqua: 1, data: users}))
    .catch(err => res.json({ketqua: 0, error: err.message}))
 })


 app.post('/khoiluongcongviecmotnguoi', (req, res) => {
    const IDGIANGVIEN = req.body.IDGIANGVIEN
    klcv_giangvien.findById(IDGIANGVIEN,
        {   
        attributes: ['ID_GiangVien','Ho_GiangVien','Ten_GiangVien','GioiTinh'],
        include: [
            {
              attributes: ['Ten_BoMon','ID_Khoa'],
              model: klcv_bomon,
            },
            {
                model: klcv_ngach, 
                attributes: ['Ten_Ngach','DinhMuc_GD','DinhMuc_NCKH','DinhMuc_HDK']
            },
            {
                model: klcv_hdgd,
                include: {
                    model: klcv_hocphan
                }
            },
            {
                attributes: ['SoLuong'],
                model: klcv_chitiet_hdcm,
                include: 
                [
                  {
                    model: klcv_hdcm                  
                  }
                ]
            }
            ,
            {
                model: klcv_chitiet_hdkhcn,
                include: 
                [
                  {
                    model: klcv_hdkhcn                  
                  }
                ]
            }

          ]
    }
)
    .then(users => res.json({ketqua: 1, data: users}))
    .catch(err => res.json({ketqua: 0, error: err.message}))
 })




 

//read one
app.post('/login', (req, res) => {
    const userid = req.body.userid
    User.findById(userid)
      .then(users => res.json({ketQua: 1, data: users}))
      .catch(err => res.json({ketqua: 0, error: err.message} ))
  })

 

// read
app.get('/user',(req,res)=> {
    User.findAll()
    .then(users => res.json({ketqua: 1, data: users}))
    .catch(() => res.json({ketqua: 0}))

})
app.get('/klcv_bomon',(req,res)=> {
    klcv_bomon.findAll()
    .then(klcv_bomon => res.json({ketqua: 1, data: klcv_bomon}))
    .catch(() => res.json({ketqua: 0}))
})


app.get('/klcv_chitiet_hdcm',(req,res)=> {
    klcv_chitiet_hdcm.findAll()
    .then(klcv_bomon => res.json({ketqua: 1, data: klcv_bomon}))
    .catch(() => res.json({ketqua: 0}))
})
app.get('/klcv_chitiet_hdkhcn',(req,res)=> {
    klcv_chitiet_hdkhcn.findAll()
    .then(klcv_bomon => res.json({ketqua: 1, data: klcv_bomon}))
    .catch(() => res.json({ketqua: 0}))
})
app.get('/klcv_chucvu',(req,res)=> {
    klcv_chucvu.findAll()
    .then(klcv_bomon => res.json({ketqua: 1, data: klcv_bomon}))
    .catch(() => res.json({ketqua: 0}))
})
app.get('/klcv_giangvien',(req,res)=> {
    klcv_giangvien.findAll()
    .then(klcv_bomon => res.json({ketqua: 1, data: klcv_bomon}))
    .catch(() => res.json({ketqua: 0}))
})
app.get('/klcv_hdcm',(req,res)=> {
    klcv_hdcm.findAll()
    .then(klcv_bomon => res.json({ketqua: 1, data: klcv_bomon}))
    .catch(() => res.json({ketqua: 0}))
})


//s
app.get('/klcv_hdgd',(req,res)=> {
    klcv_hdgd.findAll()
    .then(klcv_hdgd => res.json({ketqua: 1, data: klcv_hdgd}))
    .catch(() => res.json({ketqua: 0}))
})

app.get('/klcv_hdkhcn',(req,res)=> {
    klcv_hdkhcn.findAll()
    .then(klcv_bomon => res.json({ketqua: 1, data: klcv_bomon}))
    .catch(() => res.json({ketqua: 0}))
})
app.get('/klcv_heso',(req,res)=> {
    klcv_heso.findAll()
    .then(klcv_bomon => res.json({ketqua: 1, data: klcv_bomon}))
    .catch(() => res.json({ketqua: 0}))
})
app.get('/klcv_hocphan',(req,res)=> {
    klcv_hocphan.findAll()
    .then(klcv_hocphan => res.json({ketqua: 1, data: klcv_hocphan}))
    .catch(() => res.json({ketqua: 0}))
})

app.get('/klcv_heso',(req,res)=> {
    klcv_heso.findAll()
    .then(klcv_bomon => res.json({ketqua: 1, data: klcv_bomon}))
    .catch(() => res.json({ketqua: 0}))
})
app.get('/klcv_ketqua',(req,res)=> {
    klcv_ketqua.findAll()
    .then(klcv_bomon => res.json({ketqua: 1, data: klcv_bomon}))
    .catch(() => res.json({ketqua: 0}))
})
app.get('/klcv_khoa',(req,res)=> {
    klcv_khoa.findAll()
    .then(klcv_bomon => res.json({ketqua: 1, data: klcv_bomon}))
    .catch(() => res.json({ketqua: 0}))
})
app.get('/klcv_luong',(req,res)=> {
    klcv_luong.findAll()
    .then(klcv_bomon => res.json({ketqua: 1, data: klcv_bomon}))
    .catch(() => res.json({ketqua: 0}))
})
app.get('/klcv_khoa',(req,res)=> {
    klcv_khoa.findAll()
    .then(klcv_bomon => res.json({ketqua: 1, data: klcv_bomon}))
    .catch(() => res.json({ketqua: 0}))
})
app.get('/klcv_namhoc',(req,res)=> {
    klcv_namhoc.findAll()
    .then(klcv_bomon => res.json({ketqua: 1, data: klcv_bomon}))
    .catch(() => res.json({ketqua: 0}))
})
app.get('/klcv_ngach',(req,res)=> {
    klcv_ngach.findAll()
    .then(klcv_ngach => res.json({ketqua: 1, data: klcv_ngach}))
    .catch(() => res.json({ketqua: 0}))
})
app.get('/klcv_nhatky',(req,res)=> {
    klcv_nhatky.findAll()
    .then(klcv_nhatky => res.json({ketqua: 1, data: klcv_nhatky}))
    .catch(() => res.json({ketqua: 0}))
})
app.get('/klcv_phanhoi',(req,res)=> {
    klcv_phanhoi.findAll()
    .then(klcv_phanhoi => res.json({ketqua: 1, data: klcv_phanhoi}))
    .catch(() => res.json({ketqua: 0}))
})
app.get('/klcv_quyen',(req,res)=> {
    klcv_quyen.findAll()
    .then(klcv_quyen => res.json({ketqua: 1, data: klcv_quyen}))
    .catch(() => res.json({ketqua: 0}))
})
app.get('/klcv_thanhvien',(req,res)=> {
    klcv_thanhvien.findAll()
    .then(klcv_thanhvien => res.json({ketqua: 1, data: klcv_thanhvien}))
    .catch(() => res.json({ketqua: 0}))
})

// them user
app.post('/add_user',(req,res)=> {
let {username,email,password,avatar,cover,quyenhan,trangthai,like} = req.body
User.create({
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
//xac nhan giang vien khoi luong cong viec
app.get('/klcv_giangvienXacnhan',(req,res)=> {
    klcv_giangvienXacnhan.findAll()
    .then(klcv_giangvienXacnhan => res.json({ketqua: 1, data: klcv_giangvienXacnhan}))
    .catch(() => res.json({ketqua: 0}))
})
app.post('/klcv_giangvienXacnhanMotNguoi', (req, res) => {
    const ID_GiangVien = req.body.ID_GiangVien
    klcv_giangvienXacnhan.findById(ID_GiangVien)
      .then(users => res.json({ketQua: 1, data: users}))
      .catch(err => res.json({ketqua: 0, error: err.message} ))
  })
// update
  app.post('/update_xacnhanGiangVien',(req,res)=>{
    let {ID_GiangVien,khoiluongcongviec,xacnhanKhoa,xacnhanBomon,xacnhanCanhan,xacnhanPhongDaotao} = req.body
    klcv_giangvienXacnhan.update({
        khoiluongcongviec,
        xacnhanKhoa,
        xacnhanBomon,
        xacnhanCanhan,
        xacnhanPhongDaotao
            },{ where: {ID_GiangVien},returning: true })
    .then(row => res.json({ketqua: 1, rowsCount: row[0], data: row[1]  }))
    .catch(err => res.json({ketqua: 0, error: err.message} ))
    
    })//


app.post('/add_xacnhan',(req,res)=> {
    let {ID_GiangVien,Ho_GiangVien,Ten_GiangVien,ID_BoMon,khoiluongcongviec,xacnhanKhoa,xacnhanBomon,xacnhanCanhan,xacnhanPhongDaotao} = req.body
    klcv_giangvienXacnhan.create({
        ID_GiangVien,
        Ho_GiangVien,
        Ten_GiangVien,
        ID_BoMon,
        khoiluongcongviec,
        xacnhanKhoa,
        xacnhanBomon,
        xacnhanCanhan,
        xacnhanPhongDaotao
              
    })
    .then(() => res.json({ketqua: 1}))
    .catch(() => res.json({ketqua: 0}))
    })

// cap nhat user
app.post('/update_user',(req,res)=>{
let {userid,username,email,password,avatar,cover,quyenhan,trangthai,like} = req.body
   User.update({
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
     User.destroy({
        where: {userid: id}
    })
    .then( row => res.json( {ketqua: 1, rowsCount: row}) )
    .catch(err => res.json( {ketqua: 0, error: err.message} ))

})

//tao port lang nghe cac ket noi

const port = process.env.PORT || 3000
app.listen(port, function(){ console.log(`server started on port ${port}`) })