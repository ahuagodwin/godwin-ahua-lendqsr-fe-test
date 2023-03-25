import { Icons } from "../../constant/Icons";

export const dahsboard = [
    {
        dahsboard: [
          {
            icons: <Icons.LendqsrSwitch />,
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
            path: "#",
          },
        ],
      },
  {
    label: "Customer",
    dahsboard: [
      {
        icons: <Icons.LendqsrUser />,
        name: "User",
        path: "/dashboard/user",
      },
      {
        icons: <Icons.LendqsrGuarantor />,
        name: "Guarantor",
        path: "#",
      },
      {
        icons: <Icons.LendqsrLoan />,
        name: "Loan",
        path: "#",
      },
      {
        icons: <Icons.LendsqrDecModel />,
        name: "Decision Models",
        path: "#",
      },
    ],
  },

  {
    label: "Businesses",
    dahsboard: [
      {
        icons: <Icons.LendqsrSwitch />,
        name: "Organization",
        path: "#",
      },

      {
        icons: <Icons.LendqsrLoanRequest />,
        name: "Loan Product",
        path: "#",
      },

      {
        icons: <Icons.LendqsrSavingProduct />,
        name: "Saving Product",
        path: "#",
      },

      {
        icons: <Icons.LendqsrFeesCharged />,
        name: "Fees and Charges",
        path: "#",
      },

      {
        icons: <Icons.LendqsrTransaction />,
        name: "Transaction",
        path: "#",
      },

      {
        icons: <Icons.LendqsrServices />,
        name: "Services",
        path: "#",
      },

      {
        icons: <Icons.LendqsrServiceAccount />,
        name: "Service Account",
        path: "#",
      },

      {
        icons: <Icons.LendqsrSettlement />,
        name: "Settlement",
        path: "#",
      },

      {
        icons: <Icons.LendqsrReport />,
        name: "Report",
        path: "#",
      },
    ],
  },

  {
    label: "Settings",
    dahsboard: [
      {
        icons: <Icons.LendqsrPreference />,
        name: "Preferences",
        path: "#",
      },
      {
        icons: <Icons.LendqsrFeesPricing />,
        name: "Fees and Pricing",
        path: "#",
      },
      {
        icons: <Icons.LendqsrAuditLog />,
        name: "Audit Log",
        path: "#",
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
        id: 1,
        title: "Organization",
        sort: <Icons.LendqsrSort />
    },

    {
        id: 2,
        title: "Username",
        sort: <Icons.LendqsrSort />
    },
    {
        id: 3,
        title: "Email",
        sort: <Icons.LendqsrSort />
    },

    {
      id: 4,
        title: "Phone Number",
        sort: <Icons.LendqsrSort />
    },


    {
      id: 5,
        title: "Date Joined",
        sort: <Icons.LendqsrSort />
    },

    {
      id: 6,
        title: "Status",
        sort: <Icons.LendqsrSort />
    },
]
