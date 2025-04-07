//-- Creación de la tabla identification_types
CREATE TABLE identification_types (// id tipo
    id INT PRIMARY KEY,
    code VARCHAR(6) NOT NULL UNIQUE,
    name VARCHAR(100) NOT NULL,
    description VARCHAR(250)
);

//-- Creación de la tabla cities
CREATE TABLE cities (// ciudades
    id BIGINT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    state VARCHAR(100),
    country VARCHAR(100) DEFAULT 'Argentina',,
    active TINYINT DEFAULT 1
);

//-- Creación de la tabla teachers
CREATE TABLE teachers ( // proferores
    id BIGINT PRIMARY KEY,
    code VARCHAR(14) NOT NULL UNIQUE,
    first_name VARCHAR(60) NOT NULL,
    last_name VARCHAR(60) NOT NULL,
    identification_type_id INT NOT NULL,
    identification_number VARCHAR(16) NOT NULL,
    gender VARCHAR(20),
    birthdate DATETIME,
    email VARCHAR(60),
    address VARCHAR(100),
    city_id BIGINT,
    hire_date DATETIME,
    active TINYINT DEFAULT 1,
    FOREIGN KEY (identification_type_id) REFERENCES identification_types(id),
    FOREIGN KEY (city_id) REFERENCES cities(id),
    UNIQUE (identification_type_id, identification_number)
);

//-- Creación de la tabla students
CREATE TABLE students ( // estudiantes
    id BIGINT PRIMARY KEY,
    code VARCHAR(14) NOT NULL UNIQUE,
    first_name VARCHAR(60) NOT NULL,
    last_name VARCHAR(60) NOT NULL,
    identification_type_id INT NOT NULL,
    identification_number VARCHAR(16) NOT NULL,
    gender VARCHAR(20),
    birthdate DATETIME,
    email VARCHAR(60),
    address VARCHAR(100),
    city_id BIGINT,
    enrollment_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    active TINYINT DEFAULT 1,
    FOREIGN KEY (identification_type_id) REFERENCES identification_types(id),
    FOREIGN KEY (city_id) REFERENCES cities(id),
    UNIQUE (identification_type_id, identification_number)
);

//-- Creación de la tabla courses
CREATE TABLE courses (// crusos
    id BIGINT PRIMARY KEY,
    code VARCHAR(10) NOT NULL UNIQUE,
    name VARCHAR(100) NOT NULL,
    description VARCHAR(250),
    credits INT DEFAULT 0,
    hours INT DEFAULT 0,
    active TINYINT DEFAULT 1
);

//-- Creación de la tabla classrooms
CREATE TABLE classrooms ( // salones
    id INT PRIMARY KEY,
    code VARCHAR(10) NOT NULL UNIQUE,
    description VARCHAR(250),
    building VARCHAR(50),
    floor INT,
    capacity INT,
    has_projector TINYINT DEFAULT 0,
    has_whiteboard TINYINT DEFAULT 1,
    active TINYINT DEFAULT 1
);

//-- Creación de la tabla topics
CREATE TABLE topics ( // temas
    id BIGINT PRIMARY KEY,
    course_id BIGINT NOT NULL,
    code VARCHAR(10) NOT NULL,
    title VARCHAR(100) NOT NULL,
    description VARCHAR(250),
    hours_required INT DEFAULT 0,
    display_order INT DEFAULT 0,
    active TINYINT DEFAULT 1,
    FOREIGN KEY (course_id) REFERENCES courses(id),
    UNIQUE (course_id, code)
);

//-- Creación de la tabla course_schedules
CREATE TABLE course_schedules ( // horarios de cursos
    id BIGINT PRIMARY KEY,
    course_id BIGINT NOT NULL,
    teacher_id BIGINT NOT NULL,
    classroom_id INT NOT NULL,
    schedule_code VARCHAR(20) NOT NULL,
    start_date DATETIME NOT NULL,
    end_date DATETIME NOT NULL,
    monday TINYINT DEFAULT 0,
    tuesday TINYINT DEFAULT 0,
    wednesday TINYINT DEFAULT 0,
    thursday TINYINT DEFAULT 0,
    friday TINYINT DEFAULT 0,
    saturday TINYINT DEFAULT 0,
    start_time TIME,
    end_time TIME,
    max_students INT,
    active TINYINT DEFAULT 1,
    FOREIGN KEY (course_id) REFERENCES courses(id),
    FOREIGN KEY (teacher_id) REFERENCES teachers(id),
    FOREIGN KEY (classroom_id) REFERENCES classrooms(id),
    UNIQUE (schedule_code)
);

//-- Creación de la tabla inscriptions
CREATE TABLE inscriptions ( // inscripciones
    id BIGINT PRIMARY KEY,
    course_schedule_id BIGINT NOT NULL,
    student_id BIGINT NOT NULL,
    register_date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(20) DEFAULT 'ACTIVE',
    final_grade DECIMAL(5,2),
    attendance_percentage DECIMAL(5,2),
    active TINYINT DEFAULT 1,
    FOREIGN KEY (course_schedule_id) REFERENCES course_schedules(id),
    FOREIGN KEY (student_id) REFERENCES students(id),
    UNIQUE (course_schedule_id, student_id)
);

//-- Creación de índices adicionales para mejorar el rendimiento
CREATE INDEX idx_students_name ON students(last_name, first_name);
CREATE INDEX idx_teachers_name ON teachers(last_name, first_name);
CREATE INDEX idx_courses_name ON courses(name);
CREATE INDEX idx_course_schedules_dates ON course_schedules(start_date, end_date);
CREATE INDEX idx_inscriptions_student ON inscriptions(student_id);
CREATE INDEX idx_inscriptions_schedule ON inscriptions(course_schedule_id);