export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "user",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="flex justify-center items-center gap-1">
          <img
            src={params.row.img}
            alt="profile "
            className="w-10 rounded-full border shadow"
          />
          {params.row.lastName}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },
  {
    field: "age",
    headerName: "Age",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell:(params)=>{
      const cellClassName = params.row.status.toLowerCase() === 'active' ? 'active' : 'inactive';
      return (
        <div className={cellClassName}>
          {params.row.status}
        </div>
      )
    }
  },
];

export const userRows = [
  {
    id: 1,
    lastName: "Snow",
    firstName: "Jon",
    img: "https://www.vhv.rs/dpng/d/493-4937336_facebook-silhouette-icon-at-getdrawings-facebook-profile-icon.png",
    email: "snow@gamil.com",
    age: 35,
    status:"Active",
  },
  {
    id: 2,
    lastName: "Lannister",
    firstName: "Cersei",
    img: "https://www.vhv.rs/dpng/d/493-4937336_facebook-silhouette-icon-at-getdrawings-facebook-profile-icon.png",
    email: "Lannister@gamil.com",
    age: 42,
    status:"Inactive",

  },
  {
    id: 3,
    lastName: "Lannister",
    firstName: "Jaime",
    img: "https://www.vhv.rs/dpng/d/493-4937336_facebook-silhouette-icon-at-getdrawings-facebook-profile-icon.png",
    email: "Lannister@gamil.com",
    age: 45,
    status:"Active",

  },
  {
    id: 4,
    lastName: "Stark",
    firstName: "Arya",
    img: "https://www.vhv.rs/dpng/d/493-4937336_facebook-silhouette-icon-at-getdrawings-facebook-profile-icon.png",
    email: "Stark@gamil.com",
    age: 16,
    status:"Active",

  },
  {
    id: 5,
    lastName: "Targaryen",
    firstName: "Daenerys",
    img: "https://www.vhv.rs/dpng/d/493-4937336_facebook-silhouette-icon-at-getdrawings-facebook-profile-icon.png",
    email: "Targarayen@gamil.com",
    age: 34,
    status:"Inactive",

  },
  {
    id: 6,
    lastName: "Melisandre",
    firstName: null,

    img: "https://www.vhv.rs/dpng/d/493-4937336_facebook-silhouette-icon-at-getdrawings-facebook-profile-icon.png",
    email: "Melisandre@gamil.com",
    age: 150,
    status:"Active",

  },
  {
    id: 7,
    lastName: "Clifford",
    firstName: "Ferrara",
    img: "https://www.vhv.rs/dpng/d/493-4937336_facebook-silhouette-icon-at-getdrawings-facebook-profile-icon.png",
    email: "Clifford@gamil.com",
    age: 44,
    status:"Inactive",

  },
  {
    id: 8,
    lastName: "Frances",
    firstName: "Rossini",
    img: "https://www.vhv.rs/dpng/d/493-4937336_facebook-silhouette-icon-at-getdrawings-facebook-profile-icon.png",
    email: "Frances@gamil.com",
    age: 36,
    status:"Active",

  },
  {
    id: 9,
    lastName: "Roxie",
    firstName: "Harvey",
    img: "https://www.vhv.rs/dpng/d/493-4937336_facebook-silhouette-icon-at-getdrawings-facebook-profile-icon.png",
    email: "Roxie@gamil.com",
    age: 65,
    status:"Active",

  },
];
