'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.handler = void 0;
const handler = (event, context, callback) => {
    // Replace this with your desired logic
    const response = {
        statusCode: 200,
        body: JSON.stringify({ data: [] }),
    };
    callback(null, response);
};
exports.handler = handler;
//# sourceMappingURL=getTasks.js.map