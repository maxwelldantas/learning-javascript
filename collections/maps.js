function getAdmins(map) {
    let admins = [];
    for ([key, value] of map) {
        if (value === 'Admin') {
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Fulano', 'Admin');
usuarios.set('Ciclano', 'Admin');
usuarios.set('Rebeelana', 'User');
usuarios.set('Kazaqistana', 'Admin');
usuarios.set('Maliane', 'Admin');
usuarios.set('Satirane', 'User');

console.log(getAdmins(usuarios));
