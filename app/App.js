import React, { Component } from 'react';
import Player from './Player';

export const TRACKS = [
    {
        title: 'Sea Of Grace',
        artist: 'Max Cameron',
        albumArtUrl: "http://36.media.tumblr.com/14e9a12cd4dca7a3c3c4fe178b607d27/tumblr_nlott6SmIh1ta3rfmo1_1280.jpg",
        audioUrl: "http://russprince.com/hobbies/files/13%20Beethoven%20-%20Fur%20Elise.mp3",
    },
    {
        title: 'Love Yourself',
        artist: 'Justin Bieber',
        albumArtUrl: "http://arrestedmotion.com/wp-content/uploads/2015/10/JB_Purpose-digital-deluxe-album-cover_lr.jpg",
        audioUrl: 'http://russprince.com/hobbies/files/13%20Beethoven%20-%20Fur%20Elise.mp3',
    },
    {
        title: 'Hotline Bling',
        artist: 'Drake',
        albumArtUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Drake_-_Hotline_Bling.png',
        audioUrl: 'http://russprince.com/hobbies/files/13%20Beethoven%20-%20Fur%20Elise.mp3',
    },
];

export default class App extends Component {
    render() {
        return <Player tracks={TRACKS} />
    }
}
