let AllUsers = []
async function Render() {
  let UserPass = await localStorage.getItem("password")
 await $.ajax("https://63b9659a4482143a3f1024cb.mockapi.io/Apilar", {
    type: "GET",
    success: (res) => {
      AllUsers = res
    },
    error: (err) => {
      return err
    }
  })

  let stat = await AllUsers.some(pass => pass.password == UserPass)


  if (stat) {
    window.location.href = "Home.html"
  } else {
  }
}

Render()

let type = true
function ShowPass() {
  let inp = $(".pas_inp")
  $(".show").toggleClass("d-none")
  $(".hide").toggleClass("d-none")
if (type) {
  inp[0].attributes[0].nodeValue = "text"
  type = !type
}else{
  inp[0].attributes[0].nodeValue = "password"
  type = !type
}

}


async function CheckPass() {
  let UserPass = $(".pas_inp").val()


  let status = AllUsers.some(pass => pass.password == UserPass)


  if (status) {
    $(".cor_text").removeClass("d-none")
    $(".err_text").addClass("d-none")
    
    AllUsers.map((item, index) => {
      if (item.password == UserPass) {
        localStorage.setItem("password", item.password)
        localStorage.setItem("userID", item.id)
        localStorage.setItem("ThisUser", JSON.stringify(AllUsers[index]))
      }
    })

    window.location.href = "Home.html"

  } else {
    $(".err_text").removeClass("d-none")
    $(".cor_text").addClass("d-none")
  }
}