
import {readFile, writeFile} from "fs/promises"
import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagesRepository {
  async findOne(id: string) {
    const contents = await readFile("./messages.json", "utf8");
    const messages = JSON.parse(contents);

    return messages[id];
  }

  async findAll(){
    const contents = await readFile("./messages.json", "utf8");

  }

  async create(message: string){

  }
}