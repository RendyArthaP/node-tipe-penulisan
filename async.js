// Penulisan node js dengan tipe asyncronous

// Asynchronous

const getUserAsync = (id, callback) => {
  const time = id === 1 ? 1000 : 2000
  setTimeout(() => {
    const nama = id === 1 ? 'Rendy' : "Artha"
    callback({ id, nama })
  }, time)
}

const userSatu = getUserAsync(1, (hasil) => {
  console.log(hasil)
})

const userDua = getUserAsync(2, (hasil) => {
  console.log(hasil)
})