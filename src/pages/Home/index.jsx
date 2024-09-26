import React from 'react'
import DefaultLayout from '../../components/Layouts/DefaultLayout'
import CategoryList from '../../components/Modules/CategoryList'
import JumboTron from '../../components/Modules/JumboTron'

const Home = () => {
    return (
        <DefaultLayout>
            <JumboTron />
            <CategoryList title={"TOP GAMES"} />
            <CategoryList title={"TRENDING NOW"} />

        </DefaultLayout>
    )
}

export default Home