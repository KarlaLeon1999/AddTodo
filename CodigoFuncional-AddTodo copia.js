let list = {
  general:[],
  lectura:[]
}
//Agrego elemetos al arreglo (ithems)
list.general.push('Inicio','el primero' , 'el segundo' , 'el tercero')
list.lectura.push('cero','uno','dos','tres')
//add category
const addCategory = ({list,key,newValue}) => {
  list[key] = [newValue]
  return list
}
//funcion para add elements con operador ternario por si no existe la categoria (key)
const addTodo = ({ list, key, newValue }) => {
  	list[key] ? list[key].push(newValue) : addCategory({list,key,newValue})
    return list
}
//funcion para edit elements que valida la categoria y el indice
const editTodo = ({list, key, index, newValue}) => {
  if (list[key]) {
    if (list[key][index]) {
      list[key][index]=newValue
    } else { 
        alert ('Hey!, ese indice no existe')
      }
  } else {
  alert ('Hey!, esa categoria no existe')
    }
  return list 
}
//funcion para deleteelements que valida la existencia de la categoria y el indice
const deleteTodo = ({list,key,index}) => {
  if (list[key]) {
    if (list[key][index]) {
      list[key].splice(index,1)
    } else { 
        alert ('Hey!, ese indice no existe')
      }
  } else {
        alert ('Hey!, esa categoria no existe')
    }
    return list 
}
//funcion para deletecategory
const deleteCategory= ({list, key}) => {
    list[key] ? delete list[key] : alert("Hey!, esa categoria no existe")
  return list
}