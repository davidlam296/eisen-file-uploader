import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { toast } from 'react-toastify'

const deleteFile = async (id: number) => {
  const url = `${process.env.REACT_APP_API_URL}/api/file/${id}`

  const response = await axios.delete(url)

  return { success: response.status === 204 }
}

export const useDeleteFileQuery = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ['deleteFile'],
    mutationFn: async (id: number) => {
      const response = await deleteFile(id)

      if (response.success) {
        toast.success('File deleted successfully!')
      } else {
        toast.error('There was an issue deleting the file.')
      }

      queryClient.invalidateQueries({ queryKey: ['getFiles'] })

      return response
    }
  })
}
