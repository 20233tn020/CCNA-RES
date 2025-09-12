
  const preguntasBase = [
    {
      texto: " How do TCP and UDP differ in the way that they establish a connection between two endpoints?",
      opciones: ["TCP uses the three-way handshake, and UDP does not guarantee message delivery.",
                 "TCP uses synchronization packets, and UDP uses acknowledgment packets.", 
                 " UDP provides reliable message transfer, and TCP is a connectionless protocol",
                 " UDP uses SYN, SYN ACK, and FIN bits in the frame header while TCP uses SYN, SYN ACK, and ACK bits."],
      correcta: [0]
    },
    {
      texto: " In which way does a spine-and-leaf architecture allow for scalability in a network when additional access ports are required?",
      opciones: ["A spine switch and a leaf switch can be added with redundant connections between them",
                 "A spine switch can be added with at least 40 GB uplinks.", 
                 "A leaf switch can be added with connections to every spine switch. ",
                 "A leaf switch can be added with a single connection to a core spine switch."],
      correcta: [2]
    },
    {
      texto: " Several new coverage cells are required to improve the Wi-Fi network of an organization. Which two standard designs are recommended? (Choose two.)",
      opciones: ["5GHz provides increased network capacity with up to 23 nonoverlapping channels",
                 " 5GHz channel selection requires an autonomous access point", 
                 " Cells that overlap one another are configured to use nonoverlapping channels.",
                 " Adjacent cells with overlapping channels use a repeater access point",
                " For maximum throughput, the WLC is configured to dynamically set adjacent access points to the channel."],
      correcta: [0,2]
    },
    {
      texto: " What are two differences between optical-fiber cabling and copper cabling? (Choose two.)",
      opciones: [" A BNC connector is used for fiber connections",
                 " The glass core component is encased in a cladding", 
                 " The data can pass through the cladding",
                 " Light is transmitted through the core of the fiber",
                 "Fiber connects to physical interfaces using RJ-45 connections"
               ],
      correcta: [1,3]
    },
    {
      texto:"Which technology is used to improve web traffic performance by proxy caching? ",
      opciones: ["WSA",
                 "Firepower ",
                 "ASA ",
                 "FireSIGHT"
               ],
      correcta: [0]
    },
    {
  texto: "The OSPF Hello protocol performs which of the following tasks? (Choose two.)",
    opciones: [
        "It provides dynamic neighbor discovery.",
        "It detects unreachable neighbors in 90 second intervals.",
        "It maintains neighbor relationships.",
        "It negotiates correctness parameters between neighboring interfaces.",
        "It uses timers to elect the router with the fastest links as the designated router.",
        "It broadcasts hello packets throughout the internetwork to discover all routers that are running OSPF."],
    correcta: [0,2]
    },
    {
    texto: "What are two requirements for an HSRP group? (Choose two.)",
    opciones: [
        "exactly one active router",
        "one or more standby routers",
        "one or more backup virtual routers",
        "exactly one standby active router",
        "exactly one backup virtual router"
    ],
    correcta: [0,1]
    },    
      {                    
      texto:"Which WAN topology has the highest degree of reliability?",
      opciones: ["point-to-point",
                 "router-on-a-stick", 
                 " full mesh",
                 " hub-and-spoke"
               ],
      correcta: [2]
    },              
     {                    
      texto:"What causes a port to be placed in the err-disabled state?",
      opciones: ["nothing plugged into the port",
                 "link flapping ", 
                 " latency ",
                 "shutdown command issued on the port"
               ],
      correcta: [1]
    },              
     {                    
      texto:  "A wireless administrator has configured a WLAN; however, the clients need access to a less congested 5-GHz network for their voice quality. Which action must be taken to meet the requirement?",
      opciones: ["enable Band Select",
                 "enable DTIM", 
                 "enable RX-SOP",
                 "enable AAA override"
               ],
      correcta: [0]
    },
  {
    texto: "R1 as an NTP server must have:\n✑ NTP authentication enabled\n✑ NTP packets sourced from Interface loopback 0\n✑ NTP stratum 2\n✑ NTP packets only permitted to client IP 209.165.200.225\nHow should R1 be configured?",
    opciones: [
      "ntp authenticate ntp authentication-key 2 sha1 CISCO123 ntp source Loopback0 ntp access group server-only 10 ntp master 2 ! access-list 10 permit udp host 209.165.200.225 any eq 123",
      "ntp authenticate ntp authentication-key 2 md5 CISCO123 ntp interface Loopback0 ntp access group server-only 10 ntp stratum 2 ! access-list 10 permit 209.165.200.225",
      "ntp authenticate ntp authentication-key 2 md5 CISCO123 ntp source Loopback0 ntp access group server-only 10 ntp master 2 ! access-list 10 permit 209.165.200.225",
      "ntp authenticate ntp authentication-key 2 md5 CISCO123 ntp source Loopback0 ntp access group server-only 10 ntp stratum 2 ! access-list 10 permit udp host 209.165.200.225 any eq 123"
    ],
    correcta: [3]
  },
  {
    "texto": "What is represented by the word \"R20\" within this JSON schema?",
    "opciones": ["Value", "Array", "Object", "Key"],
    "Image": "IMG/Q-1252.png",
    "correcta": [0]
  },
{
      texto: "What is the role of nonoverlapping channels in a wireless environment?",
      opciones: ["to increase bandwidth", "to stabilize the RF environment", "  to allow for channel bonding ", "to reduce interference"],
      correcta: [3]
    },
    {
      texto: " What are two advantages of implementing a controller-based architecture instead of traditional network architecture? (Choose two.)",
      opciones: [" It allows for seamless connectivity to virtual machines.", "It increases security against denial-of-service attacks.", "It supports complex and high-scale IP addressing schemes.", " It enables configuration task automation."," It provides increased scalability and management options. "],
      correcta: [3,4]
    },
 {                    
      texto:  "  Which two statements about the purpose of the OSI model are accurate? (Choose two.)",
      opciones: ["  Defines the network functions that occur at each layer",
                 "  Facilitates an understanding of how information travels throughout a network ", 
                 "  Changes in one layer do not impact other layer ",
                 " Ensures reliable data delivery through its layered approach"
               ],
      correcta: [0,1]
    },
        {                    
      texto:  " Which three statements about MAC addresses are correct? (Choose three.)",
      opciones: ["  To communicate with other devices on a network, a network device must have a unique MAC address",
                 "  The MAC address is also referred to as the IP address", 
                 "  The MAC address of a device must be configured in the Cisco IOS CLI by a user with administrative privileges",
                 "  A MAC address contains two main components, the first of which identifies the manufacturer of the hardware and the second of which uniquely identifies the hardware",
                 "  An example of a MAC address is 0A:26:B8:D6:65:90",
                 " A MAC address contains two main components, the first of which identifies the network on which the host resides and the second of which uniquely identifies the host on the network"
               ],
      correcta: [0,3,4]
    },
  {
    texto: "Which type of wireless encryption is used for WPA2 in preshared key mode?",
    opciones: [
      "AES-128",
      "TKIP with RC4",
      "AES-256 ",
      "RC4"
    ],
    correcta: [2]
  },
  {
    texto: "Which command prevents passwords from being stored in the configuration as plain text on a router or switch?",
    opciones: [
      "enable secret",
      "enable password",
      "service password-encryption ",
      "username cisco password encrypt"
    ],
    correcta: [2]
  },
  {
    "texto": "What is a difference between an IPv6 multicast address and an IPv6 anycast address?",
    "opciones": [
      "An IPv6 multicast address uses the prefix 2002::/15 and forwards to one destination, and an IPv6 anycast address uses the prefix ff00:/8 and forwards to any destination in a group.",
      "A packet sent to an IPv6 multicast address is delivered to one or more destinations at once, but a packet sent to an IPv6 anycast address is routed to the closest interface with that address.",
      "IPV6 multicast addresses are used to transition from IPv4 to IPv6, and IPv6 anycast addresses are used for address aggregation in an IPv6-only environment.",
      "An IPV6 multicast address is assigned to numerous interfaces within a subnet, but an IPv6 anycast address is used for a predefined group of nodes in an all-IPv6 routers group."
    ],
    "correcta": [1]
  },
  {
    "texto": "Which syslog message logging level displays interface line protocol up/down events?",
    "opciones": ["informational", "alerts", "debugging", "notifications"],
    "correcta": [3]
  }
  ];



  let preguntas = [];
  let index = 0, correctas = 0, timerInterval;
  let segundos = 0, minutos = 0;
  let enPausa = false;
  let respuestasSeleccionadas = [];
  let historialRespuestas = [];
  let permitirPausaGlobal = false;
  let permitirTermiarGlobal = false;  
  let simuladorFinalizado = false; 



