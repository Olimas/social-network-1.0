const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let store = {
  _state: {
    profilePage: {
      posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'Its my first post', likesCount: 22},
        {id: 3, message: 'Hello', likesCount: 25},
      ],
      newPostText: 'test'
    },
    dialogsPage: {
      dialogs: [
        {id: 1, name: 'User 1'},
        {id: 2, name: 'User 2'},
        {id: 3, name: 'User 3'},
        {id: 4, name: 'User 4'},
        {id: 5, name: 'User 5'},
        {id: 6, name: 'User 6'},
      ],
      messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Hi'},
        {id: 5, message: 'How are you?'},
        {id: 6, message: 'Yo'},
      ],
      newMessagesText: 'test'
    }
  },
  _callSubscriber() {
    console.log('State changed')
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  addMessage() {
    let newMessage = {
      id: 7,
      message: this._state.dialogsPage.newMessagesText,
    };

    this._state.dialogsPage.messages.push(newMessage);
    this._state.dialogsPage.newMessagesText = '';
    this._callSubscriber(this._state);
  },
  updateNewMessagesText(newText) {
    this._state.dialogsPage.newMessagesText = newText;
    this._callSubscriber(this._state);
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 4,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };

      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    }
    else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  },
}

export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  }
}
export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  }
}

export default store;
