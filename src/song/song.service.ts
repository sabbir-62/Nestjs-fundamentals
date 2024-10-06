import { Injectable } from '@nestjs/common';

@Injectable()
export class SongService {

    private readonly songs = []

    create(song) {
        this.songs.push(song);
        return this.songs
    }

    findAll() {
        // return this.songs
        throw new Error('Data fetch fail')
    }

}
