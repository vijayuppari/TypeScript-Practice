enum ResourceType {BOOK,AUTHOR, FILM}



interface Resource<T>{

    uid: number,
    resourceType: ResourceType,
    Role:T
}


const docky1: Resource<object> = {
    uid: 10,
    resourceType: ResourceType.AUTHOR,
    Role:{name:'shaun'}
}

const docky2: Resource<string[]> = {
    uid: 20,
    resourceType: ResourceType.BOOK,
    Role:['Happy', 'Arun']
}

console.log(docky1,docky2);

