import { Icons } from "../../constant/Icons";

export const dahsboard = [
    {
        dahsboard: [
          {
            icons: <Icons.LendqsrDashboard />,
            name: "Switch Organization",
            path: "#",
            arrow: <Icons.LendqsrDropDown />,
          },
        ],
      },
    {
        dahsboard: [
          {
            icons: <Icons.LendqsrDashboard />,
            name: "Dashboard",
            path: "/dashboard",
          },
        ],
      },
  {
    label: "Customer",
    dahsboard: [
      {
        icons: <Icons.LendqsrDashboard />,
        name: "User",
        path: "/dashboard/user",
      },
      {
        icons: <Icons.LendqsrDashboard />,
        name: "Guarantor",
        path: "/dashboard/guarantor",
      },
      {
        icons: <Icons.LendqsrDashboard />,
        name: "Loan",
        path: "/dashboard/loan",
      },
      {
        icons: <Icons.LendqsrDashboard />,
        name: "Decision Models",
        path: "/dashboard/decision-models",
      },
    ],
  },

  {
    label: "Businesses",
    dahsboard: [
      {
        label: "Customers",
        icons: <Icons.LendqsrDashboard />,
        name: "Organization",
        path: "/dashboard/organization",
      },
    ],
  },
];



export const user__card__overview = [
    {
        icon: <Icons.LendqsrUserIcon />,
        label: "users",
        total: "3500"
    },

    {
        icon: <Icons.LendqsrActiveUserIcon />,
        label: "active users",
        total: "3003"
    },

    {
        icon: <Icons.LendqsrUserLoanIcon />,
        label: "user with loans",
        total: "3600"
    },

    {
        icon: <Icons.LendqsrUserSavingIcon />,
        label: "user with savings",
        total: "3800"
    }
]



export const table_head = [
    {
        title: "Organization",
        sort: <Icons.LendqsrSort />
    },

    {
        title: "Username",
        sort: <Icons.LendqsrSort />
    },
    {
        title: "Email",
        sort: <Icons.LendqsrSort />
    },

    {
        title: "Phone Number",
        sort: <Icons.LendqsrSort />
    },


    {
        title: "Date Joined",
        sort: <Icons.LendqsrSort />
    },

    {
        title: "Status",
        sort: <Icons.LendqsrSort />
    },
]


export const table_body = [
  {
    organization: "Lendqsr",
    username: "Godwin",
    email: "Godwincahua@gmail.com",
    phone: "08138885517",
    createdAt: "May 15, 2020 10:00 AM",
    status: "Active"
  },

  {
    organization: "Lendqsr",
    username: "Godwin",
    email: "Godwincahua@gmail.com",
    phone: "08138885517",
    createdAt: "May 15, 2020 10:00 AM",
    status: "Pending"
  },

  {
    organization: "Lendqsr",
    username: "Godwin",
    email: "Godwincahua@gmail.com",
    phone: "08138885517",
    createdAt: "May 15, 2020 10:00 AM",
    status: "Blacklisted"
  },

  {
    organization: "Lendqsr",
    username: "Godwin",
    email: "Godwincahua@gmail.com",
    phone: "08138885517",
    createdAt: "May 15, 2020 10:00 AM",
    status: "Inactive"
  },

]