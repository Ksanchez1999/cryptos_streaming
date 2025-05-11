// GLOBAL VARIABLES

let randomPin;


// INPUTS

const inputsValues = {
  user: ()=> document.getElementById("inputUser").value,
  password: ()=> document.getElementById("inputPassword").value,
  pin: ()=> document.getElementById("inputPin").value,
  profile: ()=> document.getElementById("inputProfile").value.toUpperCase(),
  days: ()=> document.getElementById("inputDays").value
}

// OUTPUTS

const outputsElements = {
  profile: document.getElementById("outputProfile"),
  pin: document.getElementById("outputPin"),
  creationDate: document.getElementById("outputCreationDate"),
  template: document.getElementById("outputTemplate")
}



// BUTTONS

const buttons = {
  netflix: document.getElementById("buttonNetflix"),
  disney: document.getElementById("buttonDisney"),
  hbo: document.getElementById("buttonHbo"),
  paramount: document.getElementById("buttonParamount"),
  vix: document.getElementById("buttonVix"),
  prime: document.getElementById("buttonPrime"),
  flujoTv1Device: document.getElementById("buttonFlujoTv1Device"),
  flujoTv3Devices: document.getElementById("buttonFlujoTv3Devices"),
  spotify: document.getElementById("buttonSpotify"),
  youtube: document.getElementById("buttonYoutube"),
  crunchyroll: document.getElementById("buttonCrunchyroll")
}



// GENERAL FUNCTIONS

function createRandomPin(){
  let pin = Math.floor(1000 + Math.random() * 9000);
  randomPin = pin;
}
createRandomPin();

function todaysDate(){
  let today = new Date();
  return today.toLocaleDateString("es-VE");
}

function createExpirationDate(){
  let today = new Date();

  if(inputsValues.days()){
    today.setDate(today.getDate() + parseInt(inputsValues.days(), 10));
    return today.toLocaleDateString("es-VE");  
  }

  today.setDate(today.getDate() + 30);
  return today.toLocaleDateString("es-VE");  
}


// GENERAL LISTENERS

document.querySelectorAll(".buttonStart").forEach(elemento => {
  elemento.addEventListener("click", () => {
    outputsElements.profile.innerText = inputsValues.profile();
    outputsElements.pin.innerText = inputsValues.pin() ? inputsValues.pin() : randomPin;
    outputsElements.creationDate.innerText = todaysDate();

    document.getElementById("screen2").classList.remove("hideScreen2");
    document.getElementById("screen1").classList.remove("showScreen1");

    document.getElementById("screen2").classList.add("showScreen2");
    document.getElementById("screen1").classList.add("hideScreen1");
  });
});


document.querySelectorAll(".copy").forEach(elemento => {
  elemento.addEventListener("click", () => {
    navigator.clipboard.writeText(elemento.innerText)

    document.getElementById("copyIcon").style.opacity = '1';

    setTimeout(function() {
      document.getElementById("copyIcon").style.opacity = '0';
    }, 1000);
  });
});


document.getElementById("returnIcon").addEventListener("click", function() {
    document.getElementById("screen2").classList.remove("showScreen2");
    document.getElementById("screen1").classList.remove("hideScreen1");

    document.getElementById("screen2").classList.add("hideScreen2");
    document.getElementById("screen1").classList.add("showScreen1");
});



// TEMPLATES LISTENERS

buttons.netflix.addEventListener("click", function() {
  outputsElements.template.innerText = `*NETFLIX* 🤩
1 ᴅɪꜱᴘᴏꜱɪᴛɪᴠᴏ | 30 ᴅɪᴀꜱ

✉️ ${inputsValues.user()}
🔒 ${inputsValues.password()}
👤 ${inputsValues.profile()}
🔐 ${inputsValues.pin() ? inputsValues.pin() : randomPin}
➡️ CADUCA EL ${createExpirationDate()}

𝚂𝙸𝙶𝚄𝙴𝙼𝙴 + 𝙲𝙾𝙼𝙴𝙽𝚃𝙰 + 𝙻𝙸𝙺𝙴 

www.instagram.com/cryptos_streaming/`;
});


