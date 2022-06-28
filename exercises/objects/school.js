const school = {
  students: [],

  addStudent(name, year) {
    if (['1st', '2nd', '3rd', '4th', '5th'].includes(year)) {
      const student = createStudent(name, year);
      this.students.push(student);
      return student;
    } else {
      console.log('Invalid Year');
    }
  },

  enrollStudent(student, courseName, courseCode) {
    student.addCourse({name: courseName, code: courseCode});
  },

  addGrade(student, courseName, grade) {
    const course = student.courses.filter(({name}) => name === courseName)[0];
    if (course) {
      course.grade = grade;
    }
  },

  getReportCard(student) {
    student.listCourses().forEach(course => {
      if (course.grade) {
        console.log(`${course.name}: ${course.grade}`);
      } else {
        console.log(`${course.name}: In Progress`);
      }
    });
  },

  courseReport(courseName) {
    const enrolledStudents = this.students.filter(({courses}) => {
      return courses.some(({name}) => name === courseName);
    });

    let gradeSum = 0;
    let haveGrades = false;
    if (enrolledStudents.length > 0) {
      console.log(`=${courseName} Grades=`);
      enrolledStudents.forEach(student => {
        const course = student.courses.filter(({name}) => name === courseName)[0];
        if (course.grade) {
          haveGrades = true;
          console.log(`${student.name}: ${course.grade}`);
          gradeSum += course.grade;
        }
      });
      if (haveGrades) {
        const average = gradeSum / enrolledStudents.length;
        console.log('---');
        console.log(`Course Average: ${average}`);
      }
    }
  }
};


function createStudent(name, year) {
  return {
    name,
    year,
    courses: [],

    info() {
      console.log(`${this.name} is a ${this.year} year student`);
    },

    addCourse(course) {
      this.courses.push(course);
    },

    listCourses() {
      return this.courses;
    },

    addNote(code, note) {
      let index = this.getCourseIndex(code);
      let course = this.courses[index];
      if (course.note === undefined) {
        course.note = note;
      } else {
        course.note = course.note + '; ' + note;
      }
    },

    updateNote(code, note) {
      let index = this.getCourseIndex(code);
      if (index === -1) return;
      let course = this.courses[index];
      course.note = note;
    },

    viewNotes() {
      let coursesWithNotes = this.courses.filter(course => {
        return course.note !== undefined;
      });

      coursesWithNotes.forEach(course => {
        console.log(`${course.name}: ${course.note}`);
      });
    },

    getCourseIndex(code) {
      let index = -1;
      this.courses.forEach((course, idx) => {
        if (course.code === code) index = idx;
      });

      return index;
    },
  };
}

const foo = school.addStudent('foo', '3rd');
school.enrollStudent(foo, 'Math', 101);
school.enrollStudent(foo, 'Advanced Math', 102);
school.enrollStudent(foo, 'Physics', 202);
school.addGrade(foo, 'Math', 95);
school.addGrade(foo, 'Advanced Math', 90);

console.log

const bar = school.addStudent('bar', '1st');
school.enrollStudent(bar, 'Math', 101);
school.addGrade(bar, 'Math', 91);

const qux = school.addStudent('qux', '2nd');
school.enrollStudent(qux, 'Math', 102);
school.enrollStudent(qux, 'Advanced Math', 102);
school.addGrade(qux, 'Math', 93);
school.addGrade(qux, 'Advanced Math', 90);

school.getReportCard(foo);
school.courseReport('Math');
school.courseReport('Advanced Math');
school.courseReport('Physics');
