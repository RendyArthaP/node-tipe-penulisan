// Penulisan node js dengan tipe syncronous

// Synchronous
const getUserSync = (id) => {
  // Statement
  let nama = "";
  if(id === 1) {
    nama = "Rendy"
  } else {
    nama = "Artha"
  }
  return {id, nama}
}

const userSatu = getUserSync(1)
console.log(userSatu) 

const userDua = getUserSync(2)
console.log(userDua)