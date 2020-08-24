import { Update } from "@ngrx/entity";
import { Action } from '@ngrx/store'
import { Post } from '../utils/post.interface'

export enum PostActionTypes {
    LOAD_POST = "[Post] Load Post",
    LOAD_POST_SUCCESS = "[Post] Load Post Success",
    LOAD_POST_FAIL = "[Post] Load Post Fail",

    LOAD_POSTS = "[Post] Load Post",
    LOAD_POSTS_SUCCESS = "[Post] Load Post Success",
    LOAD_POSTS_FAIL = "[Post] Load Post Fail",

    ADD_POST = "[Post] Add Post",
    ADD_POST_SUCCESS = "[Post] Add Post Success",
    ADD_POST_FAIL = "[Post] Add Post Fail",
    
    UPDATE_POST = "[Post] Update Post",
    UPDATE_POST_SUCCESS = "[Post] Update Post Success",
    UPDATE_POST_FAIL = "[Post] Update Post Fail",

    DELETE_POST = "[Post] Delete Post",
    DELETE_POST_SUCCESS = "[Post] Delete Post Success",
    DELETE_POST_FAIL = "[Post] Delete Post Fail",
  }


export class AddPost implements Action {
    readonly type = PostActionTypes.ADD_POST

    constructor(public payload: Post) {}
}
export class AddPostSuccess implements Action {
    readonly type = PostActionTypes.ADD_POST_SUCCESS;
  
    constructor(public payload: Post) {}
  }
export class AddPostFail implements Action {
    readonly type = PostActionTypes.ADD_POST_FAIL;
  
    constructor(public payload: string) {}
  }


export class DeletePost implements Action {
    readonly type = PostActionTypes.DELETE_POST

    constructor(public payload: number) {}
}
export class DeletePostSuccess implements Action {
    readonly type = PostActionTypes.DELETE_POST_SUCCESS;
  
    constructor(public payload: number) {}
  }
export class DeletePostFail implements Action {
    readonly type = PostActionTypes.DELETE_POST_FAIL;
  
    constructor(public payload: string) {}
  }



export class UpdatePost implements Action {
    readonly type = PostActionTypes.UPDATE_POST

    constructor(public payload: Post) {}
}
export class UpdatePostSuccess implements Action {
    readonly type = PostActionTypes.UPDATE_POST_SUCCESS;
  
    constructor(public payload: Update<Post>) {}
  }
export class UpdatePostFail implements Action {
    readonly type = PostActionTypes.UPDATE_POST_FAIL;
  
    constructor(public payload: string) {}
  }



export class LoadPost implements Action {
    readonly type = PostActionTypes.LOAD_POST

    constructor(public payload: number) {}
}
export class LoadPostSuccess implements Action {
    readonly type = PostActionTypes.LOAD_POST_SUCCESS;
  
    constructor(public payload: Post) {}
  }
export class LoadPostFail implements Action {
    readonly type = PostActionTypes.LOAD_POST_FAIL;
  
    constructor(public payload: string) {}
  }



  export class LoadPosts implements Action {
    readonly type = PostActionTypes.LOAD_POSTS;
}
export class LoadPostsSuccess implements Action {
    readonly type = PostActionTypes.LOAD_POSTS_SUCCESS;
  
    constructor(public payload: Post[]) {}
  }
export class LoadPostsFail implements Action {
    readonly type = PostActionTypes.LOAD_POSTS_FAIL;
  
    constructor(public payload: string) {}
  }

export type Actions = 
| AddPost 
| AddPostSuccess
| AddPostFail
| DeletePost 
| DeletePostSuccess
| DeletePostFail
| UpdatePost 
| UpdatePostSuccess
| UpdatePostFail
| LoadPost 
| LoadPostSuccess
| LoadPostFail
| LoadPosts
| LoadPostsSuccess
| LoadPostsFail