const express = require("express")
const { generateUrl, search } = require("../module/Url")
const auth = require("../auth")
const router = express.Router()

router.post('/',generateUrl)
router.get('/:code',search)

module.exports = router