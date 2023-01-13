
let bestWPM = []
let bestWPM_30 = []
let UserPass = localStorage.getItem("password")
let date1  = []
let date2 =  []
async function GetBests() {
  await $.ajax("https://63b9659a4482143a3f1024cb.mockapi.io/Apilar", {
    type: "GET",
    success: (res) => {
      res.map(item =>{
        if (item.password == UserPass) {
          item.bg = "#424447"
        }
      date1.push(item)
      date2.push(item)
      })

      for (let i = 0; i < res.length; i++) {
        bestWPM.push(Number(res[i].wpm))
        bestWPM_30.push(Number(res[i].wpm_30))
      }
     bestWPM = bestWPM.sort().reverse()
     bestWPM_30 = bestWPM_30.sort().reverse()

      Render(date1, date2)
    },
    error: (err) => {
      console.log(err, "Err keldi");
    }})
}


GetBests()

let BEsts = []
let BEsts_30 = []

let son = 0
let son2 = 0
let son_30 = 0
let son2_30 = 0
let idnex1 = 0
let index2 = 0

function Render(date1, date2) {





  for (let i = 0; i < bestWPM.length; i++) {
   for(let k = 0; k < date1.length; k++){
      if (bestWPM[i] == Number(date1[k].wpm)) {
        son = k
        idnex1 = i
        son2++
    }
  } 
  if (son2 != 0) {
      BEsts.push(date1[son])
      date1.splice(son, 1)
}
}

 BEsts.length > 0 && BEsts.map((user,index) => {
    let card = `
      <div class="d-flex w-100 pt-3 px-2 justify-content-center align-items-center rounded-2" style="background-color: ${user.bg}">
        <span>${index + 1}   </span>
        <div class ="d-flex justify-content-between w-100">
          <div>
          <sub>
          <p class = "p-0 m-0 username">${user.name}</p>
          </sub>
          <span class = "user_infos">${user.group}</span>
          </div>

          <p>${user.wpm} wpm</p>
        </div>
      </div>
    `
    $(".Bests_15").append(card)
})









  for (let i = 0; i < bestWPM_30.length; i++) {
    for(let k = 0; k < date2.length; k++){
       if (bestWPM_30[i] == Number(date2[k].wpm_30)) {
         son_30 = k
         index2 = i
         son2_30++
     }
   } 

console.log(bestWPM_30);

   if (son2_30 != 0) {
       BEsts_30.push(date2[son_30])
       date2.splice(son_30, 1)
   }

 }
 
  BEsts_30.length > 0 && BEsts_30.map((user,index) => {
     let card = `
       <div class="d-flex w-100 pt-3 px-2 justify-content-center align-items-center rounded-2" style="background-color: ${user.bg}">
         <span>${index + 1}   </span>
         <div class ="d-flex justify-content-between w-100">
           <div>
           <sub>
           <p class = "p-0 m-0 username">${user.name}</p>
           </sub>
           <span class = "user_infos">${user.group}</span>
           </div>
 
           <p>${user.wpm_30} wpm</p>
         </div>
       </div>
     `
     $(".Bests_30").append(card)
   })
}