

function GoBests() {
  window.location.href = "TheBests.html"
}

async function Get() {
let User = await Number(localStorage.getItem("userID"))
let UserPass = await localStorage.getItem("password")

  await $.ajax("https://63b9659a4482143a3f1024cb.mockapi.io/Apilar", {
    type: "GET",
    success: (res) => {

      let status = res.some(user => user.password == UserPass)

      
      if (status) {

        res.map(item => {
          if (item.password == UserPass) {
            $(".user_nick").html(item.name)
            $(".role").html("malumot: "+ item.group)
            $(".wpm15").html(item.wpm + " wpm")
            $(".wpm30").html(item.wpm_30 + " wpm")
          }
        })

      }else{
        localStorage.removeItem("password")
        localStorage.removeItem("ThisUser")
        localStorage.removeItem("userID")
        window.location.href = "Home.html"
      }

    },
    error: (err) => {
      console.log(err, "Err keldi");
    }
  })
}

Get()


function LogOut() {
  localStorage.removeItem("password")
  localStorage.removeItem("ThisUser")
  localStorage.removeItem("userID")
  window.location.href = "index.html"
}

function GoInfo() {
  window.location.href = "Info.html"
}