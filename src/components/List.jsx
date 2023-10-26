import React from 'react'
import SideBar from './SideBar'
import NavBar from './NavBar'
import DataTable from './DataTable'

const List = () => {
  return (
    <div className="flex">
    <SideBar />
    <div className="flex-1 m-2">
      <NavBar />
      <DataTable/>
      </div>
      </div>
  )
}

export default List