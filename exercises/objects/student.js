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

let foo = createStudent('Foo', '1st');
foo.info();
// "Foo is a 1st year student"
console.log(foo.listCourses());
// [];
foo.addCourse({ name: 'Math', code: 101 });
foo.addCourse({ name: 'Advanced Math', code: 102 });
console.log(foo.listCourses());
// [{ name: 'Math', code: 101 }, { name: 'Advanced Math', code: 102 }]
foo.addNote(101, 'Fun course');
foo.addNote(101, 'Remember to study for algebra');
foo.viewNotes();
// "Math: Fun course; Remember to study for algebra"
foo.addNote(102, 'Difficult subject');
foo.viewNotes();
// "Math: Fun course; Remember to study for algebra"
// "Advance Math: Difficult subject"
foo.updateNote(101, 'Fun course');
foo.viewNotes();
// "Math: Fun course"
// "Advanced Math: Difficult subject"
