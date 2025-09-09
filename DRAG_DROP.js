
let currentExercise = 1;
const exercises = document.querySelectorAll('.ejercicio');
const totalExercises = exercises.length;

const currentExSpan = document.getElementById('current-ex');
const totalExSpan = document.getElementById('total-ex');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

totalExSpan.textContent = totalExercises;

function showExercise(num) {
  exercises.forEach(ex => ex.style.display = 'none'); // oculta todos

  const current = document.querySelector(`.ejercicio[data-ejercicio="${num}"]`);
  if (current) {
    current.style.display = 'block'; // muestra solo el actual
  }

  currentExercise = num;
  currentExSpan.textContent = num;

  prevBtn.disabled = (num === 1);
  nextBtn.disabled = (num === totalExercises);
}

prevBtn.addEventListener('click', () => {
  if (currentExercise > 1) {
    showExercise(currentExercise - 1);
  }
});

nextBtn.addEventListener('click', () => {
  if (currentExercise < totalExercises) {
    showExercise(currentExercise + 1);
  }
});

// Mostrar el primer ejercicio al cargar
showExercise(currentExercise);



// ANIMACIONES Y VALIDAR RESPUESTAS 
function allowDrop(ev) {
  ev.preventDefault();
  ev.currentTarget.classList.add('over');
}

