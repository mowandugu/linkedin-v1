import React from 'react'
import './Sidebar.css'
import {Avatar} from '@mui/material'
import { selectUser } from './features/userSlice'
import { useSelector } from 'react-redux'

function Sidebar() {
    const user = useSelector(selectUser)

    const recentItems = (topic) => (
        <div className='sidebar__recentItem'>
            <span className='sidebar__hash'>#</span>
            <p>{topic}</p>
        </div>
    )
     
    return (
        <div className='sidebar'>
            <div className='sidebar__top'>
                <img src='https://cdn6.f-cdn.com/contestentries/1301217/27758306/5acbe984b11d9_thumb900.jpg' alt='' />
                <Avatar src={user.photoUrl} className='sidebar__avatar'>{user.email[0]}</Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>

            <div className='sidebar__stats'>
                <div className='sidebar__stat'>
                  <p>Who viewed you</p>
                  <p className='sidebar__statNumber'>3434</p>
                </div>
                <div className='sidebar__stat'>
                  <p>Views on posts</p>
                  <p className='sidebar__statNumber'>3323</p>
                </div>
            </div>

            <div className='sidebar__bottom'>
                <p>Recent</p>
                {recentItems('reactjs')}
                {recentItems('programming')}
                {recentItems('developer')}
                {recentItems('coding')}
                {recentItems('design')}
                {recentItems('engineering')}

            </div>

        </div>
    )
}

export default Sidebar
