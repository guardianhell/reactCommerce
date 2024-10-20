import React from 'react'
import DefaultLayout from '../../components/Layouts/DefaultLayout'
import CategoryList from '../../components/Modules/CategoryList'
import JumboTron from '../../components/Modules/JumboTron'
import { useEffect } from 'react'
import { getVoucher } from '../../utils/getVoucher'
import { useState } from 'react'
import { getListDTU } from '../../utils/getListDTU'

const Home = () => {


    const [voucherList, setVoucherList] = useState([])
    const [gameList, setGamesList] = useState([])

    useEffect(() => {
        getVoucher().then((result) => setVoucherList(result))
        getListDTU().then((result) => setGamesList(result))
    }, [])

    return (
        <DefaultLayout>
            <JumboTron />
            <CategoryList title={"Digital Voucher"} data={voucherList} />
            <CategoryList title={"Games"} data={gameList} />
        </DefaultLayout>
    )
}

export default Home