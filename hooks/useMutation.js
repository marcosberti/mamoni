import { useMutation as useRQMutation } from '@tanstack/react-query'
import getAPIPromise from '../lib/fetcher'

const useMutation = (endpoint, method = 'POST') => {
  const mutationState = useRQMutation(body => getAPIPromise(endpoint, method, body))

  // TODOMB: needs to be handled?
  // if (mutationState.isError && mutationState.error.status === 401) {
  //   clearUser()
  // }

  return mutationState
}

const usePost = (endpoint) => {
  return useMutation(endpoint, 'POST')
}

const usePatch = (endpoint) => {
  return useMutation(endpoint, 'PATCH')
}

const useDelete = (endpoint) => {
  return useMutation(endpoint, 'DELETE')
}

export {
  usePost,
  usePatch,
  useDelete,
}