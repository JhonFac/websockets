import { Sequelize } from "sequelize";

// export const db = new Sequelize(
//         'ddinpub5ps5ks',
//         'srumuhjyotqsqk',
//         '3f28df075fd74623e0a76f2250e61d5068ade49337dccd73dc878cecbf20233b',
//         { 
//                 host:'ec2-18-204-170-75.compute-1.amazonaws.com',
//                 dialect:'postgres',
//                 port: 5432,
//                 // logging: false,
//         }
// );

// export const db = new Sequelize('postgres://aqaqeiiwpfiiyr:233f9f615daae37f9d1f3deb0a4468b29f26ef55992b7fda08153b3c9840e5c0@ec2-52-54-167-8.compute-1.amazonaws.com:5432/d7kogsh5q1o21ipostgres://aqaqeiiwpfiiyr:233f9f615daae37f9d1f3deb0a4468b29f26ef55992b7fda08153b3c9840e5c0@ec2-52-54-167-8.compute-1.amazonaws.com:5432/d7kogsh5q1o21i')

export const db = new Sequelize(
        'test',
        'root',
        '',
        {
                host:'localhost',
                dialect:'mysql',
                // logging: false,
        }
);
