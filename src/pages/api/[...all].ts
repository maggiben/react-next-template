import type { NextApiRequest, NextApiResponse } from 'next';
import { nextConfigVariables } from '@utils/index';
import httpProxyMiddleware from 'next-http-proxy-middleware';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  httpProxyMiddleware(req, res, {
    target: nextConfigVariables.apiSearch,
    pathRewrite: [
      {
        patternStr: '^/api',
        replaceStr: '',
      },
    ],
  });
};

export default handler;

