/**
 *
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
    // Lógica
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
    posts [index]= ({author,text,createdAt,categories})
    return posts
   }
   /**
    *
    * @param {Object} params
    * @param {Array} params.posts // The array of posts to modify
    * @param {Number} params.index
    * Función que servirá para borrar la información de un post
    */
   const deletePost = params => {
    const { posts=[], index } = params
   delete posts[index]
    // Lógica
    return posts
   }
   /**
    *
    * @param {Object} params
    * @param {Array} params.posts // The array of posts to read
    * @param {Number} params.index
    * Función que servirá para traer la información de solo un post
    */
   const getPost = params => {
    const {posts= [], index} = params
   //return (posts[index]) //funciona pero solo para mandarlo a hacer una vez... no dos... checar
   console.log (posts[index])//funcion ,aunque creo que el return esta de más
    // Lógica
    return posts
   }
   /**
    *
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

   /**
    *
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
   var entradasInvalidas = 0
   posts .filter(function (obj) {
       if ('categories' in obj && obj.categories=== categories) {
           return true;          
       }else{
       entradasInvalidas++
       }
   })
   console.log ('numero de entradas Invalidas = ', entradasInvalidas)
    return posts // Retornar el arreglo con las categorías
   }
   