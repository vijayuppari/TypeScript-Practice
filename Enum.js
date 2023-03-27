var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
})(ResourceType || (ResourceType = {}));
var docky1 = {
    uid: 10,
    resourceType: ResourceType.AUTHOR,
    Role: { name: 'shaun' }
};
var docky2 = {
    uid: 20,
    resourceType: ResourceType.BOOK,
    Role: ['Happy', 'Arun']
};
console.log(docky1, docky2);
