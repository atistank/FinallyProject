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

const klcv_bomon = db.define('klcv_bomon',
{
  id_bomon: {
      type: sequelize.STRING(25),
      primaryKey: true,
      unique: true,
      allowNull: false
    },ten_bomon: {
      type: sequelize.STRING(255),
      allowNull: false
    },id_khoa: {
      type: sequelize.STRING(255),
      allowNull: false
    }
   
  }, 
  {
    timestamps: false,
    freezeTableName: true

})

const klcv_chitiet_cv = db.define('klcv_chitiet_cv',
{
  ID_GiangVien: {
      type: sequelize.STRING(25),
      primaryKey: true,
      unique: true,
      allowNull: false
    },ID_ChucVu: {
      type: sequelize.STRING(25),
      allowNull: false
    }
  }, 
  {
    timestamps: false,
    freezeTableName: true
})

const klcv_chitiet_hdcm = db.define('klcv_chitiet_hdcm',
{
  
    ID_GiangVien: {
      type: sequelize.STRING(25),
      allowNull: false
    },
    ID_HDCM: {
      type: sequelize.STRING(25),
      allowNull: false
    },
    SoLuong: {
      type: sequelize.INTEGER,
      allowNull: false
    },
    ID: {
      type: sequelize.INTEGER,
      primaryKey: true,
      unique: true,
      allowNull: false
    },
    ID_BoMon: {
      type: sequelize.STRING(25),
      allowNull: false
    }
  }, 
  {
    timestamps: false,
    freezeTableName: true
})


const klcv_chitiet_hdkhcn = db.define('klcv_chitiet_hdkhcn',
{
  
    ID_GiangVien: {
      type: sequelize.STRING(25),
      allowNull: false
    },
    ID_KHCN: {
      type: sequelize.STRING(25),
      allowNull: false
    },
    
    NoiDung: {
      type: sequelize.STRING(255),
      allowNull: false
    },
    ID: {
      type: sequelize.INTEGER,
      primaryKey: true,
      unique: true,
      allowNull: false
    },
    QuyChuan: {
      type: sequelize.INTEGER,
      allowNull: false
    },
    GhiChu: {
      type: sequelize.STRING(255),
      allowNull: true
    }
  }, 
  {
    timestamps: false,
    freezeTableName: true
})


//
const klcv_chucvu = db.define('klcv_chucvu',
{
  ID_ChucVu: {
      type: sequelize.INTEGER,
      primaryKey: true,
      unique: true,
      allowNull: false
    },Ten_ChucVu: {
      type: sequelize.STRING(255),
      allowNull: false
    },TL_GiamTruGGD: {
      type: sequelize.FLOAT,
      allowNull: false
    }
   
  }, 
  {
    timestamps: false,
    freezeTableName: true

})

const klcv_giangvien = db.define('klcv_giangvien',
{
  ID_GiangVien: {
      type: sequelize.STRING(25),
      unique: true,
      allowNull: false
    },Ho_GiangVien: {
      type: sequelize.STRING(45),
      allowNull: false
    }
    ,Ten_GiangVien: {
      type: sequelize.STRING(45),
      allowNull: false
    }
    ,GioiTinh: {
      type: sequelize.STRING(25),
      allowNull: true
    }
    ,Ngach: {
      type: sequelize.STRING(25),
      allowNull: false
    }
    ,ChucVu: {
      type: sequelize.STRING(25),
      allowNull: false
    }
    ,ID_BoMon: {
      type: sequelize.STRING(25),
      allowNull: false
    },
    ID: {
      type: sequelize.INTEGER,
      primaryKey: true,
      unique: true,
      allowNull: false
    } 
  }, 
  {
    timestamps: false,
    freezeTableName: true
})


