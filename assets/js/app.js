let cl = console.log;
const postsContainer = document.getElementById('postsContainer');

const createPost = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            post = [
                { title: `Angular Signals`, content: `Angular Signals is the main feature developers have been waiting for since the Angular 16 roadmap was released. Although Solid.js inspired this concept, it is a whole new concept for Angular. It allows you to define reactive values and express dependencies between them. In other words, you can efficiently use Angular signals to manage state changes within Angular applications.` },
                { title: `Server-Side Rendering`, content: `The lack of server-side rendering (SSR) support was one of the most significant drawbacks of Angular compared to React. Angular 16 has resolved this issue with some significant improvements for server-side rendering.` },
                {title : `Standalone Project Support` , content : `Angular 14 started supporting standalone components, which are independent of modules. Angular 16 takes this to the next level by supporting standalone project creation.`}
            ]
            let result = Math.random(post) >= .4 ? true : false
            result ? resolve(post) : reject(`Something went wrong!!!`)
        }, 1000);
    })
}

const SkillsTemp = (arr) => {
    let result = '';
    arr.forEach(ele => {
        result +=
            `
            <div class="card my-5 border-0">
                <div class="card-header font-weight-bold bg-info">${ele.title}</div>
                <div class="card-body bg-warning">${ele.content}</div>
            </div>
            `
    });
    postsContainer.innerHTML = result
}

createPost()
    .then((res) => {
        SkillsTemp(res)
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'API is Successfull',
            showConfirmButton: false,
            timer: 2000
        })
        cl(res)
    })
     
    .catch((err) => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err,
            timer: 2000
        })
    })