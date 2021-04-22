import React from 'react'
import Payment from '../../components/account/Payment'
import PreferencesCard from '../../components/account/PreferencesCard'
import ProfileCard from '../../components/account/ProfileCard'
import SecuirityCard from '../../components/account/SecuirityCard'

function Account() {
    return (
        <>
            <h1 class="app-page-title">My Account</h1>
            <div class="row gy-4">
                <ProfileCard />
                <PreferencesCard />
                <SecuirityCard />
                <Payment />
            </div>
        </>
    )
}

export default Account