const klcv_hdcm = db.define('klcv_hdcm',
{
  ID_HDCM: {
      type: sequelize.INTEGER(25),
      primaryKey: true,
      unique: true,
      allowNull: false
    },NoiDung: {
      type: sequelize.TEXT
    }
    ,DonViTinh: {
      type: sequelize.STRING(45),
      allowNull: false,
      default: null
    }
    ,QuyChuan: {
      type: sequelize.FLOAT,
      allowNull: false,
      default: null
    }
    ,GhiChu: {
      type: sequelize.STRING(255),
      allowNull: true,
      default: null
    }
    
  }, 
  {
    timestamps: false,
    freezeTableName: true
})



const klcv_hdgd = db.define('klcv_hdgd',
{
  ID_HDGD: {
      type: sequelize.STRING(25),
      primaryKey: true,
      unique: true,
      allowNull: false
    }
    ,Nhom_HP: {
      type: sequelize.STRING(45),
      allowNull: false,
      default: null
    }
    ,ToThucHanh: {
      type: sequelize.STRING(45),
      allowNull: false,
      default: "0"
    }
    ,Thu: {
      type: sequelize.INTEGER,
      allowNull: false,
      default: null
    }
    ,TietBD: {
      type: sequelize.INTEGER,
      allowNull: false,
      default: null
    }
    ,ID_GiangVien: {
      type: sequelize.STRING(25),
      allowNull: false
    }
    ,Phong: {
      type: sequelize.STRING(45),
      allowNull: false,
      default: null
    }
    ,SiSo: {
      type: sequelize.INTEGER,
      allowNull: false,
      default: null
    }
    ,Lop: {
      type: sequelize.STRING(45),
      allowNull: false,
      default: null
    }
    ,SoTietThucHien: {
      type: sequelize.INTEGER,
      allowNull: false,
      default: null
    }
    ,HocKy: {
      type: sequelize.STRING(25),
      allowNull: false,
      default: null
    }
    ,ID: {
      type: sequelize.INTEGER,
      allowNull: false,
      default: null
    }
    
  }, 
  {
    timestamps: false,
    freezeTableName: true
})



const klcv_hdkhcn = db.define('klcv_hdkhcn',
{
  ID_KHCN: {
      type: sequelize.INTEGER(25),
      primaryKey: true,
      unique: true,
      allowNull: false
    }
    ,NoiDung: {
      type: sequelize.TEXT
    }
    ,QuyChuan: {
      type: sequelize.FLOAT,
      allowNull: false,
      default: null
    }
    ,GhiChu: {
      type: sequelize.TEXT,
      allowNull: true
    }
    
  }, 
  {
    timestamps: false,
    freezeTableName: true
})

const klcv_heso = db.define('klcv_heso',
{
  ID: {
      type: sequelize.INTEGER,
      primaryKey: true,
      unique: true,
      allowNull: false
    }
    ,HeSo_LyThuyet: {
      type: sequelize.FLOAT,
      allowNull: false,
      default: null
    }
    ,HeSo_LyThuyet_TD: {
      type: sequelize.FLOAT,
      allowNull: false,
      default: null
    }
    ,HeSo_ThucHanh_TD: {
      type: sequelize.FLOAT,
      allowNull: false,
      default: null
    }
    ,HeSo_NgoaiGio_LT: {
      type: sequelize.FLOAT,
      allowNull: false,
      default: null
    }
    ,HeSo_LopDong_50: {
      type: sequelize.FLOAT,
      allowNull: false,
      default: null
    }
    ,HeSo_LopDong_65: {
      type: sequelize.FLOAT,
      allowNull: false,
      default: null
    }
    ,HeSo_LopDong_80: {
      type: sequelize.FLOAT,
      allowNull: false,
      default: null
    }
    ,HeSo_LopDong_100: {
      type: sequelize.FLOAT,
      allowNull: false,
      default: null
    }
    ,HeSo_LopDong_120: {
      type: sequelize.FLOAT,
      allowNull: false,
      default: null
    }
    ,HeSo_LopDong_140: {
      type: sequelize.FLOAT,
      allowNull: false,
      default: null
    }
    
    ,HeSo_LopDong_160: {
      type: sequelize.FLOAT,
      allowNull: false,
      default: null
    }
    ,HeSo_LopDong_180: {
      type: sequelize.FLOAT,
      allowNull: false,
      default: null
    }
    ,HeSo_LopDong_181: {
      type: sequelize.FLOAT,
      allowNull: false,
      default: null
    }
    ,HeSo_NgoaiGio_TH: {
      type: sequelize.FLOAT,
      allowNull: false,
      default: null
    }

  }, 
  {
    timestamps: false,
    freezeTableName: true
})