//personalizar simulador
let preguntasPersonalizadas = [];
let tiempoLimite = 0; // en minutos
let tiempoTotalSegundos = 0; // tiempo total permitido en segundos
let tiempoTranscurridoSegundos = 0; // lo que ha pasado
let penalizacionAcumuladaSegundos = 0;
let penalizacionIntervalo = null; // Para controlar intervalos repetidos
let mostrarTimerGlobal = true;
let mostrarRespuestasGlobal = true;

//boton de personalizacion
const btn_configurar = document.getElementById("btn-configurar");
btn_configurar.style.display = 'inline-block';

//btn de rango de presonalizacion mostrar antes que inicie el simualdor
const btn_R = document.getElementById("btn-configurar-rango");
btn_R.style.display ='inline-block';

//btn de timer para que no aparezca sin antes iniciar el simulador
const timer =document.getElementById("timer");
timer.style.display ='none';

//brn para que no aparezca el numero de pregunta sin antes que  incie el simualdor
const question = document.getElementById("question-number");
question.style.display = 'none';

document.getElementById("btn-configurar").addEventListener("click", () => {
  // Recuperar valores guardados (si existen)
  const savedConfig = JSON.parse(sessionStorage.getItem("simuladorConfig") || "{}");
  const savedDesde = savedConfig.desde || '';
  const savedNumPreguntas = savedConfig.numPreguntas || '';
  const savedTiempo = savedConfig.tiempo || '';
  const savedPermitirPausa = savedConfig.permitirPausa || false;
  const savedPermitirTeminar = savedConfig.permitirTerminar || false;
  const savedMostrarTimer = savedConfig.mostrarTimer !== undefined ? savedConfig.mostrarTimer : true;
  const savedMostrarRespuestas = savedConfig.mostrarRespuestas !== undefined ? savedConfig.mostrarRespuestas : true;
  Swal.fire({
    title: '⚙️ Configure your simulator',
    html: `
      <input id="swal-desde" type="number" min="1" max="${preguntasBase.length}" 
             placeholder="Start from question # (optional)" 
             value="${savedDesde}" class="my-swal-input" />
      <input id="swal-num" type="number" min="1" max="${preguntasBase.length}" 
             placeholder="Number of questions (máx: ${preguntasBase.length})" 
             value="${savedNumPreguntas}" class="my-swal-input" />
      <input id="swal-time" type="number" min="1" placeholder="Time limit in minutes" 
             value="${savedTiempo}" class="my-swal-input" />
      <label for="swal-pausa" class="my-swal-label">
        <input type="checkbox" id="swal-pausa" ${savedPermitirPausa ? 'checked' : ''} />
        Allow pausing the exam
      </label>
      
      <label for="swal-terminar" class="my-swal-label">
        <input type="checkbox" id="swal-terminar" ${savedPermitirTeminar ? 'checked' : ''} />
       allow to finish the exam
      </label>
      <label for="swal-timer" class="my-swal-label">
        <input type="checkbox" id="swal-timer" ${savedMostrarTimer ? 'checked' : ''} />
        Show timer during exam
      </label>
      
      <label for="swal-respuestas" class="my-swal-label">
        <input type="checkbox" id="swal-respuestas" ${savedMostrarRespuestas ? 'checked' : ''} />
        Show correct answers after validation
      </label>

      <label style="color: #6c757d; font-style: italic; display: block; margin-top: 10px;">
          Note: The questions are maintained in the same order and format as in the PDF document.
      </label>
    `,
    customClass: {
      popup: 'my-swal-container',
      confirmButton: 'btn btn-primary',
      cancelButton: 'btn btn-secondary'
    },
    showCancelButton: true,
    confirmButtonText: 'Save configuration',
    cancelButtonText: 'Cancel',
    focusConfirm: false,
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    },
    preConfirm: () => {
      const numPreguntas = parseInt(document.getElementById("swal-num").value);
      const tiempo = parseInt(document.getElementById("swal-time").value);
      const permitirPausa = document.getElementById("swal-pausa").checked;
      const permitirTerminar = document.getElementById("swal-terminar").checked;
      const mostrarTimer = document.getElementById("swal-timer").checked;
      const mostrarRespuestas = document.getElementById("swal-respuestas").checked;
      const desde = parseInt(document.getElementById("swal-desde").value) || 1;

      if (!numPreguntas || numPreguntas < 1 || numPreguntas > preguntasBase.length) {
        Swal.showValidationMessage(`Invalid number of questions`);
        return false;
      }
      if (!tiempo || tiempo < 1) {
        Swal.showValidationMessage(`The minimum time must be at least 1 minute.`);
        return false;
      }
      if (desde < 1 || desde > preguntasBase.length) {
        Swal.showValidationMessage(`Invalid start question number`);
        return false;
      }

       return { numPreguntas, tiempo, permitirPausa, permitirTerminar, mostrarTimer, mostrarRespuestas, desde };
    }
  }).then((result) => {
    if (result.isConfirmed) {
      const { numPreguntas, tiempo, permitirPausa, permitirTerminar, mostrarTimer, mostrarRespuestas, desde } = result.value;
      const inicio = desde - 1;

      if (inicio + numPreguntas > preguntasBase.length) {
        Swal.fire({
          icon: 'error',
          title: '❌ Not enough questions',
          text: `Only ${preguntasBase.length - inicio} questions available starting from #${desde}.`,
          customClass: {
            popup: 'custom-popup',
            title: 'custom-title',
            text: 'custom-text'
          },
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        });
        return;
      }

      // Guardar configuración en sessionStorage
       sessionStorage.setItem("simuladorConfig", JSON.stringify({
        numPreguntas, tiempo, permitirPausa, permitirTerminar, mostrarTimer, mostrarRespuestas, desde
      }));

      // Aplicar configuración
      preguntasPersonalizadas = preguntasBase.slice(inicio, inicio + numPreguntas);
      tiempoLimite = tiempo;
      permitirPausaGlobal = permitirPausa;
      permitirTermiarGlobal = permitirTerminar;
      mostrarTimerGlobal = mostrarTimer;
      mostrarRespuestasGlobal = mostrarRespuestas;

      Swal.fire({
        icon: 'success',
        title: 'Configuration saved',
        text: `They will be used ${numPreguntas} questions and ${tiempo} minutes of time.`,
        timer: 1500,
        showConfirmButton: false,
        customClass: {
          popup: 'custom-popup',
          title: 'custom-title',
          text: 'custom-text'
        },
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      });

      document.getElementById("btn-empezar").disabled = false;
    }
  });
});




