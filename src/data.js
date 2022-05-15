export const allProjects = [
  {
    id: 1,
    title: "OWL",
    description: "Has Diabeties and needs regular Insulin",
    goal: 1,
    image:
      "https://cutecatshq.com/wp-content/uploads/2013/11/Heterochromia-Iridum-Two-Different-Eye-Colors-In-Natural-Light-700x466.jpg",
    is_open: true,
    date_created: "2022-05-15T01:00:50.026261Z",
    owner: 1,
    end_date: "2023-03-20T14:28:23.382748Z",
    category: "foster",
    pledges: [],
  },
  {
    id: 2,
    title: "Tom",
    description: "Looking for a forever home!",
    goal: 1,
    image:
      "https://th.bing.com/th/id/OIP.fWeze72jjLmtiNFadWFr2gHaFj?w=196&h=180&c=7&r=0&o=5&pid=1.7",
    is_open: true,
    date_created: "2022-05-15T01:04:56.776407Z",
    owner: 1,
    end_date: "2023-03-20T14:28:23.382748Z",
    category: "adopt",
    pledges: [],
  },
  {
    id: 3,
    title: "Brandy and Jinks",
    description:
      "Unlikely pair but Brandy was pining for her owner who sadly passed and wouldn't eat or interact until Jinks came along.  The duo are now inseperable!",
    goal: 1,
    image:
      "https://th.bing.com/th/id/OIP.dnZXdteW05B9Oxp1dU8fJwHaDt?pid=ImgDet&w=178&h=89&c=7",
    is_open: true,
    date_created: "2022-05-15T01:08:48.504351Z",
    owner: 1,
    end_date: "2023-03-20T14:28:23.382748Z",
    category: "adopt",
    pledges: [],
  },
  {
    id: 4,
    title: "Sasha",
    description:
      "Suit an older couple or person, quiet but has lots of personality. Loves cuddles!",
    goal: 1,
    image:
      "https://th.bing.com/th/id/OIP.1fYPO6zmoBBeg6dk_pfo3gHaGO?pid=ImgDet&w=178&h=149&c=7",
    is_open: true,
    date_created: "2022-05-15T01:10:55.477183Z",
    owner: 1,
    end_date: "2023-03-20T14:28:23.382748Z",
    category: "adopt",
    pledges: [],
  },
];
export const oneProject = {
  id: 4,
  title: "Sasha",
  description:
    "Suit an older couple or person, quiet but has lots of personality. Loves cuddles!",
  goal: 150,
  image:
    "https://th.bing.com/th/id/OIP.1fYPO6zmoBBeg6dk_pfo3gHaGO?pid=ImgDet&w=178&h=149&c=7",
  is_open: false,
  date_created: "2022-05-15T01:10:55.477183Z",
  owner: 1,
  pledges: [
    {
      id: 1,
      amount: 100,
      comment: "A comment for the pledge",
      anonymous: false,
      supporter: 3,
      project_id: 1,
    },
  ],
};
