const SUCCESS_CODE = 200;
const INTERNAL_ERROR_CODE = 500;

const generateSuccessResponse = data => (
    {
        code: SUCCESS_CODE,
        message: "OK",
        ...data
    });

const generateErrorResponse = data => (
    {
        code: INTERNAL_ERROR_CODE,
        message: "Internal server error",
        ...data
    });

module.exports = {
    generateSuccessResponse,
    generateErrorResponse
}
