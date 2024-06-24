import { Injectable } from '@angular/core';
import { Blog } from '../models/blog';
import { BLOG } from '../../data/blog';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  blog: Blog = BLOG;
  constructor() {}

  getPosts() {
    return this.blog.posts;
  }

  getCategories() {
    return this.blog.postCategories;
  }
}
