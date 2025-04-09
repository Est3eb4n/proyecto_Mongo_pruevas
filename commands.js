
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
// use Actme-School-Proyect
// use Server_pruevas
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
createCollectionSchool()
//________________________________________________________________________________________________________________

// COMANDOS DE VALIDACION

// Colección cities
db.createCollection("CitiesDB", {
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
//________________________________________________________________________________________________________________

  // Colección teachers
  db.createCollection("TeachersDB", {
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
//________________________________________________________________________________________________________________

  // Colección topics
  db.createCollection("TopicsDB", {
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
//________________________________________________________________________________________________________________

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
//________________________________________________________________________________________________________________

  // Colección students
  db.createCollection("StudentsDB", {
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
//________________________________________________________________________________________________________________

  // Colección Inscription
  db.createCollection("inscriptionsDB", {
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
//________________________________________________________________________________________________________________

// COMANDOS PARA INDEXACION
// Índices para courses
db.courses.createIndex({ code: 1 }, { unique: true });
db.courses.createIndex({ "dateRange.startDate": 1, "dateRange.endDate": 1 });
db.courses.createIndex({ teacherIds: 1 });
//________________________________________________________________________________________________________________

// Índices para teachers
db.teachers.createIndex({ code: 1 }, { unique: true });
db.teachers.createIndex({ "identification.number": 1 }, { unique: true });
db.teachers.createIndex({ email: 1 }, { unique: true });
//________________________________________________________________________________________________________________

// Índices para students
db.students.createIndex({ code: 1 }, { unique: true });
db.students.createIndex({ "identification.number": 1 }, { unique: true });
db.students.createIndex({ email: 1 }, { unique: true });
db.students.createIndex({ "contact.cityId": 1 });
//________________________________________________________________________________________________________________

// Índices para inscriptions
db.inscriptions.createIndex({ studentId: 1 });
db.inscriptions.createIndex({ courseId: 1 });
db.inscriptions.createIndex({ studentId: 1, courseId: 1 }, { unique: true });
//________________________________________________________________________________________________________________

// COMANDOS PARA LAS AGREGACIONES

// AGRAGACION PARA FILTAR POR FECHAS LA CUALES MUENTRAN datos del curso, profesor asignado, aula, cantidad, Estudiantes
db.CoursesDB.aggregate([
  {
    $match: {// filtra por los parametros que se le pasen en este caso por las fechas
      "dateRange.startDate": { $gte: "01/05/2025" },
      "dateRange.endDate": { $lte: "30/09/2025" }
    }
  },
  {
    $lookup: {// toma los documentos de la coleccion actual
      from: "TeachersDB",// se le indica la coleccion donde se va a realizar la busqueda
      localField: "teacherIds",// se pasa el campo de la coleccion actual que se desa copara
      foreignField: "_id", // se le pasa el campo de la coleccion externa para compara
      as: "teachers"// se pasa el nombre del nuevo array donde se pondra el resultado
    }
  },
  {
    $lookup: {// toma los documentos de la coleccion actual
      from: "inscriptionsDB",// se le indica la coleccion donde se va a realizar la busqueda
      localField: "_id",// se pasa el campo de la coleccion actual que se desa copara
      foreignField: "courseId",// se le pasa el campo de la coleccion externa para compara
      as: "enrollments" // se pasa el nombre del nuevo array donde se pondra el resultado
    }
  },
  {
    $addFields: {// se usa el operador sddfild para agregar los campos studentCount y classroomInfo
      studentCount: { $size: "$enrollments" },// en las expreciones de pasa los parametros enrollments para mostrar la cantidad de estudiantes
      classroomInfo: "$classRoom"// en las expreciones de pasa los parametros classRoom para mostrar la informacion del salon
    }
  },
  {
    $project: {
      "enrollments": 0,
      "teacherIds": 0
    }
  }
]);
//________________________________________________________________________________________________________________

// Agregacion para mostara los datos del curso y su contenido tematico usando el code de curso
db.CoursesDB.aggregate([
  {
    $match: {// filtra por los parametros que se le pasen en este caso por code de curso o por objectID
      code: "CR-2001" 
    }
  },
  {
    $lookup: {// toma los documentos de la coleccion actual
      from: "topics",// se le indica la coleccion donde se va a realizar la busqueda
      localField: "topicId",// se pasa el campo de la coleccion actual que se desa copara
      foreignField: "_id",// se le pasa el campo de la coleccion externa para compara
      as: "topicDetails"// se pasa el nombre del nuevo array donde se pondra el resultado
    }
  },
  {
    $unwind: "$topicDetails"// se em plea el operador unwind para desanidar el array
  },
  {
    $project: {// se usa el operador $project para indidar los parametros para mostrar
      "code": 1,
      "name": 1,
      "description": 1,
      "details": 1,
      "topicDetails": 1,
      "classRoom": 1
    }
  }
]);

//________________________________________________________________________________________________________________


db.StudentsDB.aggregate([
  {
    $lookup: {
      from: "CitiesDB",
      localField: "contact.cityId",
      foreignField: "_id",
      as: "cityInfo"
    }
  },
  {
    $unwind: "$cityInfo"
  },
  {
    $group: {
      _id: "$cityInfo.city",
      students: {
        $push: {
          code: "$code",
          firstName: "$firstName",
          lastName: "$lastName",
          gender: "$gender",
          age: {
            $dateDiff: {
              startDate: { $toDate: "$birthdate" },
              unit: "year"
            }
          },
          email: "$contact.email"
        }
      },
      count: { $sum: 1 }
    }
  },
  {
    $sort: {
      "_id": 1
    }
  }
]);
//________________________________________________________________________________________________________________


db.inscriptionsDB.aggregate([
  {
    $match: {
      studentId: ObjectId("65f8d3a7c1b8e8a9d4e5f301") // O usar código de estudiante
    }
  },
  {
    $lookup: {
      from: "courses",
      localField: "courseId",
      foreignField: "_id",
      as: "courseInfo"
    }
  },
  {
    $unwind: "$courseInfo"
  },
  {
    $project: {
      "courseCode": "$courseInfo.code",
      "courseName": "$courseInfo.name",
      "credits": "$courseInfo.details.credits",
      "score": "$rate.score",
      "comments": "$rate.comments"
    }
  },
  {
    $group: {
      _id: null,
      courses: { $push: "$$ROOT" },
      weightedSum: {
        $sum: {
          $multiply: ["$rate.score", "$courseInfo.details.credits"]
        }
      },
      totalCredits: { $sum: "$courseInfo.details.credits" }
    }
  },
  {
    $addFields: {
      weightedAverage: {
        $divide: ["$weightedSum", "$totalCredits"]
      }
    }
  }
]);
//________________________________________________________________________________________________________________


db.inscriptionsDB.aggregate([
  {
    $match: {
      courseId: ObjectId("67f530bc7d0de32c19965509") // O usar código de curso
    }
  },
  {
    $lookup: {
      from: "students",
      localField: "studentId",
      foreignField: "_id",
      as: "studentInfo"
    }
  },
  {
    $unwind: "$studentInfo"
  },
  {
    $project: {
      "studentCode": "$studentInfo.code",
      "firstName": "$studentInfo.firstName",
      "lastName": "$studentInfo.lastName",
      "score": "$rate.score",
      "email": "$studentInfo.contact.email"
    }
  },
  {
    $sort: {
      "score": -1
    }
  }
]);
//________________________________________________________________________________________________________________


db.inscriptionsDB.aggregate([
  {
    $lookup: {
      from: "courses",
      localField: "courseId",
      foreignField: "_id",
      as: "courseInfo"
    }
  },
  {
    $unwind: "$courseInfo"
  },
  {
    $lookup: {
      from: "students",
      localField: "studentId",
      foreignField: "_id",
      as: "studentInfo"
    }
  },
  {
    $unwind: "$studentInfo"
  },
  {
    $match: {
      "rate.score": { $exists: true }
    }
  },
  {
    $sort: {
      "courseInfo.code": 1,
      "rate.score": -1
    }
  },
  {
    $group: {
      _id: "$courseInfo._id",
      courseCode: { $first: "$courseInfo.code" },
      courseName: { $first: "$courseInfo.name" },
      topStudents: {
        $push: {
          studentCode: "$studentInfo.code",
          name: { $concat: ["$studentInfo.firstName", " ", "$studentInfo.lastName"] },
          score: "$rate.score"
        }
      }
    }
  },
  {
    $project: {
      courseCode: 1,
      courseName: 1,
      top5Students: { $slice: ["$topStudents", 5] }
    }
  }
]);
//________________________________________________________________________________________________________________


db.CoursesDB.aggregate([
  {
    $match: {
      "teacherIds": ObjectId("65f8d3a7c1b8e8a9d4e5f101"), // ID profesor
      "_id": ObjectId("67f530bc7d0de32c19965509"), // ID curso
      "dateRange.startDate": "01/10/2025" // Fecha inicio
    }
  },
  {
    $lookup: {
      from: "enrollments",
      localField: "_id",
      foreignField: "courseId",
      as: "enrollments"
    }
  },
  {
    $unwind: "$enrollments"
  },
  {
    $lookup: {
      from: "students",
      localField: "enrollments.studentId",
      foreignField: "_id",
      as: "studentInfo"
    }
  },
  {
    $unwind: "$studentInfo"
  },
  {
    $project: {
      _id: 0,
      studentCode: "$studentInfo.code",
      firstName: "$studentInfo.firstName",
      lastName: "$studentInfo.lastName",
      gender: "$studentInfo.gender",
      age: {
        $dateDiff: {
          startDate: { $toDate: "$studentInfo.birthdate" },
          endDate: new Date(),
          unit: "year"
        }
      },
      email: "$studentInfo.contact.email",
      classroom: "$classRoom.code"
    }
  }
]);
//________________________________________________________________________________________________________________


db.CoursesDB.aggregate([
  {
    $lookup: {
      from: "enrollments",
      localField: "_id",
      foreignField: "courseId",
      as: "enrollments"
    }
  },
  {
    $addFields: {
      enrolledStudents: { $size: "$enrollments" }
    }
  },
  {
    $match: {
      $expr: { $gt: ["$enrolledStudents", "$classRoom.capacity"] }
    }
  },
  {
    $project: {
      code: 1,
      name: 1,
      "classRoom.code": 1,
      capacity: "$classRoom.capacity",
      enrolledStudents: 1,
      overCapacity: {
        $subtract: ["$enrolledStudents", "$classRoom.capacity"]
      }
    }
  }
]);
//________________________________________________________________________________________________________________
