function password() {
    const inputDate = document.getElementById("date").value;

    // Example check (you can replace this with your logic)
    if (inputDate === "2020-01-07") {
        // Redirect to another page
        window.location.href = "here.html";
    } else {
        document.getElementById("span").innerHTML = "Senha incorreta!"
    }
}

function bgChangerBright(){
    const body = document.querySelector("body");
    body.style.background = "white";
    body.style.color = "black";
    const sect = document.querySelector("section"); 
    sect.style.background = "rgba(255, 255, 255, 0.686)";
    sect.style.color = "black";
    
}

function bgChangerDark(){
    const body = document.querySelector("body");
    body.style.background = "black";
    body.style.color = "white";
    const sect = document.querySelector("section"); 
    sect.style.background = "rgba(0, 0, 0, 0.686)";
    sect.style.color = "white";
    sect.style.backdropFilter = "blur(5px)";
    const darkbtn = document.getElementById("bg-changer-2");
    darkbtn.style.border = "1px solid white";
}