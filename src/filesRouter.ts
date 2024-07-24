import { Router, Request, Response } from 'express';
import { getFiles, saveFile, FileDataPayload, deleteFile } from './fileModels';

const router = Router();

router.get('/files', async (req: Request, res: Response) => {
  const response = await getFiles()

  if (response) {
    res.json(response.rows)
  } else {
    res.status(500)
  }
});

router.post('/file', async (req: Request<{}, {}, FileDataPayload>, res: Response) => {
  const response = await saveFile(req.body)

  if (response) {
    res.sendStatus(201)
  } else {
    res.sendStatus(500)
  }
})

router.delete('/file/:id', async (req: Request, res: Response) => {
  const response = await deleteFile(req.params.id)

  if (response.rows) {
    res.sendStatus(204)
  } else {
    res.sendStatus(500)
  }
})

export default router;