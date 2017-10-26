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
        `
      },
      {
        id: 'second-post',
        date: '2017-02-20',
        body: 'Then we went there.'
      }
    ])
  })
}

export default {
  loadPosts
}
