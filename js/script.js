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
            const wrongText = document.getElementById("mail-error");
            wrongText.classList.remove('hidden'); 
            //выводим текст  и поле ошибки 
         } else {
            const mail = document.getElementById("mail");
            mail.classList.remove("govno__wrong");
            const wrongText = document.getElementById("mail-error");
            wrongText.classList.add('hidden');
            //убираем текст и поле ошибки
         }
 
         if (user.fio === "") {
            const wrong =  document.getElementById("fio");
            wrong.classList.add("govno__wrong");
            const wrongText = document.getElementById('fio-error');
            wrongText.classList.remove('hidden');
         } else {
            const fio = document.getElementById("fio");
            fio.classList.remove("govno__wrong");
            const wrongText = document.getElementById('fio-error');
            wrongText.classList.add('hidden');
         }
         return false;
    }
    else {  
        // добавляем корректную валидацию
        const mail = document.getElementById("mail");
        mail.classList.remove("govno__wrong");
        const mailText = document.getElementById('mail-error');
        mailText.classList.add('hidden');
        const fio = document.getElementById("fio");
        fio.classList.remove("govno__wrong");
        const fioText = document.getElementById('fio-error');
        fioText.classList.add('hidden');
        return true
    }
 
 };

govno = () => {
    //функция для сбора данных с формы
  const mail = document.getElementById("mail").value;
  const fio = document.getElementById("fio").value;
  const country = document.getElementById("country").value;
  const genders = document.getElementsByName("gender");
  const gender = man(genders);
  const user = {mail: mail, fio: fio, country: country, gender: gender}
  const val = validation(user);
  

  console.log(user, val); 
  
  return {user: user, val: val};
}

createUser = () => {
    //функция добавления в html строки юзера
    const userObject = govno();
    console.log(userObject);''

    if (userObject.val === true) {
        const id = "id" + Math.random().toString(16).slice(2); 
        //добавляю рандомайз айдишечки
        const parent = document.getElementById("userGovna");
        const child = document.createElement('span'); 
        child.classList.add('user-govna__user');
        const userString = "Почта: " + userObject.user.mail + " ФИО: " + userObject.user.fio + " Страна: " + userObject.user.country + " Пол: " + userObject.user.gender;
        child.textContent = userString;
        const childFrame = document.createElement('div');
        childFrame.id = id;
        childFrame.classList.add('user-govna__user__frame');
        parent.append(childFrame);
        childFrame.append(child);
        const childDelButton = document.createElement('button'); 
        childDelButton.classList.add('user-govna__user__button');
        childDelButton.textContent = 'x';
        childDelButton.onclick = () => {
            const delEl = document.getElementById(id);
            delEl.remove();
        }
        childFrame.append(childDelButton);
    } 
}

createTmpl = () => {
    //функция добавления юзера с помощью шаблона(template)
    const userObject = govno();
    if (userObject.val === true) {
        const userString = "Почта: " + userObject.user.mail + " ФИО: " + userObject.user.fio + " Страна: " + userObject.user.country + " Пол: " + userObject.user.gender;
        const tmpl = document.getElementById('tmpl').content.cloneNode(true);
        const parent = document.getElementById("userGovna");
        parent.append(tmpl);
        const span = document.getElementsByClassName('tmpl-text')[0];
        span.textContent = userString;
    }
}


