import { withApiAuthRequired } from '@auth0/nextjs-auth0';
import { NextApiRequest, NextApiResponse } from 'next';



export default withApiAuthRequired((req: NextApiRequest, res: NextApiResponse)=> {
    res.status(200).json({
        codes: [
            {
                id: 1,
                code: '123'
            },
            {
                id: 2,
                code: '122'
            },
            {
                id: 3,
                code: '133'
            }
        ]
    })
})