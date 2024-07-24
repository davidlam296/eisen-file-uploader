import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export type ApiFile = {
  id: number
  name: string,
  created_at: string
}

export type File = {
  id: number
  name: string,
  createdAt: Date
}

const getFiles = async (): Promise<{ success: boolean, data: File[] }> => {
  const url = `${process.env.REACT_APP_API_URL}/api/files`

  const response = await axios.get<ApiFile []>(url)

  return { 
    success: response.status === 200,
    data: response.data ? response.data.map(({ id, name, created_at }) => ({
      id, name, createdAt: new Date(created_at)
    })) : []
  }
}

export const useGetFilesQuery = () => {
  return useQuery({
    queryKey: ['getFiles'],
    queryFn: async () => {
      const response = await getFiles()

      return { files: response.data }
    }
  })
}