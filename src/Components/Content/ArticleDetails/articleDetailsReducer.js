import { addArticleLike, getArticle } from "../../../utils/api/data";

export const initialState = {
    article: {
        loaded: false,
        createdAt: null,
        likes: [],
        likesCount: 0,
        _id: null,
        topic: null,
        description: null,
        content: null,
        author: null
    },
    ui: {
        isAuthor: null,
        hasLiked: false
    }
}

export default function articleDetailsReducer(state, action) {
    switch (action.type) {
        case 'SET_ARTICLE': {
            return {
                article: {
                    loaded: true,
                    createdAt: action.payload.createdAt,
                    likes: action.payload.likes,
                    likesCount: action.payload.likesCount,
                    _id: action.payload._id,
                    topic: action.payload.topic,
                    description: action.payload.description,
                    content: action.payload.content,
                    author: action.payload.author,
                },
                ui: {
                    isAuthor: action.payload.isAuthor,
                    hasLiked: action.payload.hasLiked
                }

            }
        }
        case 'LIKE_ARTICLE': {
            return {
                article: {
                    ...state.article,
                    likes: action.payload,
                    likesCount: action.payload.length
                },
                ui: {
                    isAuthor: state.ui.isAuthor,
                    hasLiked: true
                }
            }
        }
        default: {
            return state;
        }
    }
}

export const setArticleData = (id, userId) => async (dispatch) => {
    try {
        const data = await getArticle(id);
        data.isAuthor = data.author._id === userId;
        data.hasLiked = data.likes.some(like => like === userId);
        dispatch({ type: 'SET_ARTICLE', payload: data });
    } catch (err) {
        alert(err.message);
    }
}

export const likeArticle = (id, likes) => async (dispatch) => {
    try {
        await addArticleLike(id);
        dispatch({ type: 'LIKE_ARTICLE', payload: [...likes, id] });
    } catch (err) {
        alert(err.message);
    }
}