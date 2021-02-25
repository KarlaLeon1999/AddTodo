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
    posts.push([author, text, createdAt, categories]);
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
    posts [index]= ([author,text,createdAt,categories])
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
   console.log(posts[index]) //funciona pero me manda un error despues
    // Lógica
    return post
   }
   /**
    *
    * @param {Object} params
    * @param {Array} params.posts Array of posts
    * @param {String} params.key La key es un string que dirá cómo se
   puede ordernar. Ej key: 'author'. key: 'createdAt'
    * Función que servirá para ordernar todos los posts
    */
   const sortPosts = params => {
    const {posts = [], key} = params
   
    // Lógica
   
    return posts // Retornar el arreglo ordenado
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
   
    // Lógica
   
    return posts // Retornar el arreglo con las categorías
   }
   