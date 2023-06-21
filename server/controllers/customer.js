const CustomerModel = require("../modals/customerModel");

const showAllCustomers = (req, res) => {

    try {
        CustomerModel.find({})
            .then(customer => {
                res.json(customer);
            });


    } catch (err) {
        res.json(err.message);
    }
};

const showCustomer = (req, res) => {
    // res.send("Show trainee");
    try {
        CustomerModel.find({ $or: [{ "name": req.body.name }, { "age": req.body.age }, { "_id": req.body.id }] })
            .then(customer => {
                res.json(customer);
            });

        // TraineeModel.find({}, (trainees) => {
        //     res.json(trainees);
        // });
    } catch (err) {
        res.json(err.message);
    }
};

const addCustomer = async (req, res) => {
    // res.send("Add Trainee - from Routes");

    const Customer = new CustomerModel(req.body);

    try {
        let Customers = await CustomerModel.find({ "username": req.body.username });

        if (Customers.length > 0)
            res.json("Trainee Already Exists!")
        else {
            await Customers.save();
            res.json("Customers Added Successfully!");
        }
    } catch (err) {
        let errorList = [];
        if (err.errors) {
            for (let temp in err.errors) {
                errorList.push(err.errors[temp].message);
            }
        }
        res.json(errorList);
    }
};

const updateCustomer = (req, res) => {
    // res.send("Update Trainee - from Routes");

    try {
        CustomerModel.updateOne({ "_id": req.body._id }, { $set: req.body })
            .then(results => {
                if (results.modifiedCount > 0) {
                    res.json("Customers Updated Successfully!");
                } else {
                    res.json("Unable to update the Customer!");
                }
            });
    } catch (err) {
        res.json(err.message);
    }
};

const deleteCustomer = (req, res) => {
    // res.send("Delete Trainee - from Routes");

    try {
        CustomerModel.deleteOne({ "_id": req.body._id })
            .then(results => {
                if (results.deletedCount > 0) {
                    res.json("Customer Deleted Successfully!");
                } else {
                    res.json("Unable to delete the Trainee!");
                }
            });
    } catch (err) {
        res.json(err.message);
    }
};

module.exports = {
    showAllCustomers,
    showCustomer,
    addCustomer,
    updateCustomer,
    deleteCustomer,
}