import useSWR from 'swr'
import Layout from '../components/layout'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

const Home = () => {
  const { data: song, error } = useSWR('/api/song', fetcher)
  if (error) return <div>failed to load</div>
  if (!song) return <div>loading...</div>

  return (
    <Layout>
      
      <h1>Sing Along With Me</h1>

      {song && (
        <>
          <h2>{song.title}</h2>
          <h3>By {song.artist}</h3>
          {song.lyrics.split("\\n\\n").map(verse => {
            return <p className="verse">{verse.split("\\n").map(line => <p className="line">{line}</p>)}</p>
          })}
        </>
      )}

      <style jsx>{`
        .line {
          margin: 0;
        }
      `}</style>
    </Layout>
  )
}

export default Home