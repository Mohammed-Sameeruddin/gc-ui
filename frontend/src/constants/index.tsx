import MyntraLogo from "../assets/images/myntraaLogo.svg";
import BMWLogo from "../assets/images/bmwLogo.svg";
import InstagramLogo from "../assets/images/instagramLogo.svg";


export const getJobsUrl = "http://localhost:9004/jobs/";
export const getSearchUrl = "http://localhost:9004/search/"
export const getSkillsUrl = "http://localhost:9002/skills";
export const getLocationsUrl = "http://localhost:9001/location";

export const locations = [
  {
    title: "Hyderabad",
  },
  {
    title: "Mumbai",
  },
];

export const skills = [
  {
    title: "UI/UX Designer",
  },
  {
    title: "Graphic Designer",
  },
];

export const cardArray = [
  {
    jobId: 1,
    designation: "User Experience Designer",
    companyLogo: MyntraLogo,
    companyName: "Myntra",
    companyAddress: "Hitech city, Hyderabad - 500072",
    posted: "36 min ago",
    routes: [{routeName: "Bike"},{routeName: "Car"},{routeName: "Train"},{routeName: "Bus"}],
    distance: 5,
    skill: {
      name: "Graphic Designer"
    },
    saved: true,
    location: {
      name: "Hyderabad"
    },
  },
  {
    jobId: 2,
    designation: "Product Designer",
    companyLogo: BMWLogo,
    companyName: "BMW",
    companyAddress: "Hitech city, Hyderabad - 500072",
    posted: "10 days ago",
    routes: [{routeName: "Bike"},{routeName: "Car"},{routeName: "Train"},{routeName: "Bus"}],
    distance: 5,
    skill: {
      name: "Graphic Designer"
    },
    saved: false,
    location: {
      name: "Hyderabad"
    },
  },
  {
    jobId: 3,
    designation: "User Experience Designer",
    companyLogo: InstagramLogo,
    companyName: "Instagram",
    companyAddress: "Mumbai",
    posted: "45 days ago",
    routes: [{routeName: "Bike"},{routeName: "Car"},{routeName: "Train"},{routeName: "Bus"}],
    distance: 15,
    skill: {
      name: "Graphic Designer"
    },
    saved: false,
    location: {
      name: "Hyderabad"
    },
  },
];
