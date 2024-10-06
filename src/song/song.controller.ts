import { Body, Controller, Delete, Get, HttpException, HttpStatus, Post, Put } from '@nestjs/common';
import { SongService } from './song.service';
import { CreateSongDTO } from './dto/create-song-dto';

@Controller('songs')
export class SongController {
    constructor(private songService: SongService) { }

    @Post()
    create(@Body() createSongDTO: CreateSongDTO) {
        return this.songService.create(createSongDTO)
    }

    @Get()
    findAll() {
        try {
            return this.songService.findAll()
        }
        catch (e) {
            throw new HttpException('server error', HttpStatus.INTERNAL_SERVER_ERROR, {
                cause: e
            })
        }
    }

    @Get(':id')
    findOne() {
        return 'find a single song'
    }

    @Put(':id')
    update() {
        return 'update song'
    }

    @Delete(':id')
    delete() {
        return 'delete song'
    }
}
