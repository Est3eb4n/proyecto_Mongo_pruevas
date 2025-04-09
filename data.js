// COMANDOS DE INSERCION
db.StudentsDB.insertMany([// estudiantes
    // 1. Corte #1 (Argentina)
    {
        _id: ObjectId("65f8d3a7c1b8e8a9d4e5f301"),
        code: "ES-001",
        firstName: "Pepe",
        lastName: "Perez",
        identification: {
            type: "CE",
            number: 203010
        },
        gender: "M",
        birthdate: "02/02/1997",
        contact: {
            email: "P.perez@mail.com",
            address: "Cl 23 # 14-15",
            cityId: ObjectId("65f8d3a7c1b8e8a9d4e5f002") // Buenos Aires, Argentina
        },
        active: true
    },
    {
        _id: ObjectId("65f8d3a7c1b8e8a9d4e5f302"),
        code: "ES-002",
        firstName: "Orlando",
        lastName: "Causa",
        identification: {
            type: "CE",
            number: 102030
        },
        gender: "M",
        birthdate: "02/05/2000",
        contact: {
            email: "O.Causas@mail.com",
            address: "Cl 31 # 26-45",
            cityId: ObjectId("65f8d3a7c1b8e8a9d4e5f002") // Buenos Aires, Argentina
        },
        active: true
    },
    {
        _id: ObjectId("65f8d3a7c1b8e8a9d4e5f303"),
        code: "ES-003",
        firstName: "Maria",
        lastName: "Molina",
        identification: {
            type: "CE",
            number: 256325
        },
        gender: "F",
        birthdate: "30/06/2005",
        contact: {
            email: "M.Molina@mail.com",
            address: "Cr 45 # 25-15",
            cityId: ObjectId("65f8d3a7c1b8e8a9d4e5f002") // Buenos Aires, Argentina
        },
        active: true
    },
    {
        _id: ObjectId("65f8d3a7c1b8e8a9d4e5f304"),
        code: "ES-004",
        firstName: "Marcela",
        lastName: "Mendez",
        identification: {
            type: "CE",
            number: 158963
        },
        gender: "F",
        birthdate: "02/02/1997",
        contact: {
            email: "M.Mendez@mail.com",
            address: "TR 23 # 24-35",
            cityId: ObjectId("65f8d3a7c1b8e8a9d4e5f002") // Buenos Aires, Argentina
        },
        active: true
    },

    // 2. Corte #2 (Bucaramanga, Colombia)
    {
        _id: ObjectId("65f8d3a7c1b8e8a9d4e5f305"),
        code: "ES-005",
        firstName: "Monica",
        lastName: "Pastas",
        identification: {
            type: "CC",
            number: 148529
        },
        gender: "F",
        birthdate: "02/08/1997",
        contact: {
            email: "M.Pastas@mail.com",
            address: "AV 32 # 24-35",
            cityId: ObjectId("65f8d3a7c1b8e8a9d4e5f003") // Bucaramanga, Colombia
        },
        active: true
    },
    {
        _id: ObjectId("65f8d3a7c1b8e8a9d4e5f306"),
        code: "ES-006",
        firstName: "Sara",
        lastName: "Sol",
        identification: {
            type: "CC",
            number: 365247
        },
        gender: "F",
        birthdate: "01/02/1987",
        contact: {
            email: "S.Sol@mail.com",
            address: "TR 02 # 35-24",
            cityId: ObjectId("65f8d3a7c1b8e8a9d4e5f003") // Bucaramanga, Colombia
        },
        active: true
    },
    {
        _id: ObjectId("65f8d3a7c1b8e8a9d4e5f307"),
        code: "ES-007",
        firstName: "Pedro",
        lastName: "Potacio",
        identification: {
            type: "CC",
            number: 789523
        },
        gender: "M",
        birthdate: "28/02/1990",
        contact: {
            email: "P.Potacio@mail.com",
            address: "TR 43 # 24-35",
            cityId: ObjectId("65f8d3a7c1b8e8a9d4e5f003") // Bucaramanga, Colombia
        },
        active: true
    },
    {
        _id: ObjectId("65f8d3a7c1b8e8a9d4e5f308"),
        code: "ES-008",
        firstName: "Natalia",
        lastName: "Nasaret",
        identification: {
            type: "CC",
            number: 205896
        },
        gender: "F",
        birthdate: "02/02/1997",
        contact: {
            email: "N.Nasaret@mail.com",
            address: "TR 23 # 24-35",
            cityId: ObjectId("65f8d3a7c1b8e8a9d4e5f003") // Bucaramanga, Colombia
        },
        active: true
    },

    // 3. Corte #3 (Florencia, Colombia)
    {
        _id: ObjectId("65f8d3a7c1b8e8a9d4e5f309"),
        code: "ES-009",
        firstName: "Natalia",
        lastName: "Mojica",
        identification: {
            type: "CC",
            number: 205896
        },
        gender: "F",
        birthdate: "02/02/1997",
        contact: {
            email: "N.Mojica@mail.com",
            address: "CL 23 # 24-35",
            cityId: ObjectId("65f8d3a7c1b8e8a9d4e5f005") // Florencia, Colombia
        },
        active: true
    },
    {
        _id: ObjectId("65f8d3a7c1b8e8a9d4e5f310"),
        code: "ES-010",
        firstName: "Esteban",
        lastName: "Briceño",
        identification: {
            type: "CC",
            number: 128294
        },
        gender: "M",
        birthdate: "02/26/1997",
        contact: {
            email: "E.Briceño@mail.com",
            address: "TR 23 # 24-35",
            cityId: ObjectId("65f8d3a7c1b8e8a9d4e5f005") // Florencia, Colombia
        },
        active: true
    },
    {
        _id: ObjectId("65f8d3a7c1b8e8a9d4e5f311"),
        code: "ES-011",
        firstName: "Santiago",
        lastName: "Acevedo",
        identification: {
            type: "CC",
            number: 206598
        },
        gender: "M",
        birthdate: "02/02/1997",
        contact: {
            email: "S.Acevedo@mail.com",
            address: "CR 23 # 20-35",
            cityId: ObjectId("65f8d3a7c1b8e8a9d4e5f005") // Florencia, Colombia
        },
        active: true
    },
    {
        _id: ObjectId("65f8d3a7c1b8e8a9d4e5f312"),
        code: "ES-012",
        firstName: "Ernesto",
        lastName: "Fonseca",
        identification: {
            type: "CC",
            number: 301598
        },
        gender: "M",
        birthdate: "02/02/1997",
        contact: {
            email: "E.Fonseca@mail.com",
            address: "Av 15 # 14-25",
            cityId: ObjectId("65f8d3a7c1b8e8a9d4e5f005") // Florencia, Colombia
        },
        active: true
    },

    // 4. Corte #4 (Bogotá, Colombia)
    {
        _id: ObjectId("65f8d3a7c1b8e8a9d4e5f313"),
        code: "ES-013",
        firstName: "Arcangel",
        lastName: "Lamaravilla",
        identification: {
            type: "CC",
            number: 102596
        },
        gender: "M",
        birthdate: "05/05/2006", // Corregido: fecha inválida (36/05/2006)
        contact: {
            email: "A.Lamaravilla@mail.com",
            address: "CR 35 # 14-25",
            cityId: ObjectId("65f8d3a7c1b8e8a9d4e5f001") // Bogotá, Colombia
        },
        active: true
    },
    {
        _id: ObjectId("65f8d3a7c1b8e8a9d4e5f314"),
        code: "ES-014",
        firstName: "Adolf",
        lastName: "Hittler",
        identification: {
            type: "CC",
            number: 365287
        },
        gender: "M",
        birthdate: "25/02/1997",
        contact: {
            email: "A.Hittler@mail.com",
            address: "Cr 75 # 35-26",
            cityId: ObjectId("65f8d3a7c1b8e8a9d4e5f001") // Bogotá, Colombia
        },
        active: true
    },
    {
        _id: ObjectId("65f8d3a7c1b8e8a9d4e5f315"),
        code: "ES-015",
        firstName: "Jophef",
        lastName: "Stalin",
        identification: {
            type: "CC",
            number: 405896
        },
        gender: "M",
        birthdate: "23/12/2000",
        contact: {
            email: "J.Stalin@mail.com",
            address: "Cr 45 # 30-25",
            cityId: ObjectId("65f8d3a7c1b8e8a9d4e5f001") // Bogotá, Colombia
        },
        active: true
    },
    {
        _id: ObjectId("65f8d3a7c1b8e8a9d4e5f316"),
        code: "ES-016",
        firstName: "Jeffry",
        lastName: "Dammer",
        identification: {
            type: "CC",
            number: 608523
        },
        gender: "M",
        birthdate: "02/02/1997",
        contact: {
            email: "J.Dammer@mail.com",
            address: "Av 15 # 14-25",
            cityId: ObjectId("65f8d3a7c1b8e8a9d4e5f001") // Bogotá, Colombia
        },
        active: true
    },

    // 5. Corte #5 (El Cairo, Egipto)
    {
        _id: ObjectId("65f8d3a7c1b8e8a9d4e5f317"),
        code: "ES-017",
        firstName: "Juaquin",
        lastName: "Phenix",
        identification: {
            type: "PS",
            number: 508963
        },
        gender: "M",
        birthdate: "05/05/1997",
        contact: {
            email: "J.Phenix@mail.com",
            address: "CR 15 # 14-25",
            cityId: ObjectId("65f8d3a7c1b8e8a9d4e5f004") // El Cairo, Egipto
        },
        active: true
    },
    {
        _id: ObjectId("65f8d3a7c1b8e8a9d4e5f318"),
        code: "ES-018",
        firstName: "Bladimir",
        lastName: "Lennin",
        identification: {
            type: "PS",
            number: 805226
        },
        gender: "M",
        birthdate: "30/06/1997",
        contact: {
            email: "B.Lennin@mail.com",
            address: "TR 65 # 24-15",
            cityId: ObjectId("65f8d3a7c1b8e8a9d4e5f004") // El Cairo, Egipto
        },
        active: true
    },
    {
        _id: ObjectId("65f8d3a7c1b8e8a9d4e5f319"),
        code: "ES-019",
        firstName: "Jonh",
        lastName: "Stephen",
        identification: {
            type: "PS",
            number: 608523
        },
        gender: "M",
        birthdate: "09/08/2001",
        contact: {
            email: "J.Stephen@mail.com",
            address: "Cl 85 # 35-25",
            cityId: ObjectId("65f8d3a7c1b8e8a9d4e5f004") // El Cairo, Egipto
        },
        active: true
    },
    {
        _id: ObjectId("65f8d3a7c1b8e8a9d4e5f320"),
        code: "ES-020",
        firstName: "Jeffry",
        lastName: "Joking",
        identification: {
            type: "PS",
            number: 608523
        },
        gender: "M",
        birthdate: "02/02/1997",
        contact: {
            email: "J.Joking@mail.com",
            address: "TR 05 # 36-25",
            cityId: ObjectId("65f8d3a7c1b8e8a9d4e5f004") // El Cairo, Egipto
        },
        active: true
    }
])
//___________________________________________________________________________________________________________________
db.TeachersDB.insertMany([ // profesores
    {
        _id: ObjectId("65f8d3a7c1b8e8a9d4e5f101"),
        code: "PF-1001",
        firstName: "Ector",
        lastName: "Romero",
        identification: {
            type: "CC",
            number: 456789
        },
        email: "E.Romero@mail.com",
        active: true
    },
    {
        _id: ObjectId("65f8d3a7c1b8e8a9d4e5f102"),
        code: "PF-1002",
        firstName: "Siomara",
        lastName: "Fonceca",
        identification: {
            type: "CC",
            number: 802596
        },
        email: "S.Fonceca@mail.com",
        active: true
    },
    {
        _id: ObjectId("65f8d3a7c1b8e8a9d4e5f103"),
        code: "PF-1003",
        firstName: "Vito",
        lastName: "Scaletta",
        identification: {
            type: "CC",
            number: 456789
        },
        email: "V.Scaletta@mail.com",
        active: true
    }
])
//___________________________________________________________________________________________________________________
db.CitiesDB.insertMany([// ciudades
    {
        _id: ObjectId("65f8d3a7c1b8e8a9d4e5f001"),
        codeCity: "CT-1001",
        country: "Colombia",
        state: "Bogotá"
    },
    {
        _id: ObjectId("65f8d3a7c1b8e8a9d4e5f002"),
        codeCity: "CT-1002",
        country: "Argentina",
        state: "Buenos Aires"
    },
    {
        _id: ObjectId("65f8d3a7c1b8e8a9d4e5f003"),
        codeCity: "CT-1003",
        country: "Colombia",
        state: "Santander",
        city: "Bucaramanga"
    },
    {
        _id: ObjectId("65f8d3a7c1b8e8a9d4e5f004"),
        codeCity: "CT-1004",
        country: "Egipto",
        state: "El Cairo"
    },
    {
        _id: ObjectId("65f8d3a7c1b8e8a9d4e5f005"),
        codeCity: "CT-1005",
        country: "Colombia",
        state: "Caquetá",
        city: "Florencia"
    }
])
//___________________________________________________________________________________________________________________
db.CoursesDB.insertMany([// cursos
    {
        _id: ObjectId("67f530bc7d0de32c19965505"),
        code: "CR-2001",
        name: "HTML BÁSICO",
        description: "Curso básico de HTML",
        details: {
            credits: 50,
            hours: 20,
            difficulty: "Principiante"
        },
        active: true,
        dateRange: {
            startDate: "08/05/2025",
            endDate: "09/05/2025"
        },
        classRoom: {
            code: "SC-4001",
            description: "Aula de tecnología básica",
            capacity: 100,
            active: true
        },
        topicId: ObjectId("65f8d3a7c1b8e8a9d4e5f201"),
        teacherIds: [
            ObjectId("65f8d3a7c1b8e8a9d4e5f101"),
            ObjectId("65f8d3a7c1b8e8a9d4e5f102")
        ]
    },
    {
        _id: ObjectId("67f530bc7d0de32c19965506"),
        code: "CR-2002",
        name: "CSS BÁSICO",
        description: "Curso básico de CSS",
        details: {
            credits: 20,
            hours: 10,
            difficulty: "Principiante"
        },
        active: true,
        dateRange: {
            startDate: "10/05/2025",
            endDate: "15/05/2025"
        },
        classRoom: {
            code: "SC-4002",
            description: "Aula de diseño web",
            capacity: 80,
            active: true
        },
        topicId: ObjectId("65f8d3a7c1b8e8a9d4e5f202"),
        teacherIds: [
            ObjectId("65f8d3a7c1b8e8a9d4e5f102"),
            ObjectId("65f8d3a7c1b8e8a9d4e5f103")
        ]
    },
    {
        _id: ObjectId("67f530bc7d0de32c19965507"),
        code: "CR-2003",
        name: "JAVASCRIPT BÁSICO",
        description: "Curso básico de JavaScript",
        details: {
            credits: 80,
            hours: 90,
            difficulty: "Intermedio"
        },
        active: true,
        dateRange: {
            startDate: "20/05/2025",
            endDate: "20/07/2025"
        },
        classRoom: {
            code: "SC-4003",
            description: "Aula de programación",
            capacity: 150,
            active: true
        },
        topicId: ObjectId("65f8d3a7c1b8e8a9d4e5f203"),
        teacherIds: [
            ObjectId("65f8d3a7c1b8e8a9d4e5f101"),
            ObjectId("65f8d3a7c1b8e8a9d4e5f103")
        ]
    },
    {
        _id: ObjectId("67f530bc7d0de32c19965508"),
        code: "CR-2004",
        name: "PYTHON BÁSICO",
        description: "Curso básico de Python",
        details: {
            credits: 40,
            hours: 90,
            difficulty: "Intermedio"
        },
        active: true,
        dateRange: {
            startDate: "25/07/2025",
            endDate: "25/09/2025"
        },
        classRoom: {
            code: "SC-4004",
            description: "Aula de programación avanzada",
            capacity: 130,
            active: true
        },
        topicId: ObjectId("65f8d3a7c1b8e8a9d4e5f204"),
        teacherIds: [
            ObjectId("65f8d3a7c1b8e8a9d4e5f102"),
            ObjectId("65f8d3a7c1b8e8a9d4e5f103")
        ]
    },
    {
        _id: ObjectId("67f530bc7d0de32c19965509"),
        code: "CR-2005",
        name: "MONGODB BÁSICO",
        description: "Curso básico de MongoDB",
        details: {
            credits: 40,
            hours: 90,
            difficulty: "Avanzado"
        },
        active: true,
        dateRange: {
            startDate: "01/10/2025",
            endDate: "01/12/2025"
        },
        classRoom: {
            code: "SC-4005",
            description: "Aula de bases de datos",
            capacity: 130,
            active: true
        },
        topicId: ObjectId("65f8d3a7c1b8e8a9d4e5f205"),
        teacherIds: [
            ObjectId("65f8d3a7c1b8e8a9d4e5f101"),
            ObjectId("65f8d3a7c1b8e8a9d4e5f103")
        ]
    }
])
//___________________________________________________________________________________________________________________
db.TopicsDB.insertMany([ // TEMAS
    {
        _id: ObjectId("65f8d3a7c1b8e8a9d4e5f201"),
        code: "TM-5001",
        title: "Fundamentos de HTML",
        description: "Conceptos básicos de estructura web con HTML",
        active: true
    },
    {
        _id: ObjectId("65f8d3a7c1b8e8a9d4e5f202"),
        code: "TM-5002",
        title: "Fundamentos de CSS",
        description: "Estilos básicos para páginas web",
        active: true
    },
    {
        _id: ObjectId("65f8d3a7c1b8e8a9d4e5f203"),
        code: "TM-5003",
        title: "JavaScript Básico",
        description: "Programación básica con JavaScript",
        active: true
    },
    {
        _id: ObjectId("65f8d3a7c1b8e8a9d4e5f204"),
        code: "TM-5004",
        title: "Python Básico",
        description: "Introducción a la programación con Python",
        active: true
    },
    {
        _id: ObjectId("65f8d3a7c1b8e8a9d4e5f205"),
        code: "TM-5005",
        title: "MongoDB Básico",
        description: "Fundamentos de bases de datos NoSQL con MongoDB",
        active: true
    }
])
//___________________________________________________________________________________________________________________
db.inscriptionsDB.insertMany([// INSCRIPCIONES
    // Inscripciones para el curso MongoDB Básico (CR-2005)
    {
        _id: ObjectId("65f8d3a7c1b8e8a9d4e5f401"),
        studentId: ObjectId("65f8d3a7c1b8e8a9d4e5f301"), // ES-001 Pepe Perez
        courseId: ObjectId("67f530bc7d0de32c19965509"), // CR-2005 MongoDB
        registrationDate: ISODate("2025-01-15T00:00:00Z"),
        rate: {
            score: 85,
            comments: "Buen desempeño en consultas básicas"
        }
    },
    {
        _id: ObjectId("65f8d3a7c1b8e8a9d4e5f402"),
        studentId: ObjectId("65f8d3a7c1b8e8a9d4e5f302"), // ES-002 Orlando Causa
        courseId: ObjectId("67f530bc7d0de32c19965509"),
        registrationDate: ISODate("2025-01-16T00:00:00Z"),
        rate: {
            score: 92,
            comments: "Excelente manejo de agregaciones"
        }
    },
    {
        _id: ObjectId("65f8d3a7c1b8e8a9d4e5f403"),
        studentId: ObjectId("65f8d3a7c1b8e8a9d4e5f303"), // ES-003 Maria Molina
        courseId: ObjectId("67f530bc7d0de32c19965509"),
        registrationDate: ISODate("2025-01-17T00:00:00Z"),
        rate: {
            score: 78,
            comments: "Necesita practicar más índices"
        }
    },
    {
        _id: ObjectId("65f8d3a7c1b8e8a9d4e5f404"),
        studentId: ObjectId("65f8d3a7c1b8e8a9d4e5f304"), // ES-004 Marcela Mendez
        courseId: ObjectId("67f530bc7d0de32c19965509"),
        registrationDate: ISODate("2025-01-18T00:00:00Z"),
        rate: {
            score: 88,
            comments: "Buen manejo de esquemas"
        }
    },

    // Inscripciones para el curso HTML Básico (CR-2001)
    {
        _id: ObjectId("65f8d3a7c1b8e8a9d4e5f405"),
        studentId: ObjectId("65f8d3a7c1b8e8a9d4e5f305"), // ES-005 Monica Pastas
        courseId: ObjectId("67f530bc7d0de32c19965505"), // CR-2001 HTML
        registrationDate: ISODate("2025-02-10T00:00:00Z"),
        rate: {
            score: 95,
            comments: "Dominio excelente de etiquetas"
        }
    },
    {
        _id: ObjectId("65f8d3a7c1b8e8a9d4e5f406"),
        studentId: ObjectId("65f8d3a7c1b8e8a9d4e5f306"), // ES-006 Sara Sol
        courseId: ObjectId("67f530bc7d0de32c19965505"),
        registrationDate: ISODate("2025-02-11T00:00:00Z"),
        rate: {
            score: 82,
            comments: "Buena estructuración semántica"
        }
    },
    {
        _id: ObjectId("65f8d3a7c1b8e8a9d4e5f407"),
        studentId: ObjectId("65f8d3a7c1b8e8a9d4e5f307"), // ES-007 Pedro Potacio
        courseId: ObjectId("67f530bc7d0de32c19965505"),
        registrationDate: ISODate("2025-02-12T00:00:00Z"),
        rate: {
            score: 90,
            comments: "Muy buen uso de formularios"
        }
    },
    {
        _id: ObjectId("65f8d3a7c1b8e8a9d4e5f408"),
        studentId: ObjectId("65f8d3a7c1b8e8a9d4e5f308"), // ES-008 Natalia Nasaret
        courseId: ObjectId("67f530bc7d0de32c19965505"),
        registrationDate: ISODate("2025-02-13T00:00:00Z"),
        rate: {
            score: 76,
            comments: "Debe mejorar en accesibilidad"
        }
    },

    // Inscripciones para el curso CSS Básico (CR-2002)
    {
        _id: ObjectId("65f8d3a7c1b8e8a9d4e5f409"),
        studentId: ObjectId("65f8d3a7c1b8e8a9d4e5f309"), // ES-009 Natalia Mojica
        courseId: ObjectId("67f530bc7d0de32c19965506"), // CR-2002 CSS
        registrationDate: ISODate("2025-03-05T00:00:00Z"),
        rate: {
            score: 89,
            comments: "Excelente manejo de flexbox"
        }
    },
    {
        _id: ObjectId("65f8d3a7c1b8e8a9d4e5f410"),
        studentId: ObjectId("65f8d3a7c1b8e8a9d4e5f310"), // ES-010 Esteban Briceño
        courseId: ObjectId("67f530bc7d0de32c19965506"),
        registrationDate: ISODate("2025-03-06T00:00:00Z"),
        rate: {
            score: 94,
            comments: "Diseños responsive impecables"
        }
    },
    {
        _id: ObjectId("65f8d3a7c1b8e8a9d4e5f411"),
        studentId: ObjectId("65f8d3a7c1b8e8a9d4e5f311"), // ES-011 Santiago Acevedo
        courseId: ObjectId("67f530bc7d0de32c19965506"),
        registrationDate: ISODate("2025-03-07T00:00:00Z"),
        rate: {
            score: 81,
            comments: "Buena aplicación de grid"
        }
    },
    {
        _id: ObjectId("65f8d3a7c1b8e8a9d4e5f412"),
        studentId: ObjectId("65f8d3a7c1b8e8a9d4e5f312"), // ES-012 Ernesto Fonseca
        courseId: ObjectId("67f530bc7d0de32c19965506"),
        registrationDate: ISODate("2025-03-08T00:00:00Z"),
        rate: {
            score: 87,
            comments: "Creatividad en animaciones CSS"
        }
    },

    // Inscripciones para el curso JavaScript Básico (CR-2003)
    {
        _id: ObjectId("65f8d3a7c1b8e8a9d4e5f413"),
        studentId: ObjectId("65f8d3a7c1b8e8a9d4e5f313"), // ES-013 Arcangel Lamaravilla
        courseId: ObjectId("67f530bc7d0de32c19965507"), // CR-2003 JavaScript
        registrationDate: ISODate("2025-04-01T00:00:00Z"),
        rate: {
            score: 93,
            comments: "Excelente lógica de programación"
        }
    },
    {
        _id: ObjectId("65f8d3a7c1b8e8a9d4e5f414"),
        studentId: ObjectId("65f8d3a7c1b8e8a9d4e5f314"), // ES-014 Adolf Hittler
        courseId: ObjectId("67f530bc7d0de32c19965507"),
        registrationDate: ISODate("2025-04-02T00:00:00Z"),
        rate: {
            score: 85,
            comments: "Buen manejo de funciones"
        }
    },
    {
        _id: ObjectId("65f8d3a7c1b8e8a9d4e5f415"),
        studentId: ObjectId("65f8d3a7c1b8e8a9d4e5f315"), // ES-015 Jophef Stalin
        courseId: ObjectId("67f530bc7d0de32c19965507"),
        registrationDate: ISODate("2025-04-03T00:00:00Z"),
        rate: {
            score: 79,
            comments: "Debe practicar más arrays"
        }
    },
    {
        _id: ObjectId("65f8d3a7c1b8e8a9d4e5f416"),
        studentId: ObjectId("65f8d3a7c1b8e8a9d4e5f316"), // ES-016 Jeffry Dammer
        courseId: ObjectId("67f530bc7d0de32c19965507"),
        registrationDate: ISODate("2025-04-04T00:00:00Z"),
        rate: {
            score: 91,
            comments: "Manejo avanzado de objetos"
        }
    },

    // Inscripciones para el curso Python Básico (CR-2004)
    {
        _id: ObjectId("65f8d3a7c1b8e8a9d4e5f417"),
        studentId: ObjectId("65f8d3a7c1b8e8a9d4e5f317"), // ES-017 Juaquin Phenix
        courseId: ObjectId("67f530bc7d0de32c19965508"), // CR-2004 Python
        registrationDate: ISODate("2025-05-10T00:00:00Z"),
        rate: {
            score: 88,
            comments: "Buen manejo de estructuras básicas"
        }
    },
    {
        _id: ObjectId("65f8d3a7c1b8e8a9d4e5f418"),
        studentId: ObjectId("65f8d3a7c1b8e8a9d4e5f318"), // ES-018 Bladimir Lennin
        courseId: ObjectId("67f530bc7d0de32c19965508"),
        registrationDate: ISODate("2025-05-11T00:00:00Z"),
        rate: {
            score: 95,
            comments: "Excelente en POO con Python"
        }
    },
    {
        _id: ObjectId("65f8d3a7c1b8e8a9d4e5f419"),
        studentId: ObjectId("65f8d3a7c1b8e8a9d4e5f319"), // ES-019 Jonh Stephen
        courseId: ObjectId("67f530bc7d0de32c19965508"),
        registrationDate: ISODate("2025-05-12T00:00:00Z"),
        rate: {
            score: 82,
            comments: "Debe mejorar en manejo de excepciones"
        }
    },
    {
        _id: ObjectId("65f8d3a7c1b8e8a9d4e5f420"),
        studentId: ObjectId("65f8d3a7c1b8e8a9d4e5f320"), // ES-020 Jeffry Joking
        courseId: ObjectId("67f530bc7d0de32c19965508"),
        registrationDate: ISODate("2025-05-13T00:00:00Z"),
        rate: {
            score: 90,
            comments: "Muy bueno en manejo de archivos"
        }
    },

    // Inscripciones adicionales para diversificar
    {
        _id: ObjectId("65f8d3a7c1b8e8a9d4e5f421"),
        studentId: ObjectId("65f8d3a7c1b8e8a9d4e5f301"), // ES-001 Pepe Perez
        courseId: ObjectId("67f530bc7d0de32c19965507"), // CR-2003 JavaScript
        registrationDate: ISODate("2025-06-01T00:00:00Z"),
        rate: {
            score: 84,
            comments: "Buen progreso en el curso"
        }
    },
    {
        _id: ObjectId("65f8d3a7c1b8e8a9d4e5f422"),
        studentId: ObjectId("65f8d3a7c1b8e8a9d4e5f305"), // ES-005 Monica Pastas
        courseId: ObjectId("67f530bc7d0de32c19965508"), // CR-2004 Python
        registrationDate: ISODate("2025-06-02T00:00:00Z"),
        rate: {
            score: 91,
            comments: "Excelente en estructuras de datos"
        }
    },
    {
        _id: ObjectId("65f8d3a7c1b8e8a9d4e5f423"),
        studentId: ObjectId("65f8d3a7c1b8e8a9d4e5f310"), // ES-010 Esteban Briceño
        courseId: ObjectId("67f530bc7d0de32c19965509"), // CR-2005 MongoDB
        registrationDate: ISODate("2025-06-03T00:00:00Z"),
        rate: {
            score: 89,
            comments: "Muy buen manejo de agregaciones"
        }
    }
])
//___________________________________________________________________________________________________________________
