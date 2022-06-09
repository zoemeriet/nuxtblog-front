import axios from 'axios'
import { defineNuxtPlugin } from '#app'
import { PostRepository } from "utils/repositories/PostRepository"

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()

  const client = axios.create({
    baseURL: config.API_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  })

  const onRequest = (config) => {
    const shouldTriggerSetCSRF = config.method !== 'get'
    if (shouldTriggerSetCSRF) {
      return setCSRFToken().then(() => config)
    }
    return config
  }

  const setCSRFToken = () => {
    return client.get('/sanctum/csrf-cookie')
  }

  client.interceptors.request.use(onRequest)

  return {
    provide: {
      api: () => {
        return {
          posts: new PostRepository(client),
        }
      }
    }
  }
})