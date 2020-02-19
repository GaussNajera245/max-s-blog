export default function ({ store, redirect }) {
    // If the user is not authenticated
    let auth = store.state.users.id !== undefined && store.state.users.id !== null;

    if (!auth) {
      return redirect('/user/signin')
    }
  }