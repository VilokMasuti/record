import Record from '../models/Record.js'

export const getAllRecords = async (req, res) => {
  try {
    const records = await Record.find()
    res.json(records)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const createRecord = async (req, res) => {
  const record = new Record({
    name: req.body.name,
    email: req.body.email,
  })

  try {
    const newRecord = await record.save()
    res.status(201).json(newRecord)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export const updateRecord = async (req, res) => {
  try {
    const updatedRecord = await Record.findByIdAndUpdate(
      req.params.id,
      { name: req.body.name, email: req.body.email },
      { new: true }
    )
    res.json(updatedRecord)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export const deleteRecord = async (req, res) => {
  try {
    await Record.findByIdAndDelete(req.params.id)
    res.json({ message: 'Record deleted successfully' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
