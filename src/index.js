import _ from 'lodash'
import moment from 'moment'
import classes from './index.scss'

const startDate = moment('2017-01-01')
const endDate = moment('2017-12-31')
const dateElement = window.document.createElement('div')
const durationHours = endDate.diff(startDate, 'hours')
const pixelsPerHour = 10
const hoursPerPage = 24

let postIndex = {}
const postContainer = window.document.createElement('div')

function main () {
  window.document.body.style.height = `${pixelsPerHour * (durationHours + window.innerHeight)}px`

  // Insert an image into the DOM.
  const slide = window.document.createElement('div')
  slide.classList.add(classes.slide)
  slide.style.backgroundImage = `url('https://lh3.googleusercontent.com/qFImCEXHSuiUSsWtlwW_1LiJk0YWtnMJMU2qlNhJ8uSBVouUYpW6m5JQ3DWHqQ1v4So2wmAxgfM_UpmQPDrZrWJ0Z7hoJy8GgwOMwiQ65RYsphFrtkw5CnT3I7A4uLblKp0oAzCgOV0=w765-h574-no')`
  window.document.body.appendChild(slide)

  // Add the date element
  dateElement.classList.add(classes.date)
  window.document.body.appendChild(dateElement)

  // Listen for scroll events.
  window.addEventListener('scroll', onScroll)

  // Read the posts.
  postContainer.classList.add(classes.postContainer)
  window.document.body.appendChild(postContainer)
  const posts = [{
    id: 0,
    date: moment('2017-01-20'),
    body: 'First we went here!'
  }, {
    id: 1,
    date: moment('2017-02-21'),
    body: 'Then we went there!'
  }]
  addPosts(posts)
}

function onScroll (event) {
  let scheduledToHandleEvent = false
  if (!scheduledToHandleEvent) {
    window.requestAnimationFrame(() => {
      setDate(startDate.clone().add(parseInt(window.scrollY / pixelsPerHour, 10), 'hours'))
      scheduledToHandleEvent = false
    })
    scheduledToHandleEvent = true
  }
}

let livePosts = new Set()

function setDate (date) {
  dateElement.innerText = date.toString()

  const activePosts = new Set()
  const hourNumber = date.diff(startDate, 'hours')
  _.range(hoursPerPage).forEach((offset) => {
    const post = postIndex[(hourNumber + offset).toString()]
    if (post) {
      activePosts.add(post)
    }
  })

  // For each one of the posts that were there before but are no
  // longer active, fade them out.
  livePosts.forEach((post) => {
    if (!activePosts.has(post)) {
      fadePostOut(post)
    }
  })

  // For each one of the posts that weren't active but now are, fade
  // them in.
  activePosts.forEach((post) => {
    if (!livePosts.has(post)) {
      fadePostIn(post)
    }
  })

  livePosts = activePosts
}

const postElements = {}

function fadePostIn (post) {
  const element = window.document.createElement('div')
  element.classList.add(classes.post)
  element.innerText = post.body
  postElements[post.id.toString()] = element
  postContainer.appendChild(element)
  window.requestAnimationFrame(() => {
    element.style.opacity = 1
    element.style.transform = 'translateX(0)'
  })
}

function fadePostOut (post) {
  const element = postElements[post.id.toString()]
  delete postElements[post.id.toString()]
  element.style.opacity = 0
  element.style.transform = 'translateX(200%)'
  window.setTimeout(() => {
    postContainer.removeChild(element)
  }, 1000)
}

function addPosts (posts) {
  posts.forEach((post) => {
    postIndex[post.date.diff(startDate, 'hours').toString()] = post
  })
}

main()