buttons.disney.addEventListener("click", function() {
  outputsElements.template.innerText = `*DISNEY+* 🤩
1 ᴅɪꜱᴘᴏꜱɪᴛɪᴠᴏ | 30 ᴅɪᴀꜱ

✉️ ${inputsValues.user()}
🔒 ${inputsValues.password()}
👤 ${inputsValues.profile()}
🔐 ${inputsValues.pin() ? inputsValues.pin() : randomPin}
➡️ CADUCA EL ${createExpirationDate()}

𝚂𝙸𝙶𝚄𝙴𝙼𝙴 + 𝙲𝙾𝙼𝙴𝙽𝚃𝙰 + 𝙻𝙸𝙺𝙴 

www.instagram.com/cryptos_streaming/`;
});


buttons.hbo.addEventListener("click", function() {
  outputsElements.template.innerText = `*HBO MAX* 🤩
1 ᴅɪꜱᴘᴏꜱɪᴛɪᴠᴏ | 30 ᴅɪᴀꜱ

✉️ ${inputsValues.user()}
🔒 ${inputsValues.password()}
👤 ${inputsValues.profile()}
🔐 ${inputsValues.pin() ? inputsValues.pin() : randomPin}
➡️ CADUCA EL ${createExpirationDate()}

𝚂𝙸𝙶𝚄𝙴𝙼𝙴 + 𝙲𝙾𝙼𝙴𝙽𝚃𝙰 + 𝙻𝙸𝙺𝙴 

www.instagram.com/cryptos_streaming/`;
});


buttons.paramount.addEventListener("click", function() {
  outputsElements.template.innerText = `*PARAMOUNT+* 🤩
1 ᴅɪꜱᴘᴏꜱɪᴛɪᴠᴏ | 30 ᴅɪᴀꜱ

✉️ ${inputsValues.user()}
🔒 ${inputsValues.password()}
👤 ${inputsValues.profile()}
➡️ CADUCA EL ${createExpirationDate()}

𝚂𝙸𝙶𝚄𝙴𝙼𝙴 + 𝙲𝙾𝙼𝙴𝙽𝚃𝙰 + 𝙻𝙸𝙺𝙴 

www.instagram.com/cryptos_streaming/`;

  outputsElements.pin.innerText = "";
});


buttons.vix.addEventListener("click", function() {
  outputsElements.template.innerText = `*VIX* 🤩
1 ᴅɪꜱᴘᴏꜱɪᴛɪᴠᴏ | 30 ᴅɪᴀꜱ

✉️ ${inputsValues.user()}
🔒 ${inputsValues.password()}
👤 ${inputsValues.profile()}
➡️ CADUCA EL ${createExpirationDate()}

𝚂𝙸𝙶𝚄𝙴𝙼𝙴 + 𝙲𝙾𝙼𝙴𝙽𝚃𝙰 + 𝙻𝙸𝙺𝙴 

www.instagram.com/cryptos_streaming/`;

  outputsElements.pin.innerText = "";
});


buttons.prime.addEventListener("click", function() {
  outputsElements.template.innerText = `*PRIME VIDEO* 🤩
1 ᴅɪꜱᴘᴏꜱɪᴛɪᴠᴏ | 30 ᴅɪᴀꜱ

✉️ ${inputsValues.user()}
🔒 ${inputsValues.password()}
👤 ${inputsValues.profile()}
🔐 ${inputsValues.pin() ? inputsValues.pin() : randomPin}
➡️ CADUCA EL ${createExpirationDate()}

❌ *NO* REALIZAR COMPRAS  NI RENTAS DE PELICULAS

❌ *NO* ENTRAR A TIENDA EN AMAZON, SOLO A PRIME VIDEO

𝚂𝙸𝙶𝚄𝙴𝙼𝙴 + 𝙲𝙾𝙼𝙴𝙽𝚃𝙰 + 𝙻𝙸𝙺𝙴 

www.instagram.com/cryptos_streaming/`;
});


