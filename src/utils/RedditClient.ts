/* tslint:disable */

class _RedditClient {
    public getPost(postId: number) {
        return fetch("http://localhost/post/" + postId);
    }
    public postLike(postId: number) {
        return fetch("http://localhost/like/" + postId, { method : "PUT" });
    }
    public postDislike(postId: number) {
        return fetch("http://localhost/dislike/" + postId, { method : "PUT" });
    }
}

export const RedditClient = new _RedditClient();
