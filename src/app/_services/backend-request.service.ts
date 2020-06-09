import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../_entities/post';
import { Observable } from 'rxjs';
import { FriendRequest } from '../_entities/friend-request';

const API_URL = 'http://localhost:8080/api/';

@Injectable({
  providedIn: 'root'
})
export class BackendRequestService {

  constructor(private httpClient: HttpClient) { }

  getUserPosts(id: number): Observable<Post[]> {
    return this.httpClient.get<Post[]>(API_URL + `posts/user/${id}`);
  }

  getFriendRequests(userId: number): Observable<FriendRequest[]> {
    return this.httpClient.get<FriendRequest[]>(API_URL + `friendrequests/user/${userId}`);
  }

  sendReply(post: Post): Observable<any>  {
    return this.httpClient.post<Post>(API_URL + `posts`, post);
  }
}
