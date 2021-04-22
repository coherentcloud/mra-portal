import React from 'react'
import DataPrivacy from '../../components/settings/DataPrivacy'
import General from '../../components/settings/General'
import Notification from '../../components/settings/Notification'
import Plan from '../../components/settings/Plan'

function Setting() {
    return (
        <>
        <h1 class="app-page-title">Settings</h1>
        <hr class="mb-4" />
            <General />
            <hr class="my-4"/>
            <Plan />
            <hr class="my-4"/>
            <DataPrivacy />
            <hr class="my-4"/>
            <Notification />
        </>
    )
}

export default Setting
