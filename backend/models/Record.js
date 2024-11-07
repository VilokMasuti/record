import mongoose from 'mongoose'

const RecordSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
)

const Record = mongoose.model('Record', RecordSchema)
export default Record
