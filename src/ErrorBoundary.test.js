// To-do :: write error boundary test in react testing library

// import ErrorBoundary from "./ErrorBoundary"

// describe('<ErrorHandler>', () => {
//   it(`shows the fallback when there's an error`, () => {
//     const Throws = () => {
//       throw new Error('Oh no!')
//     }
//     const fallback = error => (
//       <span>
//         Error: {error.message}
//       </span>
//     )
//     const { getByText, unmount } = render(
//       <ErrorBoundary>
//         <Throws />
//       </ErrorBoundary>
//     )
//     getByText('Error: Oh no!')
//     unmount()
//   })
// })
