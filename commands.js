
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
    ["identification_typesDB", "StudentsDB", "TeachersDB", "CitiesDB", 
   "CoursesDB", "ClassroomsDB", "TopicsDB", "course_schedulesDB", 
   "inscriptionsDB"].forEach(col =>{
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


db.identification_typesDB.insertMany([])
db.StudentsDB.insertMany([])
db.TeachersDB.insertMany([])
db.CitiesDB.insertMany([])
db.CoursesDB.insertMany([])
db.ClassroomsDB.insertMany([])
db.TopicsDB.insertMany([])
db.course_schedulesDB.insertMany([])
db.inscriptionsDB.insertMany([])