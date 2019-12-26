import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';
import LandingPage from './pages/LandingPage';
import TopicPage from './pages/TopicPage';
import UserPage from './pages/UserPage';
import ProfilePage from './pages/ProfilePage';
import CreateTopic from './pages/CreateTopic';

export const authenticatedRoutes = [
  {
    path: "/",
    exact: true,
    component: LandingPage,
    name: "Home",
  },
  {
    path: "/topic/:id",
    component: TopicPage,
    name: '',
  },
  {
    path: "/user/:id",
    component: UserPage,
    name: ""
  },
  {
    path: "/profile",
    component: ProfilePage,
    name: "Profile"
  },
  {
    path: "/new-topic",
    component: CreateTopic,
    name: ""
  }
];

export const unAuthenticatedRoutes = [
  {
    path: "/sign-up",
    component: SignUpPage,
    name: "Register",
  },
  {
    path: "/sign-in",
    component: SignInPage,
    name: "Login",
  },
]


export const routes = [
  ...unAuthenticatedRoutes,
  ...authenticatedRoutes,
];