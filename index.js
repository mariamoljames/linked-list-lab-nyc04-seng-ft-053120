function getName(node){
    return node.name
}
function headNode(linkedList,collection){
    return collection[linkedList]
}
function next(node, collection){
    return collection[node.next]
}
function nodeAt(index, linkedList, collection){
    let node=collection[linkedList]
    for(let i=0; i<index; i++){
       node = collection[node.next]
       
    }
     return node
}
function addressAt(address, linkedList, collection){
    let node=collection[linkedList]
    for(let i=0; i<address-1; i++){
       node = collection[node.next]
       
    }
    if(address===0){
        return linkedList
    }else{
        return node.next
    }
}
function indexAt(node, collection, linkedList){
    let currentNode=collection[linkedList]
    for(let i=0; i<Object.values(collection).length; i++){
       if(currentNode==node){
          return i
    }
    currentNode=collection[currentNode.next]
    }
}
function insertNodeAt(index, key, linkedList, collection){
let currentNode=collection[linkedList]
    collection[key].next=currentNode.next
    currentNode.next=key
}
function  deleteNodeAt(index, linkedList, collection){
    let currentNode=collection[linkedList]
    let prevNode=currentNode
    for(let i=0; i<index; i++){   
        currentNode = collection[currentNode.next]
    }
    prevNode.next=currentNode.next
    }
