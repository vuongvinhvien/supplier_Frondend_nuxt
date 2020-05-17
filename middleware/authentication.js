export default function ({ store, route, redirect }) {
    let isAuthenticated = store.getters["auth/isAuthenticated"]
    if (!isAuthenticated && route.name !== 'signin') {
        redirect('/signin')
    }
    debugger;
    
    if (isAuthenticated && route.name === 'signin') {
      
      redirect('/orders')
    }
}