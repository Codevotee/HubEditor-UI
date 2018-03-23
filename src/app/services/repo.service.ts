import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IRepo } from '../store/models/repo.model';

@Injectable()
export class RepoService {
    private API_END_POINT = 'http://localhost:3000';

    constructor(private http: HttpClient) { }

    loadReposForUser(user: string) {
        return this.http.get<Array<IRepo>>(`${this.API_END_POINT}/repos/${user}`)
            .map(response => response);
    }
}