//************


//************
function iniciarSimulador() {
  simuladorFinalizado = false;
  document.getElementById("btn-terminar").disabled = true;
  btn_configurar.style.display = 'none';
  btn_R.style.display = 'none';

    timer.style.display = mostrarTimerGlobal ? 'inline-block' : 'none';
  Swal.fire({
    title: 'How do you want to start?',
    text: 'Choose a simulation mode:',
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: 'Normal Mode',
    cancelButtonText: 'Random Mode',
    confirmButtonColor: '#0d6efd',
    cancelButtonColor: '#20c997',
    allowOutsideClick: false,
    allowEscapeKey: false,
      showClass: {
    popup: 'animate__animated animate__fadeInDown'
  },
  hideClass: {
    popup: 'animate__animated animate__fadeOutUp'
  },
    customClass: {
      popup: 'my-swal-container',
   confirmButton: 'btn-normal',
    cancelButton: 'btn-random'
    },
  }).then((result) => {
if (!result.isConfirmed) {
  timer.style.display = mostrarTimerGlobal ? 'inline-block' : 'none';
  question.style.display = 'inline-block';
  const base = preguntasPersonalizadas.length > 0
    ? preguntasPersonalizadas
    : preguntasBase;

  preguntas = base
    .slice()
    .sort(() => Math.random() - 0.5);
} else {
  timer.style.display = mostrarTimerGlobal ? 'inline-block' : 'none';
  question.style.display = 'inline-block';
  preguntas = preguntasPersonalizadas.length > 0
    ? [...preguntasPersonalizadas]
    : [...preguntasBase];
}


  //  activarPantallaCompleta();
    
   // document.addEventListener("visibilitychange", detectarCambioPestana);
  //  window.addEventListener("blur", detectarCambioVentana);
    document.addEventListener("contextmenu", bloquearClickDerecho);
    document.addEventListener("keydown", bloquearTeclasDesarrollador);
    

    if (preguntasPersonalizadas.length === 0) {
      tiempoLimite = 0;
      permitirPausaGlobal = true;
      permitirTermiarGlobal = true
      mostrarTimerGlobal = true;
      timer.style.display = 'inline-block';
    }

    index = 0;
    correctas = 0;
    segundos = 0;
    minutos = 0;
    enPausa = false;
    historialRespuestas = [];

    tiempoTranscurridoSegundos = 0;
    tiempoTotalSegundos = tiempoLimite * 60;

    actualizarTiempo();
    clearInterval(timerInterval);
    timerInterval = setInterval(actualizarTiempo, 1000);
    mostrarPregunta(index);

    document.getElementById("btn-empezar").disabled = true;
    const btnTerminar = document.getElementById("btn-terminar");
if (preguntasPersonalizadas.length > 0) {
  btnTerminar.style.display = permitirTermiarGlobal ? "inline-block" : "none";
  btnTerminar.disabled = !permitirTermiarGlobal;
} else {
  // si no hay preguntas personalizadas, mostrar siempre
  btnTerminar.style.display = "inline-block";
  btnTerminar.disabled = false;
}


    // Mostrar u ocultar el botón de pausa
    if (preguntasPersonalizadas.length > 0) {
      document.getElementById("btn-pausa").style.display = permitirPausaGlobal ? "inline-block" : "none";
      document.getElementById("btn-pausa").disabled = !permitirPausaGlobal;

      document.getElementById("btn-terminar").disabled = permitirTermiarGlobal ? "inline-block" : "none";
      document.getElementById("btn-terminar").disabled = !permitirTermiarGlobal;
    } else {
      document.getElementById("btn-pausa").style.display = "inline-block";
      document.getElementById("btn-pausa").disabled = false;
    }

    document.getElementById("btn-reanudar").style.display = "none";

    if (tiempoLimite > 0) {
      tiempoTotalSegundos = tiempoLimite * 60;
      tiempoTranscurridoSegundos = 0;
    }
  });
}

