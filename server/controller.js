// module.exports={
//     getHouses: (req, res, next)=>{
//         const db= req.app.get('db')
//         db.getAllHouses().then(results=>{
//             res.status(200).json(results)
//         }).catch(err=>{
//             console.log(err)
//             res.status(500).send('There was an error with the server.')
//         })
//     },

    // postHouse: (req, res, next)=>{
    //     const db= req.app.get('db')
    //     let {property_name, address, city, state, zipcode} = req.body
    //     db.postHouseListing([property_name, address, city, state, zipcode]).then(results=>{
    //         res.status(200).json(results)
    //     }).catch(err=>{
    //         console.log(err)
    //         res.status(500).send('There was an error with the server.')
    //     })
    // },

    // updateHouse: (req, res, next)=>{
    //     const db= req.app.get('db')

    // },


    // deleteHouse: (req, res, next)=>{
    //     const db= req.app.get('db')
    // }
// }

const getHouses=(req, res, next)=>{
    const db= req.app.get('db')
    db.getAllHouses().then(results=>{
        res.status(200).json(results)
    }).catch(err=>{
        console.log(err)
        res.status(500).send('There was an error with the server.')
    })
}

module.exports={
    getHouses
}
