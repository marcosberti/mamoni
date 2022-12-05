import {authRoute} from '../../../lib/auth'

export default authRoute((req, res) => {  
  if (req.method === 'POST') {
    res.status(201).json({ id: 'temp-id', ...req.body })
  } else if(req.method === 'UPDATE') {
    // res.status(200).json({ name: 'John Doe' })
  } else if (req.method === 'Delete') {
    // res.status(200).json({ name: 'John Doe' })
  }
})