function actualizarTiempo() {
  if (enPausa || simuladorFinalizado) return;
 if (!mostrarTimerGlobal && tiempoLimite === 0) return;
  segundos++;
  tiempoTranscurridoSegundos++;

  if (segundos >= 60) {
    minutos++;
    segundos = 0;
  }

  // Verificar si ya se cumplió el tiempo total
  if (tiempoLimite > 0 && tiempoTranscurridoSegundos >= tiempoTotalSegundos) {
    terminarSimulador(true); // terminar automáticamente por tiempo
    return;
  }

 if (mostrarTimerGlobal) {
    document.getElementById("timer").textContent =
      `⏱ ${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
  }
}


function mostrarPregunta(i) {
  try {
    if (i >= preguntas.length) return mostrarResumen();

    const pregunta = preguntas[i];
    respuestasSeleccionadas = [];

    // Validar que opciones exista
    if (!Array.isArray(pregunta.opciones)) {
      console.error("Pregunta sin opciones:", pregunta);
      document.getElementById("options").innerHTML = "<p class='text-danger'>⚠️ This question has no options configured.</p>";
      return;
    }

    // Mostrar número de pregunta y texto
    document.getElementById("question-number").textContent = `QUESTION #${i + 1}`;
    document.getElementById("question").textContent = pregunta.texto;

    // Mostrar imagen si existe
    const imagenCont = document.getElementById("question-image");
    imagenCont.innerHTML = pregunta.Image
      ? `<div class="text-center"><img src="${pregunta.Image}" alt="Image not available." class="img-fluid rounded mb-3 custom-img"></div>`
      : "";

    // Preparar y mezclar opciones
    let opcionesConInfo = pregunta.opciones.map((texto, idx) => ({
      texto,
      indiceOriginal: idx,
      correcta: pregunta.correcta.includes(idx)
    }));
    opcionesConInfo = mezclarArray(opcionesConInfo);

    // Mostrar opciones
    const opcionesCont = document.getElementById("options");
    opcionesCont.innerHTML = "";
    opcionesConInfo.forEach((opcion, j) => {
      const div = document.createElement("div");
      div.classList.add("option");
      div.innerHTML = `<strong>${String.fromCharCode(65 + j)}.</strong> ${opcion.texto}`;
      div.onclick = () => {
        if (!enPausa) seleccionarRespuesta(div, opcion.indiceOriginal);
      };
      opcionesCont.appendChild(div);
    });

    // Actualizar barra de progreso
    let progreso = (i / preguntas.length) * 100;
    document.getElementById("progress-bar").style.width = `${progreso}%`;

    // Activar botones de validar
    document.getElementById("btn-validar").style.display = "block";
    document.getElementById("btn-validar").disabled = false;
    document.getElementById("btn-validarr").style.display = "block";
    document.getElementById("btn-validarr").disabled = false;

} catch (err) {
  console.error("Error al mostrar pregunta:", err);

  const opcionesCont = document.getElementById("options");
  opcionesCont.innerHTML = `
    <div class="error-loading-container text-center mt-4 animate__animated animate__fadeIn">
      <p class="error-text-gradient animate__animated animate__pulse animate__infinite">
        ⚠️ Something went wrong...<br>Redirecting to the next question
      </p>
      <div class="galaxy-spinner mt-3"></div>
    </div>
  `;

  const espera = Math.floor(Math.random() * 2000) + 3000; // entre 3–5 segundos
  setTimeout(() => {
    if (index + 1 < preguntas.length) {
      index++;
      mostrarPregunta(index);
    } else {
      mostrarResumen();
    }
  }, espera);
}
}






