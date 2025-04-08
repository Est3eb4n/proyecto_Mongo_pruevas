[// type doc
    {
        code:"TC-2015",
        name: "CC"
    },
    {
        code:"TE-2015",
        name: "CE"
    },
    {
        code:"TP-2015",
        name: "PS"
    }
]
[ // student
    {
        code:"ES-001",
        identificationType: "cc",
        firstName:"Pepe",
        lastName:"Perez",
        identification:{
            type_id: ObjectId,
            number: 203010
        },
        gender: "M",
        birthdate: "02/02/1997",
        contact:{
            email:"P.perez@mail.com",
            address: "Cl 23 # 14-15",
            city_id: ObjectId
        },
        courses: ObjectId,
        active: true
    }
]
[ // profe
    {
        code: "PF-1001",
        firstName:"Ector",
        lastName: "Romero",
        identification: {
            type_id: ObjectId,
            number:456789
        },
        email: "E.Romero@mail.com"   
    }
]
[ // ciudades
    { // # 1
         codeCity: "CT-1001",
         country:"Bogota",
         state:"Colombia"
    },
    { // # 2
         codeCity: "CT-1002",
         country:"Buenos Aires",
         state:"Agentina"
    },
    { // # 3
         codeCity: "CT-1001",
         country:"Bucaramanga",
         state:"Santander"
    },
    { // # 4
         codeCity: "CT-1001",
         country:"El cairo",
         state:"Egipto"
    },
    { // # 5
         codeCity: "CT-1001",
         country:"Florencia",
         state:"Caqueta"
    }
]
[// cursos
    {// # 1
        code: "CR-2001",
        name: "HTML BASICO",
        decription:"Corso basico de HTML",
        details:{
            credits: 50,
            hours: 20,
        },
        active: true
    },
    {// # 2
        code: "CR-2002",
        name: "CSS BASICO",
        decription:"Corso basico de CSS",
        details:{
            credits: 20,
            hours: 10,
        },
        active: true
    },
    {// # 3
        code: "CR-2003",
        name: "JavaScript BASICO",
        decription:"Corso basico de JavaScript",
        details:{
            credits: 80,
            hours: 90,
        },
        active: true
    },
    {// # 4
        code: "CR-2004",
        name: "Pyton BASICO",
        decription:"Corso basico de Pyton",
        details:{
            credits: 40,
            hours: 90,
        },
        active: true
    }
]
[// Salones de clase
    { // # 1
        code:"SC-4001",
        description:"Aqui va una descripccio",
        intencity: "x",
        capacity: 100,
        active: true
    },
    { // # 2
        code:"SC-4001",
        description:"Aqui va una descripccio",
        intencity: "x",
        capacity: 100,
        active: true
    },
    { // # 3
        code:"SC-4001",
        description:"Aqui va una descripccio",
        intencity: "x",
        capacity: 150,
        active: true
    },
    { // # 4
        code:"SC-4001",
        description:"Aqui va una descripccio",
        intencity: "x",
        capacity: 130,
        active: true
    }
]
[// temas
    {
        courses_id: ObjectId,
        code: "TM-5001",
        title:"",
        description:"",
        active:true
    },
    {
        courses_id: ObjectId,
        code: "TM-5001",
        title:"",
        description:"",
        active:true
    },
    {
        courses_id: ObjectId,
        code: "TM-5001",
        title:"",
        description:"",
        active:true
    },
    {
        courses_id: ObjectId,
        code: "TM-5001",
        title:"",
        description:"",
        active:true
    }
]
[// cronograma de cursos
    {
        courses_id: ObjectId,
        teacher_id: ObjectId,
        classRoom_id: ObjectId,
        date_Rage:{
            starDate:"08/05/2025",
            endDate:"09/05/2025"
        },
    }
]
[// inscripciones
    {
        schedule_id: ObjectId,
        student_id: ObjectId,
        registration:{
            dateNow: Date.now
        },
        rates:{
          rate: "",
          comments:""  
        },
        active: true
    }
]