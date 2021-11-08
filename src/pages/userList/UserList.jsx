import { DataGrid } from "@material-ui/data-grid";
import "./userList.css";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";



const UserList = () => {

    const [data,setData] = useState(userRows);

    const handleDelete = (id) => {
              setData(data.filter(row => row.id !== id));
    
    }

    const columns = [
        { field: "id", headerName: "ID", width: 110 },
        {
          field: "user",
          headerName: "User Name",
          width: 200,
          renderCell: (params) => {
            return (
              <div className="userListUser">
                <img className="userListImg" src={params.row.avatar} alt="avatar" />
                {params.row.username}
              </div>
            );
          },
        },
        {
          field: "email",
          headerName: "E-mail",
          width: 200,
          editable: true,
        },
        {
          field: "status",
          headerName: "Status",
          width: 120,
          editable: true,
        },
        {
          field: "transaction",
          headerName: "Transaction Volume",
          width: 160,
        },
        {
          field: "action",
          headerName: "Action",
          width: 150,
          renderCell: (params) => {
            return (
              <>
                <Link to={"/users/" + params.row.id}>
                  <button className="userListEdit">Edit</button>
                </Link>
                <DeleteOutline onClick={()=>handleDelete(params.row.id)} className="userListDlt" />
              </>
            );
          },
        },
      ];

  return (
    <div className="userList">
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};

export default UserList;
