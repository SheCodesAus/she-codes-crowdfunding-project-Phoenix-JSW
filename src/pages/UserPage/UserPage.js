import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import EditUser from "../../components/EditUser/EditUser"
import TitleText from "../../components/TitleText/TitleText"
import ProjectCard from "../../components/ProjectCard/ProjectCard"
import FullPageLoader from "../../components/FullPageLoader/FullPageLoader"
import UserDetails from "../../components/UserDetails/UserDetails"
import "./UserPage.css"

function User({ convertDateTime }) {
  const [userProfile, setUser] = useState({})
  const [loading, setLoading] = useState(true)
  const [projectList, setProjectList] = useState([])
  const [editProfile, setEditUser] = useState(false)
  const { id } = useParams()
  const userID = window.localStorage.getItem("userID")

  // Get user details
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}users/${userID}/`)
      .then((results) => {
        return results.json()
      })
      .then((data) => {
        setUser(data)
        setLoading(false)
      })
    fetch(`${process.env.REACT_APP_API_URL}${userID}/supported-projects/`)
      .then((results) => {
        return results.json()
      })
      .then((data) => {
        setProjectList(data)
        setLoading(false)
      })
  }, [id, userID])

  const handleClick = () => {
    setEditUser(!EditUser)
  }

  if (loading) {
    return <FullPageLoader />
  } else {
    return (
      <div>
        {EditUser ? (
          <>
            <TitleText title="Update Your Details" />
            <EditUser user={user} />
          </>
        ) : (
          <>
            <TitleText title="User" />
            <UserDetails user={user} onClick={handleClick} />
          </>
        )}
        {projectList.length === 0 ? (
          <></>
        ) : (
          <>
            <div className="project-cards">
              <h2>{`Projects ${user.preferredname} has supported`}</h2>
              {projectList.map((projectData, key) => {
                return (
                  <ProjectCard
                    key={key}
                    projectData={projectData}
                    convertDateTime={convertDateTime}
                  />
                )
              })}
            </div>
          </>
        )}
      </div>
    )
  }
}

export default User