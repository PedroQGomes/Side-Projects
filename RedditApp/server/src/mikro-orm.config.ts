import { __prod__ } from "./constant";
import { Post } from "./entities/Post";
import { MikroORM } from "@mikro-orm/core";
import path from 'path';


export default {
        migrations:{
            path: path.join(__dirname,'./migrations') , 
            pattern: /^[\w-]+\d+\.[tj]s$/, 
        },
        entities: [Post],
        dbName:'lireddit',
        type: 'postgresql',
        user:'postgres',
        password:'postgres',
        debug:!__prod__
} as Parameters<typeof MikroORM.init>[0];
