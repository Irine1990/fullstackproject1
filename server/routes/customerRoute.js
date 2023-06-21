const router = require('express').Router();

const CustomersController = require("../controllers/customer");


router.get("/showAllCustomers", CustomersController.showAllCustomers);

router.post("/showCustomer", CustomersController.showCustomer);

router.post("/addCustomer", CustomersController.addCustomer);

router.put("/updateCustomer", CustomersController.updateCustomer);

router.delete("/deleteCustomer", CustomersController.deleteCustomer);

module.exports = router;