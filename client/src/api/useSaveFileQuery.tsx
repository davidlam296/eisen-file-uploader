import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { toast } from 'react-toastify'

const saveFile = async (filePayload: FilePayload) => {
  const url = `${process.env.REACT_APP_API_URL}/api/file`

  const response = await axios.post(url, filePayload)

  return { success: response.status === 201 }
}

export type FilePayload = {
  name: string
}

export const useSaveFileQuery = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ['saveFile'],
    mutationFn: async (filePayload: FilePayload) => {
      const response = await saveFile(filePayload)

      if (response.success) {
        toast.success('File saved successfully!')
      } else {
        toast.error('There was an issue saving the file.')
      }

      queryClient.invalidateQueries({ queryKey: ['getFiles'] })

      return response
    }
  })
}