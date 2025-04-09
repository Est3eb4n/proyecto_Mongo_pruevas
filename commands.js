
db.createCollection("identification_typesDB")
db.createCollection("StudentsDB")
db.createCollection("TeachersDB")
db.createCollection("CitiesDB")
db.createCollection("CoursesDB")
db.createCollection("ClassroomsDB")
db.createCollection("TopicsDB")
db.createCollection("course_schedulesDB")
db.createCollection("inscriptionsDB")

// ______________________________________________________________________________________________________________
//|                                                                                                              |
//| se usa el comando "use" pata crear la coleccion "Actme-School-Proyect"                                       |
//|______________________________________________________________________________________________________________|
use Actme-School-Proyect
use Server_pruevas
//________________________________________________________________________________________________________________

//________________________________________________________________________________________________________________
//|                                                                                                              |
//| funcion para crear las colecciones                                                                           |
//| 1. se declara la funcion "createCollectionSchool" para crear las colecciones                                 |
//| 2. se pasa un array con el nombre de las colecciones                                                         |
//| 3. se utilica el iterador "forEach" con el parametro "col" para recorre el arreglo y crear las colecciones   |
//| 4. se hace uso del "try catch" para manejor de errores, mostrando si la operacion es exitosa o si hubo algun |
//| error al montrando la coleccion donde se produjo el error                                                    |
//|______________________________________________________________________________________________________________|
function createCollectionSchool(){
    ["StudentsDB", "TeachersDB", "CitiesDB", "CoursesDB", 
    "TopicsDB", "inscriptionsDB"].forEach(col =>{
    try{
        db.createCollection(col);
        print(`Coleccion ${col}creada`);
    }catch(e){
        print(`Error con ${col}:${e.message}`);
    }
   });
   return"Operacion completada"
}
//________________________________________________________________________________________________________________

// COMANDOS DE VALIDACION

// Colección cities
db.createCollection("cities", {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["codeCity", "country", "state"],
        properties: {
          codeCity: { bsonType: "string" },
          country: { bsonType: "string" },
          state: { bsonType: "string" }
        }
      }
    }
  });
  
  // Colección teachers
  db.createCollection("teachers", {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["code", "firstName", "lastName", "identification", "email", "active"],
        properties: {
          code: { bsonType: "string" },
          firstName: { bsonType: "string" },
          lastName: { bsonType: "string" },
          identification: {
            bsonType: "object",
            required: ["type", "number"],
            properties: {
              type: { bsonType: "string", enum: ["CC", "CE", "PS"] },
              number: { bsonType: "number" }
            }
          },
          email: { bsonType: "string", pattern: "^.+@.+\\..+$" },
          active: { bsonType: "bool" }
        }
      }
    }
  });
  
  // Colección topics
  db.createCollection("topics", {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["code", "title", "description", "active"],
        properties: {
          code: { bsonType: "string" },
          title: { bsonType: "string" },
          description: { bsonType: "string" },
          active: { bsonType: "bool" }
        }
      }
    }
  });
  
  // Colección courses
  db.createCollection("courses", {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["code", "name", "description", "details", "active", "dateRange"],
        properties: {
          code: { bsonType: "string" },
          name: { bsonType: "string" },
          description: { bsonType: "string" },
          details: {
            bsonType: "object",
            required: ["credits", "hours"],
            properties: {
              credits: { bsonType: "number" },
              hours: { bsonType: "number" }
            }
          },
          active: { bsonType: "bool" },
          dateRange: {
            bsonType: "object",
            required: ["startDate", "endDate"],
            properties: {
              startDate: { bsonType: "string" },
              endDate: { bsonType: "string" }
            }
          },
          classRoom: {
            bsonType: "object",
            required: ["code", "description", "capacity", "active"],
            properties: {
              code: { bsonType: "string" },
              description: { bsonType: "string" },
              capacity: { bsonType: "number" },
              active: { bsonType: "bool" }
            }
          },
          topicId: { bsonType: "objectId" },
          teacherIds: {
            bsonType: "array",
            items: { bsonType: "objectId" }
          }
        }
      }
    }
  });
  
  // Colección students
  db.createCollection("students", {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["code", "firstName", "lastName", "identification", "gender", "birthdate", "contact", "active"],
        properties: {
          code: { bsonType: "string" },
          firstName: { bsonType: "string" },
          lastName: { bsonType: "string" },
          identification: {
            bsonType: "object",
            required: ["type", "number"],
            properties: {
              type: { bsonType: "string", enum: ["CC", "CE", "PS"] },
              number: { bsonType: "number" }
            }
          },
          gender: { bsonType: "string", enum: ["M", "F"] },
          birthdate: { bsonType: "string" },
          contact: {
            bsonType: "object",
            required: ["email", "address", "cityId"],
            properties: {
              email: { bsonType: "string", pattern: "^.+@.+\\..+$" },
              address: { bsonType: "string" },
              cityId: { bsonType: "objectId" }
            }
          },
          active: { bsonType: "bool" }
        }
      }
    }
  });

  // Colección Inscription
  db.createCollection("inscriptions", {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["studentId", "courseId", "registrationDate"],
        properties: {
          studentId: { bsonType: "objectId" },
          courseId: { bsonType: "objectId" },
          registrationDate: { bsonType: "date" },
          rate: {
            bsonType: "object",
            properties: {
              score: { bsonType: "number", minimum: 0, maximum: 100 },
              comments: { bsonType: "string" }
            }
          }
        }
      }
    }
  });

// COMANDOS PARA INDEXACION
// Índices para courses
db.courses.createIndex({ code: 1 }, { unique: true });
db.courses.createIndex({ "dateRange.startDate": 1, "dateRange.endDate": 1 });
db.courses.createIndex({ teacherIds: 1 });

// Índices para teachers
db.teachers.createIndex({ code: 1 }, { unique: true });
db.teachers.createIndex({ "identification.number": 1 }, { unique: true });
db.teachers.createIndex({ email: 1 }, { unique: true });

// Índices para students
db.students.createIndex({ code: 1 }, { unique: true });
db.students.createIndex({ "identification.number": 1 }, { unique: true });
db.students.createIndex({ email: 1 }, { unique: true });
db.students.createIndex({ "contact.cityId": 1 });

// Índices para inscriptions
db.inscriptions.createIndex({ studentId: 1 });
db.inscriptions.createIndex({ courseId: 1 });
db.inscriptions.createIndex({ studentId: 1, courseId: 1 }, { unique: true });