function seleccionarRespuesta(div, j) {
  if (simuladorFinalizado || enPausa) return;
  const indexSeleccionado = respuestasSeleccionadas.indexOf(j);
  if (indexSeleccionado >= 0) {
    respuestasSeleccionadas.splice(indexSeleccionado, 1);
    div.style.background = '#333';
  } else {
    respuestasSeleccionadas.push(j);
    div.style.background = '#0d6efd';
  }
}

function mezclarArray(array) {
  let copia = array.slice();
  for (let i = copia.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}



  function arraysIguales(a, b) {
    // Compara si dos arrays tienen los mismos elementos (sin importar el orden)
    if (a.length !== b.length) return false;
    let sortedA = [...a].sort();
    let sortedB = [...b].sort();
    return sortedA.every((v, i) => v === sortedB[i]);
  }

function validarRespuesta() {
  if (simuladorFinalizado) return;
  const correcta = preguntas[index].correcta;

  if (respuestasSeleccionadas.length === 0) {
    if (mostrarRespuestasGlobal) {
      Swal.fire({
        title: '¡Attention!',
        text: 'Please select at least one option before confirming.',
        icon: 'warning',
        timer: 1500,
        customClass: { popup: 'custom-popup', title: 'custom-title', text: 'custom-text' },
        showClass: { popup: 'animate__animated animate__fadeInDown' },
        hideClass: { popup: 'animate__animated animate__fadeOutUp' }
      });
    }
    return;
  }

  const validarBtn = document.getElementById("btn-validar");
  const vvlidarbtn = document.getElementById("btn-validarr");
  validarBtn.disabled = true;
  vvlidarbtn.disabled = true;

  const esCorrecta = arraysIguales(respuestasSeleccionadas, correcta);
  const algunaCorrecta = respuestasSeleccionadas.some(idx => correcta.includes(idx));

  // ⚡ Solo mostrar SweetAlert si la opción está habilitada
  if (mostrarRespuestasGlobal) {
    if (esCorrecta) {
      Swal.fire({
        title: '✅ Correct!',
        text: 'You chose the right answer.',
        icon: 'success',
        timer: 1200,
        showConfirmButton: false,
        toast: true,
        position: 'top-end',
        timerProgressBar: true,
        customClass: { popup: 'swal-green' }
      });
    } else if (algunaCorrecta) {
      const respuestasCorrectas = correcta.map(i => preguntas[index].opciones[i]).join("<br>• ");
      Swal.fire({
        title: '⚠️ Almost!',
        html: `<p>You selected some correct answers, but not all.</p>
               <p><strong>Correct answer${correcta.length > 1 ? 's' : ''}:</strong><br>• ${respuestasCorrectas}</p>`,
        icon: 'warning',
        timer: 2500,
        showConfirmButton: false,
        toast: true,
        position: 'top-end',
        timerProgressBar: true,
        customClass: { popup: 'swal-orange' }
      });
    } else {
      const respuestasCorrectas = correcta.map(i => preguntas[index].opciones[i]).join("<br>• ");
      Swal.fire({
        title: '❌ Incorrect',
        html: `<p>You selected the wrong option.</p>
               <p><strong>Correct answer${correcta.length > 1 ? 's' : ''}:</strong><br>• ${respuestasCorrectas}</p>`,
        icon: 'error',
        timer: 3000,
        showConfirmButton: false,
        position: 'top-end',
        toast: true,
        timerProgressBar: true,
        customClass: { popup: 'swal-red' }
      });
    }
  }

  // Gamificación siempre se actualiza, aunque no muestres Swal
  if (esCorrecta) correctas++;
  updateGamification(esCorrecta);

  // Guardar en historial
  historialRespuestas.push({
    pregunta: preguntas[index].texto,
    imagen: preguntas[index].Image || null,
    opciones: preguntas[index].opciones,
    correcta: preguntas[index].correcta,
    seleccionada: [...respuestasSeleccionadas]
  });

  if (historialRespuestas.length === 1) {
    document.getElementById("btn-terminar").disabled = false;
  }

  index++;
  setTimeout(() => {
    mostrarPregunta(index);
    validarBtn.disabled = false;
    vvlidarbtn.disabled = false;
  }, 1600);
}


function mostrarResumen() {
    simuladorFinalizado = true;
    document.getElementById("btn-terminar").disabled = true;
    // Aparece el boton de personalizacion
    btn_configurar.style.display = 'inline-block';
    timer.style.display = mostrarTimerGlobal ? 'inline-block' : 'none';
    question.style.display = 'inline-block';
    btn_R.style.display = 'inline-block';

    clearInterval(timerInterval);
const totalPreguntas = preguntas.length;
const correctasFinal = correctas;
const incorrectas = totalPreguntas - correctasFinal; // 👈 incluye no contestadas
const porcentaje = totalPreguntas > 0 
  ? Math.round((correctasFinal / totalPreguntas) * 100) 
  : 0;

    document.getElementById("progress-bar").style.width = "100%";
    document.getElementById("btn-validar").style.display = "none";
    
    // Guardar configuración
const configuracion = {
  modo: preguntasPersonalizadas.length > 0 ? "Personalizado" : "Normal",
  cantidadPreguntas: preguntas.length, // Total de preguntas del examen
  preguntasRespondidas: historialRespuestas.length, // Preguntas contestadas
  tiempoLimite: tiempoLimite,
  permitirPausa: permitirPausaGlobal,
  permitirTerminar: permitirTermiarGlobal
};

localStorage.setItem("configuracion", JSON.stringify(configuracion));
    
    // Calcula el color según el porcentaje
    let colorPorcentaje;
    if (porcentaje >= 80) {
        colorPorcentaje = '#28a745'; // verde (success)
    } else if (porcentaje >= 50) {
        colorPorcentaje = '#ffc107'; // anaranjado (warning)
    } else {
        colorPorcentaje = '#dc3545'; // rojo (danger)
    }

    const porcentajeHtml = `<span style="color: ${colorPorcentaje}; font-weight: 700;">${porcentaje}%</span>`;

    Swal.fire({
        title: '¡Simulation completed! 🎓',
  html: `
    <p><strong>Total Questions:</strong> ${totalPreguntas}</p>
    <p><strong>Correct:</strong> ${correctasFinal}</p>
    <p><strong>Incorrect:</strong> ${incorrectas}</p>
    <p><strong>Percentage:</strong> ${porcentajeHtml}</p>
    <p><strong>Time:</strong> ${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}</p>
  `,
        icon: 'info',
        showCancelButton: true,
        confirmButtonText: '🔍 see answers',
        cancelButtonText: '🔁 try again',
        confirmButtonColor: '#0d6efd',
        cancelButtonColor: '#6c757d',
        allowOutsideClick: false,
        allowEscapeKey: false,
        customClass: {
            popup: 'custom-popup',
            title: 'custom-title',
            htmlContainer: 'custom-text',
            confirmButton: 'btn-normal',
            cancelButton: 'btn-random'
        },
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }
    }).then((r) => {
        if (r.isConfirmed) {
            // Guarda en localStorage antes de redirigir (incluyendo la configuración)
            localStorage.setItem("configuracion", JSON.stringify(configuracion));
            localStorage.setItem("revision", JSON.stringify(historialRespuestas));
            localStorage.setItem("historialRespuestas", JSON.stringify(historialRespuestas));
            localStorage.setItem("preguntas", JSON.stringify(preguntas));
            sessionStorage.setItem("examenCompletado", "true");
            window.location.href = "revision.html";
        } else {
            // Reiniciar simulador
            document.getElementById("btn-empezar").disabled = false;
            document.getElementById("btn-pausa").disabled = true;
            document.getElementById("btn-validar").style.display = "none";
            document.getElementById("btn-validarr").style.display = "none";
            document.getElementById("question").textContent = "";
            document.getElementById("options").innerHTML = "";
            document.getElementById("progress-bar").style.width = "0%";
            document.getElementById("timer").textContent = "⏱ 00:00";

            // Resetear estado
            historialRespuestas = [];
            index = 0;
            correctas = 0;
            minutos = 0;
            segundos = 0;
            simuladorFinalizado = false;
            btn_configurar.style.display = 'inline-block';
            timer.style.display ='inline-block';
            question.style.display = 'inline-block';
            btn_R.style.display = 'inline-block';
        }
    });
}