const klcv_hocphan = db.define('klcv_hocphan',
{
  ID_HocPhan: {
      type: sequelize.STRING(25),
      primaryKey: true,
      unique: true,
      allowNull: false
    }
    ,Ten_HocPhan: {
      type: sequelize.STRING(255),
      allowNull: false,
      default: null
    }
    ,SoTinChi: {
      type: sequelize.INTEGER,
      allowNull: false
    }
    ,SoTietLyThuyet: {
      type: sequelize.INTEGER,
      allowNull: false
    }
    ,SoTietThucHanh: {
      type: sequelize.INTEGER,
      allowNull: false
    }
  }, 
  {
    timestamps: false,
    freezeTableName: true
})


const klcv_ketqua = db.define('klcv_ketqua',
{
  ID_GiangVien: {
      type: sequelize.STRING(25),
      primaryKey: true,
      unique: true,
      allowNull: false
    }
    ,DMGD: {
      type: sequelize.FLOAT,
      allowNull: false,
      default: null
    }
    ,DMKH: {
      type: sequelize.FLOAT,
      allowNull: false,
      default: null
    }
    ,TaiChuc: {
      type: sequelize.FLOAT,
      allowNull: false,
      default: null
    }
    ,ChinhQuy: {
      type: sequelize.FLOAT,
      allowNull: false,
      default: null
    }
    ,HDCM: {
      type: sequelize.FLOAT,
      allowNull: false,
      default: null
    }
    ,HDKH: {
      type: sequelize.FLOAT,
      allowNull: false,
      default: null
    }

    ,ID_BoMon: {
      type: sequelize.STRING(25),
      allowNull: false
    }
    ,K: {
      type: sequelize.INTEGER,
      allowNull: false
    }
    ,ThuaGio: {
      type: sequelize.FLOAT,
      allowNull: false,
      default: null
    }
    ,Luong: {
      type: sequelize.INTEGER,
      allowNull: false,
      default: "50000000"
    }
    ,HeSo: {
      type: sequelize.FLOAT,
      allowNull: false,
      default: null
    }
  }, 
  {
    timestamps: false,
    freezeTableName: true
})

const klcv_khoa = db.define('klcv_khoa',
{
  ID_Khoa: {
      type: sequelize.STRING(25),
      primaryKey: true,
      unique: true,
      allowNull: false
    }
    ,Ten_Khoa: {
      type: sequelize.STRING(255),
      allowNull: false,
      default: null
    }
},
{
    timestamps: false,
    freezeTableName: true
})



const klcv_luong = db.define('klcv_luong',
{
  ID: {
      type: sequelize.INTEGER,
      primaryKey: true,
      unique: true,
      allowNull: false
    }
    ,TyLe: {
      type: sequelize.FLOAT,
      allowNull: false,
      default: null
    }
    ,DonGia: {
      type: sequelize.INTEGER,
      allowNull: false,
      default: null
    }
},
{
    timestamps: false,
    freezeTableName: true
})

const klcv_namhoc = db.define('klcv_namhoc',
{
  ID_NamHoc: {
      type: sequelize.STRING(25),
      primaryKey: true,
      unique: true,
      allowNull: false
    }
    ,Ten_NamHoc: {
      type: sequelize.STRING(25),
      allowNull: false,
      default: null
    }
},
{
    timestamps: false,
    freezeTableName: true
})

