const API_URL = 'http://localhost:3000/api'

export const fetchRecords = async () => {
  const response = await fetch(`${API_URL}/records`)
  if (!response.ok) {
    throw new Error('Failed to fetch records')
  }
  return response.json()
}

export const createRecord = async (record) => {
  const response = await fetch(`${API_URL}/records`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(record),
  })
  if (!response.ok) {
    throw new Error('Failed to create record')
  }
  return response.json()
}

export const updateRecord = async (id, record) => {
  const response = await fetch(`${API_URL}/records/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(record),
  })
  if (!response.ok) {
    throw new Error('Failed to update record')
  }
  return response.json()
}

export const deleteRecord = async (id) => {
  const response = await fetch(`${API_URL}/records/${id}`, {
    method: 'DELETE',
  })
  if (!response.ok) {
    throw new Error('Failed to delete record')
  }
}
