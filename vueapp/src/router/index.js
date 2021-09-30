import { createRouter, createWebHistory } from 'vue-router';
import CourseContents from '../components/course/CourseContents.vue';
import CourseEnrollments from '../components/course/CourseEnrollments.vue';
import Course from '../components/course/Course.vue'
import CourseTeachers from '../components/course/CourseTeachers.vue'
import CourseSendMail from '../components/course/CourseSendMail.vue'
import ModeratorDashboard from '../components/course/ModeratorDashboard.vue';
import AddCourse from '../components/course/AddCourse'

const routes = [
  {
    path: '/exam/manage/course/detail/:course_id',
    name: 'course_contents',
    component: CourseContents,
  },
  {
    path: '/exam/manage/course/enrollments/:course_id',
    name: 'course_enrollments',
    component: CourseEnrollments,
  },
  {
    path: '/exam/manage/course/view/teachers/:course_id',
    name: 'course_teachers',
    component: CourseTeachers,
  },
  {
    path: '/exam/manage/course/send_mail/:course_id',
    name: 'course_send_mail',
    component: CourseSendMail,
  },
  {
    path: '/exam/manage/mycourses',
    name: 'courses',
    component: Course,
  },
  {
    path: '/exam/manage/moderator_dashboard/',
    name: 'moderator_dashboard',
    component: ModeratorDashboard,
  },
  {
    path: '/exam/manage/addcourse/',
    name: 'add_course',
    component: AddCourse
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
