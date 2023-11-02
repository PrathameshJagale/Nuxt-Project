// export default function ({route}) {
//     if(route.path === "/about"){
//         console.log("Navigating to About Page")
//     }
// }

export default defineNuxtRouteMiddleware((to, from) => {
    // console.log("From: ",from);
    // console.log("To: ",to);
    const isLoggedIn = false
    if (!isLoggedIn) {
        // return navigateTo("/login")
        console.log("Navigating to About Page")
    } 
})