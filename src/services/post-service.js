function loadPosts () {
  return new Promise((resolve, reject) => {
    resolve([
      {
        id: 'first-post',
        date: '2017-10-25',
        title: 'The adventures of Jenny and Garrett',
        type: 'text',
        body: `
          We will post updates about our travel adventures
          here. You can scroll up/down to see posts from the past,
          or find out where we're planning to be in the future.
        `,
        background: 'https://lh3.googleusercontent.com/qFImCEXHSuiUSsWtlwW_1LiJk0YWtnMJMU2qlNhJ8uSBVouUYpW6m5JQ3DWHqQ1v4So2wmAxgfM_UpmQPDrZrWJ0Z7hoJy8GgwOMwiQ65RYsphFrtkw5CnT3I7A4uLblKp0oAzCgOV0=w765-h574-no'
      },
      {
        id: 'moving-out-mess',
        date: '2017-10-26',
        title: 'Moving out',
        type: 'text',
        body: `Progress is slow, but we're on track`,
        background: 'https://lh3.googleusercontent.com/EjQLLtKi1XGa5wpvkSQswjOuOlT4JgK5n63jm5lD_KElj4zWgVM0kAw264BVeOyC2jeovlZOpFMLIIqAfXznhP8DMrWgVgwYZ9iDGSUmLTBofAjrGKuI2TlgYPF6uXKMZFrV5hmmqh0=w740-h555-no'
      }
    ])
  })
}

export default {
  loadPosts
}
