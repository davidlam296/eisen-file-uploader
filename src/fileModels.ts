import pool from './db';

export const getFiles = () => {
  return (async () => {
    const client = await pool.connect();

    try {
      return await client.query('SELECT * FROM files');
    } catch {
      throw new Error('Unable to fetch file data');
    } finally {
      client.release();
    }
  })();
}

export type FileDataPayload = {
  name: string
}

// This only saves the metadata
export const saveFile = (fileData: FileDataPayload) => {
  return (async () => {
    const client = await pool.connect();

    try {
      return await client.query(
        `INSERT INTO files 
          (name) 
        VALUES 
          ($1)`,
        [
          fileData.name
        ]
      );
    } catch {
      throw new Error('Unable to save file data');
    } finally {
      client.release();
    }
  })();
}

export const deleteFile = (id: string) => {
  return (async () => {
    const client = await pool.connect();

    try {
      return await client.query(
        `DELETE FROM files WHERE id = $1 RETURNING *`,
        [ id ]
      );
    } catch {
      throw new Error('Unable to delete file');
    } finally {
      client.release();
    }
  })();
}