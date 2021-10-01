import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { checkUserIsAdmin } from "../../../Admin/utils/utils";
import { AdminBlock } from "./ToolbarStyles";

const mapState = ({ user }) => ({
   currentUser: user.currentUser,
});

const Toolbar = () => {
   const { currentUser } = useSelector(mapState);

   const isAdmin = checkUserIsAdmin(currentUser);

   if (!isAdmin) return null;

   return (
      <AdminBlock>
         <Link to="/admin">My Admin</Link>
      </AdminBlock>
   );
};

export default Toolbar;
