/* tslint:disable */

class _RedditClient {


    private BASE_URL() {
        return process.env.NODE_ENV === 'development' || process.env.REACT_APP_APIURL
            ? "http://localhost/"
            : process.env.REACT_APP_APIURL || "http://reddit-backend.tetel.in/";
    }

    public getPost(postId: number) {
        return fetch(this.BASE_URL() + "post/" + postId.toString());
    }
    public postLike(postId: number) {
        return fetch(this.BASE_URL() + "like/" + postId.toString(), { method : "PUT" });
    }
    public postDislike(postId: number) {
        return fetch(this.BASE_URL() + "dislike/" + postId.toString(), { method : "PUT" });
    }
}

export const RedditClient = new _RedditClient();
