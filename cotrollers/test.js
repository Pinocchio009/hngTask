const Record = require('../models/test');

exports.getRecords = async (req, res) => {
    try {
        let records = await Record.find()
        if(records.length === 0)
        return res.status(400).json({
            message: 'No records found'
        })
        res.status(200).json({
            message: 'record found',
            records
        })
    } catch (error) {   
        res.status(500).json({
            message: 'internal server error',
            error: error.message
        })
    }
}
    
exports.createRecords = async (req,res) => {
    try {
        let records = await req.body;
        let created = await Record.create(records);
        if(!created)
        return res.status(400).json({
            message: "records not created"
        })
        return res.status(201).json({
            message: 'record created',
            records: created
        })
    } catch (error) {
        res.status(500).json({ 
            success: false,
            message: 'internal server error',
            error: error.message
        })
    }
}  
    
    