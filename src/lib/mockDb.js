// Persistent Mock Database using localStorage

const getStoredUsers = () =>
  JSON.parse(localStorage.getItem("ansi_users")) || [];

const saveUsers = (users) =>
  localStorage.setItem("ansi_users", JSON.stringify(users));

const getStoredCourses = () =>
  JSON.parse(localStorage.getItem("ansi_courses")) || [
    {
      id: 1,
      slug: "full-stack-java",
      title: "Full Stack Java Developer",
      enrolledStudents: []
    },
    {
      id: 2,
      slug: "react-mastery",
      title: "React Frontend Mastery",
      enrolledStudents: []
    }
  ];

const saveCourses = (courses) =>
  localStorage.setItem("ansi_courses", JSON.stringify(courses));

export const mockApi = {

  register: (userData) => {
    const users = getStoredUsers();
    users.push(userData);
    saveUsers(users);
    return { success: true };
  },

  login: (email) => {
    const users = getStoredUsers();
    const user = users.find(u => u.email === email);
    if (user) return { success: true, user };
    return { success: false };
  },

  getCourses: () => {
    return getStoredCourses();
  },

  enrollCourse: (email, courseId) => {
    const courses = getStoredCourses();
    const course = courses.find(c => c.id === courseId);

    if (!course.enrolledStudents.includes(email)) {
      course.enrolledStudents.push(email);
      saveCourses(courses);
    }

    return { success: true };
  },

  getEnrolledCourses: (email) => {
    const courses = getStoredCourses();
    return courses.filter(c => c.enrolledStudents.includes(email));
  },
  getProgress: (email, slug) => {
  const progressData =
    JSON.parse(localStorage.getItem("ansi_progress")) || {};

  return progressData[email]?.[slug] || 0;
},

updateProgress: (email, slug, value) => {
  const progressData =
    JSON.parse(localStorage.getItem("ansi_progress")) || {};

  if (!progressData[email]) {
    progressData[email] = {};
  }

  progressData[email][slug] = value;

  localStorage.setItem("ansi_progress", JSON.stringify(progressData));
}


};
