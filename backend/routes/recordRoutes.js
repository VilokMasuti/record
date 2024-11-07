import express from 'express'
import {
  getAllRecords,
  createRecord,
  updateRecord,
  deleteRecord,
} from '../controllers/recordController.js'

const router = express.Router()

router.get('/', getAllRecords)
router.post('/', createRecord)
router.put('/:id', updateRecord)
router.delete('/:id', deleteRecord)

export default router
