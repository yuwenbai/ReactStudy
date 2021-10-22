// 默认数据库为myDB
// 默认表为global
// 记录的id不传，默认为global

let db = null;

const init = (tableName = 'global', dbName = 'myDB') => {
    // 使用 IndexedDB 的第一步是打开数据库
    const request = window.indexedDB.open(dbName);

    return new Promise((resolve, reject) => {
        request.onerror = function (event) { // 错误处理
            console.log(' 打开数据库报错');
            reject();
        };
        request.onsuccess = function (event) { // 成功处理
            db = event.target.result;
            createTable(tableName);
            console.log('打开数据库成功');
            resolve(db);
        };

        // 通过 监听[数据库升级事件]拿到 数据库实例
        request.onupgradeneeded = function (event) {
            db = event.target.result;
            createTable(tableName);
            console.log('onupgradeneeded');
            resolve(db);
        }
    })
}

// 创建表
const createTable = (tableName = 'global', keyPath = 'id') => {
    // 先判断一下，这张表格是否存在，如果不存在再新建
    if (!db.objectStoreNames.contains(tableName)) { // 创建一个人的表，id为主键
        db.createObjectStore(tableName, { keyPath });
    }
}

// 增
const save = (data, tableName = 'global') => {
    !data.id && (data.id = 'global')
    const request = db.transaction([tableName], 'readwrite').objectStore(tableName).add(data);
    return new Promise((resolve, reject) => {
        request.onsuccess = function (event) {
            console.log('数据写入成功');
            resolve(event);
        };
        request.onerror = function (event) {
            console.log('数据写入失败');
            reject(event);
        }
    })
}


// 删
const remove = (id = 'global', tableName = 'global') => {
    const request = db.transaction([tableName], 'readwrite')
        .objectStore(tableName)
        .delete(id);

    return new Promise((resolve, reject) => {
        request.onsuccess = function (event) {
            console.log('数据删除成功');
            resolve(true);
        };
        request.onerror = function (event) {
            console.log('数据删除失败');
            reject(event)
        };

    })

}

// 改
const update = (data, tableName = 'global') => {
    !data.id && (data.id = 'global')
    const request = db.transaction([tableName], 'readwrite')
        .objectStore(tableName)
        .put(data);

    return new Promise((resolve, reject) => {
        request.onsuccess = function (event) {
            console.log('数据更新成功');
            resolve(event);
        };
        request.onerror = function (event) {
            console.log('数据更新失败');
            reject(event);
        }
    })
}


// 新增或改（没有则插入，有则更新--必须包含主键，没有的话id默认为global）
const saveOrUpdate = async (data, tableName = 'global') => {
    !data.id && (data.id = 'global')
    const res = await read(data.id);
    if (res) {
        console.log('存在数据，即将更新')
        return update(data, tableName)
    } else {
        console.log('不存在数据，即将新增')
        return save(data, tableName)
    }
}


// 查
const read = (id = 'global', tableName = 'global') => {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction([tableName]);
        var objectStore = transaction.objectStore(tableName);
        var request = objectStore.get(id);
        request.onerror = function (event) {
            console.log('事务失败');
            reject(event)
        };
        request.onsuccess = function (event) {
            if (request.result) {
                resolve(request.result)
            } else {
                console.log('未获得数据记录');
                resolve(null)
            }
        };
    })
}

// 查询所有(创建一个游标，类似JAVA里面的容器遍历的iterator()就是一个性能，估计发明IndexDB的作者可能的认真学过JAVA，这里纯属虚构，忽略，忽略...... )
const readAll = (tableName = 'global') => {
    return new Promise((resolve, reject) => {
        const objectStore = db.transaction(tableName).objectStore(tableName);
        const result = [];
        objectStore.openCursor().onsuccess = function (event) {
            const cursor = event.target.result;
            if (cursor) {
                const otherIf = {
                    db: cursor.source.transaction.db.name,
                    table: cursor.source.name
                }
                result.push({ value: cursor.value, otherIf });
                cursor.continue();
            } else {
                resolve(result)
            }
        };
    })
}


const indexdbHelper = {
    db, //数据库对象
    init, // 初始化数据库连接
    createTable, // 创建表（一般无需使用）
    save, // 插入记录（参数不传，默认为myDb库下global表中的 id为global的记录）
    update, // 更新记录（参数不传，默认为myDb库下global表中的 id为global的记录）
    saveOrUpdate,// 新增或更新
    read, // 查询（参数不传，默认为myDb库下global表中的 id为global的记录）
    readAll,// 查询指定表下的所有
    remove // 删除记录（参数不传，默认为myDb库下global表中的 id为global的记录）
}
window.indexdbHelper = indexdbHelper;
export default indexdbHelper;