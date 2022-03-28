beepBoop = (name, secondName, thirdName) => {
    let man = {};
    if (name !== null && name !== undefined && secondName !== null && secondName !== undefined && thirdName !== null && thirdName !== undefined) {
        man = {name: name, secondName: secondName, thirdName: thirdName}
    }
    
    return man;
    
}

pipaPupa = (man) => {
    const a = man.split(" ");
    console.log(beepBoop(a[0], a[1], a[2]));
    return beepBoop(a[0], a[1], a[2]);
    // ВОТ ЭТО ВЫЗОВ ФУНКЦИИ beepBoop()
}

zalupa = () => {
    alert("Хуясе")
}

ponos = (value) => {
    console.log(value);
}

man = (genders) => {
    let g = null;
    genders.forEach(el => {
        if (el.checked === true) {
            g = el.value
        }  
    });

    return g;
}

validation = (user) => {
    if (user.mail === "" || user.fio === "") {
 
         if (user.mail === "") {
            const wrong =  document.getElementById("mail");
            wrong.classList.add("govno__wrong");
         } else {
            const mail = document.getElementById("mail");
            mail.classList.remove("govno__wrong");
         }
 
         if (user.fio === "") {
            const wrong =  document.getElementById("fio");
            wrong.classList.add("govno__wrong");
         } else {
            const fio = document.getElementById("fio");
            fio.classList.remove("govno__wrong");
         }
         return false;
    }
    else {
        const mail = document.getElementById("mail");
        mail.classList.remove("govno__wrong");
        const fio = document.getElementById("fio");
        fio.classList.remove("govno__wrong");
        return true
    }
 
 };

govno = () => {
  const mail = document.getElementById("mail").value;
  const fio = document.getElementById("fio").value;
  const country = document.getElementById("country").value;
  const genders = document.getElementsByName("gender");
  const gender = man(genders);
  const user = {mail: mail, fio: fio, country: country, gender: gender}
  const val = validation(user);

  console.log(user, val);  
}


