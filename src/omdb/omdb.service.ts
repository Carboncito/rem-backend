import { Injectable, NotAcceptableException } from '@nestjs/common';

@Injectable()
export class OmdbService {
  private url = process.env.OMDB_URL + `?apikey=${process.env.OMDB_API_KEY}`;

  async getVideos(queryparams: string) {
    const params = new URLSearchParams(queryparams);
    if (!params.size) throw new NotAcceptableException();

    const url = this.url + `&${params}`;
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
  }
}