const klcv_ngach = db.define('klcv_ngach',
{
  ID_Ngach: {
      type: sequelize.INTEGER,
      primaryKey: true,
      unique: true,
      allowNull: false
    }
    ,Ten_Ngach: {
      type: sequelize.STRING(255),
      allowNull: false,
      default: null
    }
    ,DinhMuc_GD: {
      type: sequelize.INTEGER,
      allowNull: false,
      default: null
    }
    ,DinhMuc_NCKH: {
      type: sequelize.INTEGER,
      allowNull: false,
      default: null
    }
    ,DinhMuc_HDK: {
      type: sequelize.INTEGER,
      allowNull: false,
      default: null
    }
},
{
    timestamps: false,
    freezeTableName: true
})

const klcv_nhatky = db.define('klcv_nhatky',
{
  ID: {
      type: sequelize.INTEGER,
      primaryKey: true,
      unique: true,
      allowNull: false
    }
    ,TaiKhoan: {
      type: sequelize.STRING(45),
      allowNull: false,
      default: null
    }
    ,TenTaiKhoan: {
      type: sequelize.STRING(45),
      allowNull: false,
      default: null
    }
    ,Ngay: {
      type: sequelize.STRING(45),
      allowNull: false,
      default: null
    }
    ,Gio: {
      type: sequelize.STRING(45),
      allowNull: false,
      default: null
    }
    ,HanhDong: {
      type: sequelize.STRING(45),
      allowNull: false,
      default: null
    }
    ,ThamChieu: {
      type: sequelize.STRING(45),
      allowNull: false,
      default: null
    }
},
{
    timestamps: false,
    freezeTableName: true
})

const klcv_phanhoi = db.define('klcv_phanhoi',
{
  ID_PhanHoi: {
      type: sequelize.INTEGER,
      primaryKey: true,
      unique: true,
      allowNull: false
    }
    ,ID_GiangVien: {
      type: sequelize.STRING(25),
      allowNull: true,
      default: null
    }
    ,TieuDe: {
      type: sequelize.STRING(255),
      allowNull: true,
      default: null
    }
    ,NoiDung: {
      type: sequelize.TEXT,
      allowNull: true,
      default: null
    }
    ,TinhTrang: {
      type: sequelize.INTEGER,
      allowNull: false,
      default: "0"
    }
},
{
    timestamps: false,
    freezeTableName: true
})




const klcv_quyen = db.define('klcv_quyen',
{
  ID_Quyen: {
      type: sequelize.INTEGER,
      primaryKey: true,
      unique: true,
      allowNull: false
    }
    ,Ten_Quyen: {
      type: sequelize.STRING(255),
      allowNull: false,
      default: null
    }
},
{
    timestamps: false,
    freezeTableName: true
})



const klcv_thanhvien = db.define('klcv_thanhvien',
{
  ma_tv: {
      type: sequelize.INTEGER,
      primaryKey: true,
      unique: true,
      allowNull: false
    }
    ,ten_tv: {
      type: sequelize.STRING(255),
      allowNull: false,
      default: null
    }
    ,taikhoan: {
      type: sequelize.STRING(255),
      allowNull: false,
      default: null
    }
    ,matkhau: {
      type: sequelize.STRING(255),
      allowNull: false,
      default: null
    }
    ,quyen: {
      type: sequelize.INTEGER,
      allowNull: false,
      default: "2"
    }

},
{
    timestamps: false,
    freezeTableName: true
})


db.sync({force: true})

module.exports = {
  User,Data,klcv_bomon,klcv_chitiet_cv,klcv_chitiet_hdcm,klcv_chitiet_hdkhcn,klcv_chucvu,klcv_giangvien,klcv_hdcm
,klcv_hdgd
,klcv_hdkhcn
,klcv_heso
,klcv_hocphan
,klcv_ketqua
,klcv_khoa
,klcv_luong
,klcv_namhoc
,klcv_ngach
,klcv_nhatky
,klcv_phanhoi
,klcv_quyen
,klcv_thanhvien
}
