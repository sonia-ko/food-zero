import carsonHugn from "../assets/about/carson-hugh.png";
import janeCooper from "../assets/about/jane-cooper.png";

export const phoneNumber = "+1+86 852 346 000";
export const email = "info@foodzero.com";
export const address = "1959 Sepulveda Blvd";
export const city = "Culver City";
export const state = "CA";
export const zipCode = "90230";

export const availableHours = [
  "09:00 am",
  "10:00 am",
  "11:00 am",
  "01:00 pm",
  "02:00 pm",
  "03:00 pm",
  "04:00 pm",
  "05:00 pm",
  "06:00 pm",
  "07:00 pm",
  "08:00 pm",
  "09:00 pm",
];

export const numberOfPersonsAvailable = [
  "1 person",
  "2 person",
  "3 person",
  "4 person",
  "5 person",
  "6 person",
  "7 person",
  "8 person",
  "9 person",
];

interface employees {
  title: string;
  name: string;
  description: string;
  image: string;
}
export const topEmployees: employees[] = [
  {
    title: "Restaurant Manager",
    name: "Carson Hugn",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et in sed in pellentesque ornare nunc nisl. ",
    image: carsonHugn,
  },
  {
    title: "Executive Chef",
    name: "Jane Cooper",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et in sed in pellentesque ornare nunc nisl. Augue habitant accumsan, ut parturient orci ac etiam congue mi.",
    image: janeCooper,
  },
];
