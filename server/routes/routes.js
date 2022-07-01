const express = require('express');
const customerModel = require('../config/models/customerModel');
const orderModel = require('../config/models/orderModel');
const emailModel = require('../config/models/emailModel');

const router = express.Router()

// Post customer
router.post("/customers", async (req, res) => {
	const customer = new customerModel({
		customerId: req.body.customerId,
        name: req.body.name,
        address: req.body.address,
        phone: req.body.phone,
        email: req.body.email,
	})
	await customer.save()
	res.send(customer)
})

// Post order
router.post("/orders", async (req, res) => {
	const order = new orderModel({
		orderId: req.body.orderId,
        customerId: req.body.customerId,
        product: req.body.product,
        quantity: req.body.quantity,
        contact: req.body.contact,
        payment: req.body.payment,
	})
	await order.save()
	res.send(order)
})

// Post email
router.post("/emails", async (req, res) => {
	const emailContent = new emailModel({
		emailId: req.body.emailId,
		email: req.body.email,
	})
	await emailContent.save()
	res.send(emailContent)
})

module.exports = router;