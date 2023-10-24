'use strict';
const __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) {
 return value instanceof P ? value : new P(function (resolve) {
 resolve(value); 
}); 
}
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
 try {
 step(generator.next(value)); 
} catch (e) {
 reject(e); 
} 
}
        function rejected(value) {
 try {
 step(generator['throw'](value)); 
} catch (e) {
 reject(e); 
} 
}
        function step(result) {
 result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); 
}
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, '__esModule', { value: true });
exports.handler = void 0;
const handler = (event, context, callback) => __awaiter(void 0, void 0, void 0, function* () {
    let _a;
    const id = (_a = event.pathParameters) === null || _a === void 0 ? void 0 : _a.id;
    if (id) {
        try {
            // Simulate an asynchronous operation (e.g., fetching data from a database)
            const data = yield fetchData(id);
            const response = {
                statusCode: 200,
                body: JSON.stringify({ msg: `Task ${id} updated successfully.`, data }),
            };
            callback(null, response);
        } catch (error) {
            const response = {
                statusCode: 500,
                body: JSON.stringify({ error: 'Internal server error' }),
            };
            callback(null, response);
        }
    } else {
        const response = {
            statusCode: 400,
            body: JSON.stringify({ error: 'Invalid or missing "id" parameter' }),
        };
        callback(null, response);
    }
});
exports.handler = handler;
// Simulated asynchronous data fetching function
// eslint-disable-next-line require-yield
const fetchData = (id) => __awaiter(void 0, void 0, void 0, function* () {
    // Simulate an async operation (e.g., fetching data from a database)
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Data for Task ${id}`);
        }, 1000);
    });
});
//# sourceMappingURL=updateTask.js.map