buttons.flujoTv1Device.addEventListener("click", function() {
  outputsElements.template.innerText = `*FLUJOTV* 🤩
1 ᴅɪꜱᴘᴏꜱɪᴛɪᴠᴏ | 30 ᴅɪᴀꜱ

👤 ${inputsValues.user()}
🔐 ${inputsValues.password()}
➡️ CADUCA EL ${createExpirationDate()}

𝚂𝙸𝙶𝚄𝙴𝙼𝙴 + 𝙲𝙾𝙼𝙴𝙽𝚃𝙰 + 𝙻𝙸𝙺𝙴 

www.instagram.com/cryptos_streaming/`;

  outputsElements.pin.innerText = "";
});


buttons.flujoTv3Devices.addEventListener("click", function() {
  outputsElements.template.innerText = `*FLUJOTV* 🤩
3 ᴅɪꜱᴘᴏꜱɪᴛɪᴠᴏs | 30 ᴅɪᴀꜱ

👤 ${inputsValues.user()}
🔐 ${inputsValues.password()}
➡️ CADUCA EL ${createExpirationDate()}

𝚂𝙸𝙶𝚄𝙴𝙼𝙴 + 𝙲𝙾𝙼𝙴𝙽𝚃𝙰 + 𝙻𝙸𝙺𝙴 

www.instagram.com/cryptos_streaming/`;

  outputsElements.pin.innerText = "";
});


buttons.spotify.addEventListener("click", function() {
  outputsElements.template.innerText = `*SPOTIFY* 🤩
1 ᴅɪꜱᴘᴏꜱɪᴛɪᴠᴏ | 30 ᴅɪᴀꜱ

✉️ ${inputsValues.user()}
🔐 ${inputsValues.password()}
➡️  CADUCA EL ${createExpirationDate()}

𝚂𝙸𝙶𝚄𝙴𝙼𝙴 + 𝙲𝙾𝙼𝙴𝙽𝚃𝙰 + 𝙻𝙸𝙺𝙴 

www.instagram.com/cryptos_streaming/`;

  outputsElements.pin.innerText = "";
});


buttons.youtube.addEventListener("click", function() {
  outputsElements.template.innerText = `*YOUTUBE PREMIUM + MUSIC* 🤩
1 ᴅɪꜱᴘᴏꜱɪᴛɪᴠᴏ | 30 ᴅɪᴀꜱ

✉️ ${inputsValues.user()}
🔐 ${inputsValues.password()}
➡️ CADUCA EL ${createExpirationDate()}

𝚂𝙸𝙶𝚄𝙴𝙼𝙴 + 𝙲𝙾𝙼𝙴𝙽𝚃𝙰 + 𝙻𝙸𝙺𝙴 

www.instagram.com/cryptos_streaming/`;

  outputsElements.pin.innerText = "";
});


buttons.crunchyroll.addEventListener("click", function() {
  outputsElements.template.innerText = `*CRUNCHYROLL* 🤩
1 ᴅɪꜱᴘᴏꜱɪᴛɪᴠᴏ | 30 ᴅɪᴀꜱ

✉️ ${inputsValues.user()}
🔒 ${inputsValues.password()}
👤 ${inputsValues.profile()}
➡️ CADUCA EL ${createExpirationDate()}

𝚂𝙸𝙶𝚄𝙴𝙼𝙴 + 𝙲𝙾𝙼𝙴𝙽𝚃𝙰 + 𝙻𝙸𝙺𝙴 

www.instagram.com/cryptos_streaming/`;

  outputsElements.pin.innerText = "";
});