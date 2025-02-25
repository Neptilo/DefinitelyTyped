import snowflake = require('snowflake-sdk');

snowflake.configure({
    insecureConnect: true,
    logLevel: 'ERROR',
    ocspFailOpen: true,
});

const connection = snowflake.createConnection({
    account: '',
    password: '',
    username: '',
});

const connectCallback = (err: snowflake.SnowflakeError | undefined, conn: snowflake.Connection) => {
    if (err) {
        err.code; // $ExpectType ErrorCode | undefined
        err.sqlState; // $ExpectType string | undefined
        err.data; // $ExpectType object | undefined
        err.response; // $ExpectType object | undefined
        err.responseBody; // $ExpectType string | undefined
        err.cause; // $ExpectType Error | undefined
        err.isFatal; // $ExpectType boolean | undefined
    }
    conn.execute({
        sqlText: '',
        fetchAsString: ['Boolean', 'JSON'],
        binds: [1, ''],
        complete(err, stmt, rows) {
            err; // $ExpectType SnowflakeError | undefined
            stmt.cancel((err, stmt) => {
                //
            });

            stmt.getSqlText(); // $ExpectType string
            stmt.getNumRows(); // $ExpectType number
            stmt.getNumUpdatedRows(); // $ExpectType number
            stmt.getRequestId(); // $ExpectType string
            stmt.getStatementId(); // $ExpectType string
            const cols = stmt.getColumns();
            const col1 = cols[0];
            const stream = stmt.streamRows();
            stream.on('data', data => {
                //
            });
        },
    });

    conn.execute({
        sqlText: '',
        fetchAsString: ['NaN'], // $ExpectError
        binds: [
            [1, ''],
            [2, ''],
        ],
        complete(err, stmt, rows) {
            //
        },
    });
};
connection.connect(connectCallback);
connection.connectAsync(connectCallback);

//  Key pair connections

snowflake.createConnection({
    account: '',
    username: '',
    authenticator: '',
    privateKey: '',
    privateKeyPass: '',
    privateKeyPath: '',
});

//  Oauth connections

snowflake.createConnection({
    account: '',
    username: '',
    authenticator: '',
    token: '',
});

// Application

snowflake.createConnection({
    account: '',
    password: '',
    username: '',
    application: '',
});

// Pool
// $ExpectType Pool<Connection>
const pool = snowflake.createPool({
    account: '',
    username: '',
});
