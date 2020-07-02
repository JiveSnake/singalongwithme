import { Firestore } from '@google-cloud/firestore'
import { Song } from "../types/song"

const firestore = new Firestore()

export async function getTitles(): Promise<String[]> {
    const songData = (await firestore.collection('songs').select('title').get()).docs.map(d => d.data())
    const titles = songData.map(song => {
      return song.title
    })
    return titles
} 

export async function getSong(id: string): Promise<Song> {
    const songData = (await firestore.doc(`/songs/${id}`).get()).data()
    const song = {
        title: songData.title,
        artist: songData.artist,
        lyrics: songData.lyrics
    }
    return song 
}