

getMail = async (req, res) => {
    try {
        const getId = req.params.id
        let intId = parseInt(getId)
        console.log('intId', intId)
        if(intId == null || undefined || isNaN(intId) )
        {
            return res
                .status(500)
                .json({
                    success: false,
                    message:'quotes is null or undefined or NaN'
                })
        }
        if((Object.keys(motivation).length) <= intId)
        { intId = 0 }
        console.log('motivation[getId + 1]: ',intId + 1)
        const sendQuote = motivation[intId + 1]
        console.log('sendQuote', sendQuote)
        return res
        .status(200)
        .json({
            success: true,
            message: 'mail send sucess',
            data: []
        })
    }
    catch (e) {
        console.log(" error ", e)
        return res
            .status(500)
            .json({
                success: false,
                message: e.message,
                data : e
            })
    }
}

module.exports = {
    getMail
}