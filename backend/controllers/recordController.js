import Record from '../models/Record.js'

export const getAllRecords = async (req, res) => {
  try {
    const records = await Record.find()
    res.json(records)
  } catch (error) {
    console.error(error) // Logging error details
    res.status(500).json({ message: error.message })
  }
}

export const createRecord = async (req, res) => {
  // Basic validation
  if (!req.body.name || !req.body.email) {
    return res.status(400).json({ message: 'Name and email are required' })
  }

  const record = new Record({
    name: req.body.name,
    email: req.body.email,
  })

  try {
    const newRecord = await record.save()
    res.status(201).json(newRecord)
  } catch (error) {
    console.error(error)
    res.status(400).json({ message: error.message })
  }
}

export const updateRecord = async (req, res) => {
  // Basic validation
  if (!req.body.name || !req.body.email) {
    return res.status(400).json({ message: 'Name and email are required' })
  }

  try {
    const updatedRecord = await Record.findByIdAndUpdate(
      req.params.id,
      { name: req.body.name, email: req.body.email },
      { new: true }
    )
    res.json(updatedRecord)
  } catch (error) {
    console.error(error)
    res.status(400).json({ message: error.message })
  }
}

export const deleteRecord = async (req, res) => {
  try {
    const deletedRecord = await Record.findByIdAndDelete(req.params.id)
    if (!deletedRecord) {
      return res.status(404).json({ message: 'Record not found' })
    }
    res.status(204).send() // Successful deletion without a response body
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: error.message })
  }
}
