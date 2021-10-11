export default function Home(props) {
  return (
    <div>
    <h1>Hello World from Organization Detail page</h1>
    <p>{props.location.hash}</p>
    </div>
  )
}