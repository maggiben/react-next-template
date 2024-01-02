import type { NextApiRequest, NextApiResponse } from 'next';
import api from '../../services/api'
import { Person } from 'types/type';

type ResponseData = {
  message: string
}
 
export default function handler(
  request: NextApiRequest,
  response: NextApiResponse<ResponseData | Person[]>
) {
  const { id, method = 'GET' } = request.query;
  if (id) {
    if (Array.isArray(id)) {
      switch(method) {
        case 'GET':
          return api.get(id.join('/'))
            .then((result) => response.status(200).send(result))
            .catch(error => {
              if (error.response && error.response.status === 404) {
                response.status(404).json({ message: 'Not Found' });
              } else {
                response.status(500).json({ message: 'Error' + error.message });
              }
            });
        case 'POST':
          return api.post(id.join('/'), request.body)
            .then((result) => response.status(200).send(result))
            .catch(error => {
              if (error.response && error.response.status === 404) {
                response.status(404).json({ message: 'Not Found' });
              } else {
                response.status(500).json({ message: 'Error' + error.message });
              }
            });
        default:
          return api.get(id.join('/'))
            .then((result) => response.status(200).send(result))
            .catch(error => {
              if (error.response && error.response.status === 404) {
                response.status(404).json({ message: 'Not Found' });
              } else {
                response.status(500).json({ message: 'Error' + error.message });
              }
            });
        }
    }
    return api.get(id.toString()).then((r) => response.status(200).send(r));
  }
  response.status(404).json({ message: 'Not Found' + id?.toString() });
}