function pausarExamen() {
  if (!permitirPausaGlobal) return;
  enPausa = true;
  document.getElementById("btn-pausa").disabled = true;
  document.getElementById("btn-reanudar").style.display = "inline-block";
  document.getElementById("btn-validar").style.display = "none";
  document.getElementById("btn-validarr").style.display = "none";
}


function reanudarExamen() {
  enPausa = false;
  document.getElementById("btn-pausa").disabled = false;
  document.getElementById("btn-reanudar").style.display = "none";
  // Mantener btn-empezar deshabilitado al reanudar
  document.getElementById("btn-empezar").disabled = true;
  document.getElementById("btn-validar").style.display = "inline-block";
  document.getElementById("btn-validarr").style.display = "inline-block";
}



function terminarSimulador(forzado = false) {
  clearInterval(timerInterval);
  
  // Guardar configuración (esto debe ir al principio de la función)
  const configuracion = {
    modo: preguntasPersonalizadas.length > 0 ? "Personalizado" : "Normal",
    cantidadPreguntas: preguntas.length,
    preguntasRespondidas: historialRespuestas.length,
    tiempoLimite: tiempoLimite,
    permitirPausa: permitirPausaGlobal,
    permitirTerminar: permitirTermiarGlobal,
    mostrarTimer: mostrarTimerGlobal,
    mostrarRespuestas: mostrarRespuestasGlobal
  };

localStorage.setItem("configuracion", JSON.stringify(configuracion));
  
  if (!forzado) {
    document.getElementById("btn-terminar").disabled = true;
    clearInterval(timerInterval); // Detiene el cronómetro temporalmente

    Swal.fire({
      title: 'Do you want to finish the simulator?',
      text: 'Only the answers you have given so far are evaluated.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, finish',
      cancelButtonText: 'No, continue',
      confirmButtonColor: '#dc3545',
      cancelButtonColor: '#6c757d',
      allowOutsideClick: false,
      allowEscapeKey: false,
      customClass: {
        popup: 'custom-popup',
        title: 'custom-title',
        text: 'custom-text',
        confirmButton: 'btn-normal',
        cancelButton: 'btn-random'
      },
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    }).then((result) => {
      if (result.isConfirmed) {
        simuladorFinalizado = true;
        // Aparece el boton de personalizacion:
        btn_configurar.style.display = 'inline-block';
        btn_R.style.display = 'inline-block';
        timer.style.display = 'inline-block';
        question.style.display = 'inline-block';
        
const totalPreguntas = preguntas.length;
const correctasFinal = correctas;
const incorrectas = totalPreguntas - correctasFinal; // 👈 incluye no contestadas
const porcentaje = totalPreguntas > 0 
  ? Math.round((correctasFinal / totalPreguntas) * 100) 
  : 0;
        const tiempo = `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;

        // Guardar configuración y respuestas para revisión
        localStorage.setItem("configuracion", JSON.stringify(configuracion));
        localStorage.setItem("revision", JSON.stringify(historialRespuestas));
        localStorage.setItem("historialRespuestas", JSON.stringify(historialRespuestas));
        localStorage.setItem("preguntas", JSON.stringify(preguntas));

        // Determinar color del porcentaje
        let colorPorcentaje;
        if (porcentaje >= 80) {
          colorPorcentaje = '#28a745'; // verde
        } else if (porcentaje >= 50) {
          colorPorcentaje = '#ffc107'; // anaranjado
        } else {
          colorPorcentaje = '#dc3545'; // rojo
        }
        const porcentajeHtml = `<span style="color: ${colorPorcentaje}; font-weight: 700;">${porcentaje}%</span>`;

        Swal.fire({
          title: 'Simulation completed!',
  html: `
    <p><strong>Total Questions:</strong> ${totalPreguntas}</p>
    <p><strong>Correct:</strong> ${correctasFinal}</p>
    <p><strong>Incorrect:</strong> ${incorrectas}</p>
    <p><strong>Percentage:</strong> ${porcentajeHtml}</p>
    <p><strong>Time:</strong> ${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}</p>
  `,
          icon: 'info',
          showCancelButton: true,
          confirmButtonText: '🔍 see answers',
          cancelButtonText: '🔁 try again',
          confirmButtonColor: '#0d6efd',
          cancelButtonColor: '#6c757d',
          allowOutsideClick: false,
          allowEscapeKey: false,
          customClass: {
            popup: 'custom-popup',
            title: 'custom-title',
            htmlContainer: 'custom-text',
            confirmButton: 'btn-normal',
            cancelButton: 'btn-random'
          },
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        }).then((r) => {
          if (r.isConfirmed) {
                  sessionStorage.setItem("examenCompletado", "true");
            window.location.href = "revision.html";
          } else {
            document.getElementById("btn-empezar").disabled = false;
            document.getElementById("btn-pausa").disabled = true;
            document.getElementById("btn-validar").style.display = "none";
            document.getElementById("btn-validarr").style.display = "none";
            document.getElementById("question").textContent = "";
            document.getElementById("options").innerHTML = "";
            document.getElementById("progress-bar").style.width = "0%";
            document.getElementById("timer").textContent = "⏱ 00:00";

            // Resetear estado
            historialRespuestas = [];
            index = 0;
            correctas = 0;
            minutos = 0;
            segundos = 0;
            // Reiniciar simulador
            btnConfigurar.style.display = 'none';
            btn_R.style.display = 'inline-block';
            timer.style.display = 'inline-block';
            question.style.display = 'inline-block';
          }
        });
      } else {
        enPausa = false; // por si acaso
        document.getElementById("btn-terminar").disabled = false;

        // No reiniciar el tiempo si el simulador ya fue marcado como finalizado
        if (!simuladorFinalizado && !enPausa) {
          clearInterval(timerInterval); // Limpiamos primero por si hay duplicados
          timerInterval = setInterval(actualizarTiempo, 1000);
        } else {
          clearInterval(timerInterval); // detenerlo por si acaso
        }
      }
    });
  } else {
    // Mostrar resultado por tiempo agotado
    // Ya no debe dejar interactuar
    // Deshabilitamos botones para evitar interacción:
    // Habilita el boton de personalizar
    document.getElementById("btn-validar").disabled = true;
    document.getElementById("btn-validarr").disabled = true;
    document.getElementById("btn-pausa").disabled = true;
    document.getElementById("btn-reanudar").style.display = "none";
    btn_configurar.style.display = 'inline-block';
    btn_R.style.display = 'inline-block';
    timer.style.display = mostrarTimerGlobal ? 'inline-block' : 'none';
    question.style.display = 'inline-block';
    // Finalizar directamente y mostrar resultados
    simuladorFinalizado = true;

 const totalPreguntas = preguntas.length;
const correctasFinal = correctas;
const incorrectas = totalPreguntas - correctasFinal;
const porcentaje = totalPreguntas > 0 
  ? Math.round((correctasFinal / totalPreguntas) * 100) 
  : 0;

    const tiempo = `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;

    // Guardar configuración y respuestas para revisión
    localStorage.setItem("configuracion", JSON.stringify(configuracion));
    localStorage.setItem("revision", JSON.stringify(historialRespuestas));
    localStorage.setItem("historialRespuestas", JSON.stringify(historialRespuestas));
    localStorage.setItem("preguntas", JSON.stringify(preguntas));

    // Determinar color del porcentaje
    let colorPorcentaje;
    if (porcentaje >= 80) {
      colorPorcentaje = '#28a745'; // verde
    } else if (porcentaje >= 50) {
      colorPorcentaje = '#ffc107'; // anaranjado
    } else {
      colorPorcentaje = '#dc3545'; // rojo
    }
    const porcentajeHtml = `<span style="color: ${colorPorcentaje}; font-weight: 700;">${porcentaje}%</span>`;

    Swal.fire({
      title: '⏰ Time out',
  html: `
    <p><strong>Total Questions:</strong> ${totalPreguntas}</p>
    <p><strong>Correct:</strong> ${correctasFinal}</p>
    <p><strong>Incorrect:</strong> ${incorrectas}</p>
    <p><strong>Percentage:</strong> ${porcentajeHtml}</p>
    <p><strong>Time:</strong> ${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}</p>
  `,
      icon: 'info',
      confirmButtonText: '🔍 see answers',
      confirmButtonColor: '#0d6efd',
      allowOutsideClick: false,
      allowEscapeKey: false,
      customClass: {
        popup: 'custom-popup',
        title: 'custom-title',
        htmlContainer: 'custom-text',
        confirmButton: 'btn-normal'
      },
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    }).then(() => {
            sessionStorage.setItem("examenCompletado", "true");
      window.location.href = "revision.html";
    });
  }
}
/*----------------*/ 
const streakMessages = [
  { min: 7, max: 19, message: streak => `🔥 Great! ${streak} correct answers in a row!` },
  { min: 20, max: 39, message: streak => `🚀 Amazing! You're on fire with ${streak} correct answers!` },
  { min: 40, max: 59, message: streak => `🌟 Incredible! ${streak} correct answers streak!` },
  { min: 60, max: 99, message: streak => `🏆 Legendary! ${streak} correct answers, unstoppable!` },
  { min: 100, max: Infinity, message: streak => `💥 Mythic! ${streak} correct answers streak! Unbelievable!` }
];

// Variables de control
let currentStreak = 0;
let maxStreak = 0;
let totalXP = 0;
let unlockedBadges = [];

// Crear contenedor para alertas de gamificación una sola vez
if (!document.getElementById('custom-gami-alert-container')) {
  const container = document.createElement('div');
  container.id = 'custom-gami-alert-container';
  document.body.appendChild(container);
}

function updateGamification(isCorrect) {
  if (isCorrect) {
    currentStreak++;
    totalXP += 10;

    if (currentStreak > maxStreak) maxStreak = currentStreak;

    console.log("Current streak:", currentStreak);

    // Si la racha es múltiplo de 5 (7, 10, 15, 20, 25...) y >= 7
    if (currentStreak >= 7 && currentStreak % 5 === 0) {
      const rule = streakMessages.find(r => currentStreak >= r.min && currentStreak <= r.max);
      if (rule) {
        console.log("Mostrar alerta:", rule.message(currentStreak));
        showCustomGamiAlert(rule.message(currentStreak), 10 * currentStreak);
      }
    }

  } else {
    currentStreak = 0;
  }
}

function showCustomGamiAlert(message, xp) {
  const container = document.getElementById('custom-gami-alert-container');

  // Limpiar alertas anteriores si existen para evitar acumulación
  container.innerHTML = '';

  const alertDiv = document.createElement('div');
  alertDiv.className = 'custom-gami-alert';

  alertDiv.innerHTML = `
    <div class="custom-gami-icon">🔥</div>
    <div>
      <strong>${message}</strong><br>
      +${xp} XP earned!
    </div>
  `;

  container.appendChild(alertDiv);

  setTimeout(() => alertDiv.classList.add('custom-gami-show'), 10);

  setTimeout(() => {
    alertDiv.classList.remove('custom-gami-show');
    setTimeout(() => alertDiv.remove(), 500);
  }, 3000);
}


/**/ 
  window.addEventListener("DOMContentLoaded", () => {
    const btnTerminar = document.getElementById("btn-terminar");
    if (btnTerminar) {
      btnTerminar.disabled = true;
      
    }
  });



function quitarRestriccionesAntiTrampa() {
  document.removeEventListener("visibilitychange", detectarCambioPestana);
  window.removeEventListener("blur", detectarCambioVentana);
  document.removeEventListener("contextmenu", bloquearClickDerecho);
  document.removeEventListener("keydown", bloquearTeclasDesarrollador);
}


preguntasBase.forEach((pregunta, index) => {
  if (!pregunta.Image) {
    console.warn(`⚠️ Pregunta ${index + 1} no tiene campo "Image"`);
  } else if (typeof pregunta.Image !== 'string') {
    console.error(`❌ Pregunta ${index + 1} tiene un campo "Image" inválido:`, pregunta.Image);
  } else {
    // Comprobar si la Imagen existe probando a cargarla
    const img = new Image();
    img.src = pregunta.Image;
    img.onerror = () => {
      console.error(`❌ Imagen no encontrada para la pregunta ${index + 1}: "${pregunta.Image}"`);
    };
  }
});


// ALERTAS DE ANTI TRAMPA ///////////////////////////////////////////
/*
function activarPantallaCompleta() {
  const elem = document.documentElement;
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { // Safari
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { // IE11
    elem.msRequestFullscreen();
  }
}
function salirPantallaCompleta() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { // Safari
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { // IE11
    document.msExitFullscreen();
  }
}
*/
let alertaPenalizacionActiva = false;


  
/*
function detectarCambioPestana() {
  if (document.hidden) {
    aplicarPenalizacion("You can't switch tabs!");
  }
}

function detectarCambioVentana() {
  aplicarPenalizacion("You can't change windows!");
}
*/
function bloquearClickDerecho(e) {
  e.preventDefault();
  aplicarPenalizacion("Right click disabled!");
}

function bloquearTeclasDesarrollador(e) {
  if (
    e.key === "F12" ||
    (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key))
  ) {
    e.preventDefault();
    aplicarPenalizacion("Code inspector blocked!");
  }
}
/*
document.addEventListener("fullscreenchange", () => {
  if (!document.fullscreenElement && !simuladorFinalizado) {
    aplicarPenalizacion("Exiting fullscreen is not allowed!");
  }
});
*/