// Comienza arrastre
function dragStart(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

// Finaliza arrastre
function dragEnd(ev) {
  ev.currentTarget.classList.remove('over');
}

// Soltar en zona
function drop(ev) {
  ev.preventDefault();
  ev.currentTarget.classList.remove('over');

  const data = ev.dataTransfer.getData("text");
  const draggedElement = document.getElementById(data);

  const oldParent = draggedElement.parentNode;

  if (ev.currentTarget.querySelector('.drag-source') === null) {
    ev.currentTarget.textContent = '';
    ev.currentTarget.appendChild(draggedElement);

    if (oldParent.classList.contains('drag-target')) {
      oldParent.textContent = oldParent.dataset.original || oldParent.dataset.tipo;
      oldParent.style.backgroundColor = '';
    }
  } else {
    Swal.fire({
      icon: 'warning',
      text: 'This box already has an item.',
      timer: 1200,
      showConfirmButton: false
    });
  }
}


// Verificar respuestas por ejercicio
function verificarTodo(ejercicioId) {
  const ejercicio = document.querySelector(`.ejercicio[data-ejercicio="${ejercicioId}"]`);
  const targets = ejercicio.querySelectorAll('.drag-target');

  //  Aquí defines las respuestas correctas para cada ejercicio
  const respuestasEjercicios = {
    1: {
      FTP: ['uses ports 20 and 21', 'uses TCP', 'provides reliability when loading an IOS image upon boot up'],
      TFTP: ['uses port 69', 'does not require user authentication', 'uses UDP']
    },
    2: {
      M23: [
        '172.28.228.144/23'
      ],
      M21: [
        '172.28.228.144/21'
      ],
       M25: [
        '172.28.228.144/25'
       ]
       ,
       M29: [
        '172.28.228.144/29'
       ],
       M18: [
        '172.28.228.144/18'
       ]
    },
    3: {
      NO: [
        'NIC vendor OUI'
      ],
      NM: [
        'NIC MAC address'
      ],
      DG: [
        'default gateway' 
      ],
      HA: [ 'host IP address'
      ],
      SM: [
        'subnet mask'
      ]
    },
    4:{
      TCP:['sends transmissions in sequence','transmits packets as a stream','uses a lower transmission rate to ensure reliability'],
      UDP:['transmissions include an 8-byte header','transmits packets individually','uses a higher transmission rate to support latency-sensitive applications']
    },
   5:{
       TCP:['FTP','SMTP','SSH'],
      UDP:['DHCP','SNMP','TFTP']
    },
   6:{
       Connection_Oriented:['SMTP','FTP','SSH'],
      Connectionless:['VolP','SNMP','TFTP']
    },
    7:{
       TCP:['HTTP','SMTP','Telnet'],
      UDP:['DNS','RTP','SNMP']
    },
    8:{
       Collapsed_Core:['single device handles the core and the distribution layer','more cost-effective than other options','most appropriate for small network designs'],
      Three_Tier:['enhances network availability','separate devices handle the core and the distribution layer']
    },
    9:{
       TCP:['requires the client and the server to establish a connection before sending the packet','supports reliable data transmission'],
      UDP:['transmitted based on data contained in the packet without the need for a data channel','provides best-effort service']
    },
    10:{
       Global_Unicast:['2001:db8:600d:cafe::123','3ffe:e54d:620:a87a::f00d'],
      Unique_Local:['fcba:926a:e8e:7a25:b1:c6d2:1a76:8fdc','fd6d:c83b:5cef:b6b2::1']
    },
    11:{
       Global_Unicast:['3ffe:e54d:620:a87a::f00d','2001:db8:600d:cafe::123'],
      Multicast:['ff05::1:3'],
      Link_Local_U:['fe80::a00:27ff:feeb:89aa']
    }, 
    12:{
       Anycast:['assigned to more than one interface','used exclusively by a non-host device'],
      Multicast:['derived from the FF00::/8 address range','provides one-to-many communications'],
      Unicast:['identifies an interface on an IPv6 device','includes link-local and loopback addresses']
    },
    13:{
      Global_Unicast_Address:['equivalent to public IPv4 addresses','routable and reachable via the Internet'],
      Link_Local_Address:['attached to a single subnet','configured only once per interface']
    },    
    14:{
      mauo:['FF05::23:becf:22:1111'],
      auclipv6:['FE80::abcdf:ffff:12de:3992'],
      apfri:['FD00:0000:0000:1a2d:a153:3992:a19d:ccca'],
      aurdp:['2001:DB8::bced:1234:456d:aacc']
    },
    15:{
        ULA:['private IPv6 addresses','IPv6 addresses that begin with FD','may be used by multiple organizations at the same time'],
        LLA:['serve as next-hop addresses','unable to serve as destination addresses']
    },
    16:{
      GU:['2001:db8:600d:cafe::123'],
      LLU:['fe80::a00:27ff:feeb:89aa'],
      M:['ff05:1:3'],
      UL:['fcba:926a:e8e:7a25:b1:c6d2:1a76:8fdc']
    },
    17:{
      LLU:['attached to a single subnet','configured only once per interface'],
      ULA:['addresses with prefix FC00::/7','addressing for exclusive use internally without Internet routing']
    },
    18:{
      TCP:['provides support for retransmission of lost packets','guarantees packet delivery','uses a 32-bit sequence number'],
      UDP:['ideal for voice traffic','requires less computer resources','offers minimal overhead within a packet']
    },
    19:{
      TCP:['supports reliable data transmission','used to reliably share files between devices'],
      UDP:['provides best-effort service','appropriate for streaming operations with minimal latency']
    },
    20:{
      ANT:['CNAME'],
      ADO:['SOA'],
      CDAU:['NS'],
      CNI:['AAAA'],
      SRSL:['PTR']
    },
    21:{
     GU:['3ffe:e54d:620:a87a::f00d'],
     LLU:['fe80::a00:27ff:feeb:89aa'],
     M:['ff05::1:3'],
     UL:['fd6d:c83b:5cef:b6b2::1']
    },
    22:{
      BA:['192.168.1.255'],
      DG:['192.168.1.1'],
      HIP:['192.168.1.20'],
      IS:['192.168.1.254'],
      MA:['B8-76-3F-7C-57-DF']
    },
    23:{
  DEL: ['removes a resource'],
  GET: ['retrieves a list of a resource\'s URIs'],
  POST: ['creates a resource and returns its URI in the response header'],
  PATCH: ['updates a resource using instructions included in the request body'],
  PUT: ['creates or replaces a previously modified resource using information in the request body']
},
24:{
  CBN: [
    'Allows better control over how networks work and how networks are configured',
    'Enables networks to integrate with applications through APIs',
    'Provisions resources from a centralized location'
  ],
  TN: [
    'New devices are configured using the physical infrastructure',
    'Requires a distributed control plane'
  ]
},
25:{
  CBN: [
    'this type leverages controllers to handle network management',
    'this type provides a centralized view of the network'
  ],
  TN: [
    'this type implements changes individually at each device',
    'maintenance costs are higher than with other networking options'
  ]
},
26:{
  agent: ['easy-to-manage deployment option that may lack scalability'],
  agentless: ['device hardware that runs without embedded management features'],
  provision: ['to automatically install or deploy a configuration or update'],
  pull: ['daemon that determines when the central authority has updates available'],
  push: ['model in which the central server sends updates to nodes on an as-needed basis']
},
27:{
  CM: [
    "this type of technology enables consistent configuration",
    "puppet is used for this type of technology"
  ],
  ORCH: [
    "this type provides automation across domains",
    "ansible is used for this type of technology"
  ]
},
28:{
  DOC: ["2001:DB8::bced:1234:456d:aacc"],
  ULA: ["FD00:0000:0000:1a2d:a153:3992:a19d:ccca"],
  LLA: ["FE80::abcf:fff:12de:3992"],
  SLM: ["FF05::23:becf:22:1111"]
},
29:{
  CORE: [
    "provides high-speed backbone connectivity",
    "serves as the aggregator for campus blocks"
  ],
  DIST: [
    "implements network access policy",
    "aggregates links from Access Layer"
  ],
  ACCESS: [
    "provides network access to the user",
    "represents the network edge"
  ]
},
    
30:{
  AAAA: ["correlates a host name with an IP address (IPv6)"],
  CNAME: ["aliases one name to another"],
  NS: ["correlates a domain with its authoritative name servers"],
  PTR: ["supports reverse name lookups"],
  SOA: ["associates the domain serial number with its owner"]
},
31:{
  "1": ["enable"],
  "2": ["configure terminal"],
  "3": ["enable secret $hf1@4fs"],
  "4": ["exit"]
},
32:{
  AUTHN: ["verifies identity"],
  AUTHZ: ["verifies access rights"],
  ACCT: ["tracks activity"],
  COA: ["updates session attributes"]
},
33:{
  "802.11a": ["operates in the 5 GHz band only (54 Mbps)"],
  "802.11b": ["supports 11 Mbps max"],
  "802.11g": ["operates in 2.4 GHz band only (54 Mbps)"],
  "802.11n": ["operates in 2.4 GHz and 5 GHz bands"],
  "802.11ac": ["operates in 5 GHz band only (>100 Mbps)"]
},
34:{
  CC: [
    "single device handles the core and the distribution layer",
    "more cost-effective than other options",
    "most appropriate for small network designs"
  ],
  TT: [
    "enhances network availability",
    "separate devices handle the core and the distribution layer"
  ]
},
35:{
  DOMAIN: ["component of a URL that indicates the location or organization type"],
  CACHE: ["local database of address mappings that improves name resolution performance"],
  RESOLVER: ["in response to client requests, queries a name server for IP address information"],
  DNS: ["service that maps hostname to IP addresses"],
  NOLOOKUP: ["disables DNS services on a Cisco device"]
},
36:{
  TCP: [
    "sends transmissions in sequence",
    "transmits packets as a stream",
    "uses a lower transmission rate to ensure reliability"
  ],
  UDP: [
    "transmissions include an 8-byte header",
    "transmits packets individually",
    "uses a higher transmission rate to support latency-sensitive applications"
  ]
},
37:{
  AUTHN: [
    "validates user credentials",
    "secures access to routers"
  ],
  AUTHZ: [
    "allows the user to change to enable mode",
    "limits the user's access permissions"
  ],
  ACCT: [
    "logs session statistics",
    "records user commands"
  ]
},
38:{
  MULTI: ["One or more clients can be hosted with the same physical or virtual infrastructure"],
  DEMAND: ["Resources are dedicated only when necessary instead of on a permanent"],
  RESIL: ["Tasks and data residing on a failed server can be seamlessly migrated to other physical resources"],
  SCALE: ["Resources can be added and removed as needed to support current workload and tasks"],
  WORKLOAD: ["Tasks can be migrated to different physical locations to increase efficiency or reduce cost"]
},
39:{
  AUTHN: [
    "performs user validation via TACACS+",
    "verifies 'who you are'"
  ],
  AUTHZ: [
    "It grants access to network assets, such as FTP servers",
    "It limits the services available to a user"
  ],
  ACCT: [
    "It records the duration of each connection",
    "It supports User Access Reporting"
  ]
},
40:{
  CLASS: ["the overall process of using specific criteria to differentiate traffic into categories"],
  MARK: ["set the ToS value to associate a packet with a QoS group"],
  POLICE: ["applies a specific action to packets whenever the maximum rate of packets is exceeded"],
  QUEUE: ["reduces traffic congestion by holding packets and distributing them when the available bandwidth allows"]
},
41:{
  TCP: ["HTTP", "SMTP", "Telnet"],
  UDP: ["DNS", "RTP", "SNMP"]
},
42:{
  TCP: [
    "sends transmissions in sequence",
    "transmits packets as a stream", 
    "uses a lower transmission rate to ensure reliability"
  ],
  UDP: [
    "transmissions include an 8-byte header",
    "transmits packets individually",
    "uses a higher transmission rate to support latency-sensitive applications"
  ]
},
43:{
  AUTHN: ["verifies identity"],
  AUTHZ: ["verifies access rights"],
  ACCT: ["tracks activity"],
  COA: ["updates session attribute"]
},
44:{
  INTERNET: ["1.1.1.1"],
  R2: ["10.10.13.126"],
  R3: ["10.10.13.129"],
  R4: ["10.10.13.150"],
  R5: ["10.10.13.209"],
  MPLS: ["209.165.200.30"]
},
45:{
  DS: ["entire wireless cell of an access point and the linkage to the wired network"],
  ESS: ["Wi-Fi option in which cells from different access points are linked together"],
  IBSS: ["Wi-Fi option that enables two or more clients to communicate directly without a central access point"],
  INFRA: ["Wi-Fi option based around one or more access points"],
  SSID: ["alphanumeric text string that identifies a wireless network"]
},
46:{
  "1": ["maintains an address pool"],
  "2": ["assigns IP addresses to local hosts for a configurable lease time"],
  "3": ["offers domain name server configuration"],
  "4": ["reduces the administrative burden for onboarding end users"]
},
47:{
  POLICY: ["document that outlines an organization's security goals and practices and the roles and responsibilities of the organization's personnel"],
  STANDARD: ["tactical document that sets out specific tasks and methods to maintain security"],
  AWARENESS: ["user-awareness learning level that focuses on security practices that all employees must understand and enforce"],
  EDUCATION: ["user-awareness learning level that focuses on learning about topics and practices beyond what is typically required by the user's job"],
  TRAINING: ["user-awareness learning level that focuses on teaching employees how to perform tasks specifically required by their jobs"]
},
48:{
  GUA: [
    "2001:db8:600d:cafe::123",
    "3ffe:e54d:620:a87a::f00d"
  ],
  ULA: [
    "fcba:926a:e8e:7a25:b1:c6d2:1a76:8fdc",
    "fd6d:c83b:5cef:b6b2::1"
  ]
},
49:{
  SERVER: ["network component that propagates IP addresses to hosts on the network"],
  DB: ["list of hosts on the network that are unknown to the administrative domain"],
  SPURIOUS: ["unknown DHCP server within an administrative domain"],
  TRUSTED: ["internal device under the control of the network administrator"],
  UNTRUSTED: ["default state of all interface"]
},
50:{
  DELETE: ["removes a resource from the server"],
  GET: ["reads data from the server"],
  POST: ["creates a resource on the server"],
  PUT: ["updates an entry in the database"],
  PATCH: ["updates an entry in the database"]
},
51:{
  DYNAMIC: ["allows the port to be assigned automatically to one VLAN"],
  PRIVATE: ["allows the port to communicate with others within the same community VLAN"],
  STATIC: ["allows the port to belong to one VLAN when manually configured"],
  TRUNK: ["allows the port to belong to one or more VLANs"],
  TUNNEL: ["allows the port to support a single VLAN across a service-provider network"]
},
52:{
  TCP: ["FTP", "SMTP", "SSH"],
  UDP: ["DHCP", "SNMP", "TFTP"]
},
53:{
  DNA: [
    "It provides a single interface for network security and analytics.",
    "It supports CLI templates to apply a consistent configuration to multiple devices.",
    "It uses NetFlow to analyze potential security threats and take appropriate action on that traffic."
  ],
  TRAD: [
    "It uses multiple tools and applications to analyze and troubleshoot different types of data.",
    "It manages device configurations on a per-device basis.",
    "Security is managed near the perimeter of the network with firewalls, VPNs, and IPS."
  ]
},
54:{
  "1": ["Frames received from the attached segment are processed"],
  "2": ["Switched frames received from other ports are advanced"],
  "3": ["BPDUs received from the system module are processed and transmitted"],
  "4": ["The port in the forwarding state responds to network management messages"]
},
55:{
  MON: [
    "It provides air-quality data and interference detection across all enabled channels",
    "It enables enhanced RFID-tag location tracking"
  ],
  SEN: [
    "It supports analytics for wireless performance testing",
    "It supports software that analyzes wireless frames on a remote device"
  ],
  SNI: [
    "It captures and forwards packets on a specific wireless channel",
    "It supports real-time Wi-Fi client troubleshooting when network engineers are offsite"
  ]
},
56:{
  DHCP: [
    "Holds the TCP/IP settings to be distributed to the clients",
    "Assigns a default gateway to a client",
    "Assigns IP addresses to enabled clients"
  ],
  DNS: [
    "Resolves web URLs to IP addresses",
    "Stores a list of IP addresses mapped to names"
  ]
},
57:{
  RAD: [
    "Encrypts only the password when it sends an access request",
    "Combines authentication and authorization",
    "Uses UDP"
  ],
  TAC: [
    "Encrypts the entire body of the access-request packet",
    "Separates all three AAA operations",
    "Uses TCP"
  ]
},
58:{
  DNA: [
    "overlay and underlay configuration",
    "VXLAN and LISP configuration",
    "routed access deployment"
  ],
  TRAD: [
    "STP deployment",
    "VLAN and HSRP configuration",
    "configuration via console"
  ]
},
59:{
  TCP: [
    "sends transmissions in sequence",
    "transmits packets as a stream",
    "uses a lower transmission rate to ensure reliability"
  ],
  UDP: [
    "transmissions include an 8-byte header",
    "transmits packets individually",
    "uses a higher transmission rate to support latency-sensitive applications"
  ]
},
60:{
  ANS: [
    "uses SSH for remote device communication",
    "uses YAML for fundamental configuration elements"
  ],
  CHF: [
    "uses TCP port 10002 for configuration push jobs",
    "uses Ruby for fundamental configuration elements"
  ],
  PUP: [
    "uses TCP 8140 for communication",
    "fundamental configuration elements are stored in a manifest"
  ]
},
61:{
  CN: ["Device with Ansible installed that manages target devices"],
  INV: ["Ansible file that defines the target devices upon which commands and tasks can be executed"],
  MN: ["Network device, without Ansible installed, upon which commands can be executed"],
  MOD: ["Unit of Python code to be executed"],
  PB: ["Collection of actions to perform on target devices, expressed in YAML format"],
  TSK: ["Specific action to be performed on one or more target devices"]
},
62:{
  A: ["24"],
  B: ["3"],
  G: ["3"],
  N2: ["3"],
  N5: ["24"]
},
63:{
  CS: ["client-server"],
  CAC: ["cacheable"],
  LS: ["layered system"],
  STL: ["stateless"],
  UI: ["uniform interface"]
},
64:{
  SM: [
    "Work is divided between the access point and the controller",
    "Uses the CAPWAP tunneling protocol",
    "The access points transmit beacon frames"
  ],
  AUT: [
    "Appropriate for a small-business environment",
    "Supports per device configuration and management"
  ]
},
65:{
  PER: [
    "source IP: 207.16.32.14, destination application: http",
    "source IP: 207.16.15.9, destination port: 23",
    "source IP: 207.16.16.14, destination port: 53"
  ],
  DEN: [
    "source IP: 207.16.14.7, destination port: 80",
    "source IP: 207.16.13.14, destination application: http"
  ]
},
66:{
  ACC: [
    "It records the amount of time for which a user accesses the network on a remote server",
    "It uses TACACS+ to log the configuration commands entered by a network administrator"
  ],
  AUT: [
    "It enables the device to allow user- or group-based access",
    "It restricts the CLI commands that a user can perform"
  ]
},
67:{
  ABS: ["absorption"],
  NF: ["noise floor"],
  RS: ["receiver sensitivity"],
  REF: ["reflection"],
  SNR: ["signal-to-noise ratio"]
},
68:{
  DNA: [
    "orchestrates background device configuration",
    "supports open APIs",
    "supports centralized software management"
  ],
  TRAD: [
    "relies on per-device management",
    "uses individual software management",
    "provides greater flexibility for custom and non-standard configurations"
  ]
},
69:{
  "25": ["255.255.255.128"],
  "28": ["255.255.255.240"],
  "29": ["255.255.255.248"],
  "30": ["255.255.255.252"]
},
70:{
  LLA: [
    "attached to a single subnet",
    "configured only once per interface"
  ],
  ULA: [
    "addresses with prefix FC00::/7",
    "addressing for exclusive use internally without internet routing"
  ]
},
71:{
  CO: ["SMTP", "SSH", "FTP"],
  CL: ["SNMP", "TFTP", "VoIP"]
},
72:{
  CB: [
    "focused on network",
    "user input is a policy",
    "uses white list security model"
  ],
  TRAD: [
    "focused on devices",
    "user input is a configuration",
    "uses black list security model"
  ]
},
73:{
  "1": ["BPDU received are forwarded to the system module"],
  "2": ["BPDUs received from the system module are processed and transmitted"],
  "3": ["Frames received from the attached segment are processed"],
  "4": ["Switched frames received from other ports are advanced"]
},
74:{
  "10": ["10.63.255.255"],
  "16": ["172.20.255.255"],
  "25": ["192.168.255.127"],
  "29": ["172.16.255.39"]
},
75:{
  "18": ["172.28.228.144/18"],
  "21": ["172.28.228.144/21"],
  "23": ["172.28.228.144/23"],
  "25": ["172.28.228.144/25"],
  "29": ["172.28.228.144/29"]
},
76:{
  "23": ["172.16.4.0/23"],
  "25": ["172.16.2.128/25"],
  "27": ["172.16.3.64/27"],
  "28": ["172.16.3.128/28"],
  "29": ["172.16.3.192/29"]
},
77:{
  "GET": ["GET"],
  "POST": ["POST"],
  "PUT": ["PUT"],
  "DELETE": ["DELETE"]
},
78:{
  CB: [
    "This type deploys a consistent configuration across multiple devices.",
    "Southbound APIs are used to apply configurations."
  ],
  TRAD: [
    "A distributed control plane is needed.",
    "This type requires a distributed management plane."
  ]
},
79:{
  "1": ["DHCPDISCOVER"],
  "2": ["DHCPOFFER"],
  "3": ["DHCPREQUEST"],
  "4": ["DHCPACK"]
},
80:{
  TCP: [
    "'requires the client and the server to establish a connection before sending the packet'",
    "'used to reliably share files between devices'"
  ],
  UDP: [
    "'transmitted based on data contained in the packet without the need for a data channel'",
    "'appropriate for streaming operations with minimal latency'"
  ]
},
81:{
  TCP: [
    "requires the client and the server to establish a connection before sending the packet",
    "used to reliably share files between devices"
  ],
  UDP: [
    "transmitted based on data contained in the packet without the need for a data channel",
    "appropriate for streaming operations with minimal latency"
  ]
},
82:{
  "1": ["switchport mode access"],
  "2": ["switchport port-security"],
  "3": ["switchport port-security maximum 2"],
  "4": ["switchport port-security mac address sticky"]
},
83:{
  "MITM": ["configure 802.1x authenticate"],
  "DHCP": ["configure DHCP snooping"],
  "TAGGING": ["configure the native VLAN with a nondefault VLAN ID"],
  "SWITCH": ["disable DTP"]
},
84:{
  "WFQ": ["cloud-based weighted fair queueing"],
  "CLASS": ["classification"],
  "CONG": ["congestion"],
  "POL": ["policing"],
  "SHAP": ["shaping"]
},
85:{
  "MATCH": ["area ID", "netmask", "timers"],
  "UNIQUE": ["router ID"]
},
86:{
  "FEAT": [
    "executes modules via SSH by default",
    "uses the YAML language",
    "pushes configurations to the client",
    "operates without agents"
  ]
},
87:{
  "RF": ["Dynamic RF Feature"],
  "DEPLOY": ["Easy Deployment Process"],
  "PERF": ["Optimized user performance"],
  "UPGRADE": ["Easy upgrade process"]
},
88:{
  "GUEST": ["guest operating system"],
  "HOST": ["host operating system"],
  "HYPER": ["hypervisor"],
  "THREAD": ["multithreading"],
  "VM": ["virtual machine"]
},
89:{
  "VACL": ["Configure VACL"],
  "ROOT": ["Configure root guard"],
  "BPDU": ["Configure BPDU guard"],
  "ARP": ["Configure dynamic ARP inspection"]
},
90:{
  "DNA": [
    "collects statistics and telemetry data from multiple network devices and provides a single view of network health and issues",
    "uses an inventory function to store device details in the database",
    "uses machine learning to identify and resolve issues"
  ],
  "TRAD": [
    "requires configuration on a device-by-device basis",
    "networking functions are implemented primarily on dedicated devices",
    "requires manual troubleshooting"
  ]
},
91:{
  "GUA": [
    "provides for one-to-one communication",
    "is publicly routable in the same way as IPv4 addresses"
  ],
  "ULA": [
    "is a counterpart of private IPv4 addresses",
    "allows sites to be combined without address conflicts"
  ]
},

92:{
  "COLLAPSED": [
    "single device handles the core and the distribution layer",
    "more cost-effective than other options",
    "most appropriate for small network designs"
  ],
  "THREE": [
    "enhances network availability",
    "separate devices handle the core and the distribution layer"
  ]
},
93:{
  "GUA": ["2001:db8:600d:cafe::123"],
  "LLA": ["fcba:926a:e8e7:a25cb1:c6d2:1a76:8dc"],
  "ULA": ["fdc0::a00:22ff:feeb:89aa"],
  "MULTI": ["ff05::1:3"]
},
94:{
  "TRAD": [
    "leverages Cisco Prime Infrastructure",
    "requires manual configuration of complex protocols",
    "lacks support for SDA"
  ],
  "DNA": [
    "reduces the workload for enterprise customers",
    "uses algorithms to detect security threats",
    "uses northbound APIs"
  ]
},
95:{
  "LOOKUP": ["ip domain-lookup"],
  "NAME": ["ip domain-name"],
  "HOST": ["ip host switch_1 192.168.0.1"],
  "SERVER": ["ip name-server"],
  "SHOW": ["show hosts"]
},
96:{
  "ACCT": [
    "It tracks the services that a user is using.",
    "It records the amount of network resources consumed by the user."
  ],
  "AUTH": [
    "It permits and denies login attempts.",
    "It supports local, PPP, RADIUS, and TACACS+ options."
  ],
  "AUTHZ": [
    "It assigns per-user attributes."
  ]
},
97:{
  "CBWFQ": ["CBWFQ"],
  "CQ": ["CQ"],
  "FIFO": ["FIFO"],
  "PQ": ["PQ"],
  "WFQ": ["WFQ"]
},
98:{
  "1": ["An endpoint submits a request for the IP address of a domain name."],
  "2": ["The DNS submits a request to a root DNS server."],
  "3": ["The DNS submits a request to the domain DNS server."],
  "4": ["The DNS receives a reply from the domain DNS server."],
  "5": ["The DNS responds to the endpoint."]
},
99:{
  "TRAD": [
    "implements changes via an SSH terminal",
    "manages device configurations on a per-device basis",
    "security is managed near the perimeter of the network with firewalls, VPNs, and IPS",
    "uses CLI templates to apply a consistent configuration to multiple devices at an individual location"
  ],
  "DNA": [
    "monitors the cloud for software updates",
    "uses NetFlow to analyze potential security threats throughout the network and take appropriate action on that traffic"
  ]
}


  };

  const respuestasPorGrupo = respuestasEjercicios[ejercicioId];
  if (!respuestasPorGrupo) {
    Swal.fire('Error', 'No se encontraron respuestas para este ejercicio', 'error');
    return;
  }

  let correctas = 0;
  const usados = { FTP: [], TFTP: [] };

  targets.forEach(target => {
  const tipo = target.dataset.tipo;
  const hijo = target.querySelector('.drag-source');
  const valor = hijo ? hijo.textContent.trim() : null;

  if (!usados[tipo]) {
    usados[tipo] = [];
  }

  if (valor && respuestasPorGrupo[tipo] && respuestasPorGrupo[tipo].includes(valor) && !usados[tipo].includes(valor)) {
    target.style.backgroundColor = '#77a364'; // verde
    usados[tipo].push(valor);
    correctas++;
  } else {
    target.style.backgroundColor = '#c95959'; // rojo
  }
});


  const total = targets.length;

  if (correctas === total) {
    Swal.fire('¡Very good!', 'All answers are correct', 'success');
  } else {
    Swal.fire('Check your answers', `${correctas} de ${total} correctas`, 'info');
  }
}

// Reiniciar ejercicio específico
function reiniciarTodo(ejercicioId) {
  const ejercicio = document.querySelector(`.ejercicio[data-ejercicio="${ejercicioId}"]`);
  const dragSources = ejercicio.querySelectorAll('.drag-source');
  const targets = ejercicio.querySelectorAll('.drag-target');
  const contenedorOriginal = ejercicio.querySelector('.row.drag-container');

  dragSources.forEach(source => {
  const wrapper = document.createElement('div');
  wrapper.className = 'col-md-4';
  wrapper.appendChild(source);
  contenedorOriginal.appendChild(wrapper);
});


targets.forEach(target => {
  const textoOriginal = target.dataset.original || target.dataset.tipo;
  target.innerHTML = textoOriginal;
  target.style.backgroundColor = '';
  target.classList.remove('over');
});

}

// Inicializar eventos al cargar
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.drag-source').forEach(el => {
    el.addEventListener('dragstart', dragStart);
    el.addEventListener('dragend', dragEnd);
  });

  document.querySelectorAll('.drag-target').forEach(el => {
    el.addEventListener('dragover', allowDrop);
    el.addEventListener('drop', drop);
    el.addEventListener('dragleave', ev => ev.currentTarget.classList.remove('over'));
  });
});
