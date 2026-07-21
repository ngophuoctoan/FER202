const BASE = 'https://jsonplaceholder.typicode.com'

export const fetchUser = async (userId) => {
  const response = await fetch(`${BASE}/users/${userId}`)
  if (!response.ok) throw new Error('Failed to fetch user')
  return response.json()
}

export const fetchPost = async (postId) => {
  const response = await fetch(`${BASE}/posts/${postId}`)
  if (!response.ok) throw new Error('Failed to fetch post')
  return response.json()
}

export const fetchUsers = async () => {
  const response = await fetch(`${BASE}/users`)
  if (!response.ok) throw new Error('Failed to fetch users')
  return response.json()
}

export const fetchPosts = async () => {
  const response = await fetch(`${BASE}/posts`)
  if (!response.ok) throw new Error('Failed to fetch posts')
  return response.json()
}
