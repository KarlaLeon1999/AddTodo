let posts = []
let post1 = {
 author: 'Nombre',
 text: 'El texto del post. Puede ser muy largo o muy corto.',
 createdAt:  new Date(2021, 0, 31),
 categories: ['libros', 'correo'],
}
let post2={
 author: 'Karla',
 text: 'hola',
 createdAt:  new Date(),
 categories: ['general', 'música'],
}
/**
 * @param {Object} params
 * @param {Array} params.posts // The array of posts to modify
 * @param {String} params.author
 * @param {String} params.text
 * @param {Date} params.createdAt
 * @param {String} params.categories
 * Función que servirá para crear un nuevo post
 */
const addPost = params => {
    const { posts=[], author, text, createdAt, categories} = params
    posts.push({author, text, createdAt, categories});
        return posts
   }

   /**
    * @param {Object} params
    * @param {Array} params.posts // The array of posts to modify
    * @param {String} params.author
    * @param {String} params.text
    * @param {Date} params.createdAt
    * @param {Array} params.categories Array of Strings
    * @param {Number} params.index
    * Función que servirá para editar la información de un post
    */
const editPost = params => {
    const { posts=[], author, text, createdAt, categories, index} = params
    posts[index] ? posts [index]= ({author,text,createdAt,categories}) : alert ('Hey!, ese indice no existe')
        return posts
    }
    //para ejecutar en consola chrome : posts = editPost ({posts,...post1,text: 'Ricardo',index: 0})
   /**
    * @param {Object} params
    * @param {Array} params.posts // The array of posts to modify
    * @param {Number} params.index
    * Función que servirá para borrar la información de un post
    */
const deletePost = params => {
    const { posts=[], index } = params
    posts[index] ? delete posts[index] : alert ('Error,No Existe')
        return posts
    }
    //para ejecutar en consola chrome :posts = deletePost ({posts,...post1,index:0})
   /**
    * @param {Object} params
    * @param {Array} params.posts // The array of posts to read
    * @param {Number} params.index
    * Función que servirá para traer la información de solo un post
    */
const getPost = params => {
    const {posts= [], index} = params
    posts[index] ? console.log (posts[index]) : alert ('El valor del index no existe')
        return posts
    }  
    //para ejecutar en consola chrome : posts = getPost ({posts,...post1,index:0})
   /**
    * @param {Object} params
    * @param {Array} params.posts Array of posts
    * @param {String} params.key La key es un string que dirá cómo se
   puede ordernar. Ej key: 'author'. key: 'createdAt'
    * Función que servirá para ordernar todos los posts
    */
const sortPostsauthor = params => {
    const {posts = [], key} = params
    posts.sort(function (a,b,key = 'author') {
        if (a[key] > b[key]) {
           return 1 
        }
        if (a[key] < b[key]) {
            return -1
        }
            return 0
    })
        return posts
    }
const sortPostscreatedAt = params => {
    const {posts = [], key} = params
    posts.sort(function (a,b,key = 'createdAt') {
        if (a[key] > b[key]) {
            return 1 
        }
        if (a[key] < b[key]) {
            return -1
        }
            return 0
    })
        return posts
    }
        // para ejecutar en consola chrome : posts = sortPostsauthor ({posts,key:'author'})
   /**
    * @param {Object} params
    * @param {Array} params.posts Array of posts
    * @param {Array} params.categories Array of Strings. Arreglo que
   dirá qué categorías se puede buscar. Ej. categories: ['general'].
   categories: ['general', 'música', 'libros']
   Casos Prueba
    * Función que servirá para traer todos los posts que estén dentro
   de esas categorías.
    */
const filterPosts = params => {
    const {posts = [], categories = []} = params
    return posts.filter(post => {
        for (let index = 0, lt = categories.length; index < lt; index++) {
            const category = categories[index]
            if (post.categories.includes(category)) {
                return post
                }
            }
        })
    }
     //para ejecutar en consola chrome: posts = filteredPosts ({posts,categories:['libros','correo']})