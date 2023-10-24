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
// eslint-disable-next-line require-yield
const handler = (event, context, callback) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = JSON.parse(event.body || ''); // Ensure to handle the case where the body might be empty
        const response = {
            statusCode: 201,
            body: JSON.stringify({
                msg: 'Task was created successfully..',
                data: data,
            }),
        };
        callback(null, response); // Indicate no error
    } catch (error) {
        // Handle and log any errors
        console.error('Error:', error);
        callback(new Error('An error occurred')); // Indicate an error
    }
});
exports.handler = handler;
//# sourceMappingURL=createTask.js.map