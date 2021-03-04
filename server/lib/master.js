import collect from "collect.js";

class Master {

    static hasDebug() {
        return process.env.APP_DEBUG;
    }

    static successResponse(response, type = 'success', data = null, status = 200) {
        const res = {
            'type': type,
            'data': data
        }
        return response.status(status).json(res);
    }

    static failureResponse(response, message = 'Error Occurred', data = null, status = 200) {
        const res = {
            'status': false,
            'msg': message
        };

        if (data) {
            res['data'] = data;
        }
        return response.status(status).json(res);
    }

    static validationResponse(response, validator) {
        const errors = validator.errors.all();
        const res = {
            'status': false,
            'msg': collect(errors).reduce((carry, item) => {
                return carry + item + " ";
            }, ''),
            'data': errors
        };
        return response.status(422).json(res);
    }

    static exceptionResponse(response, error, module = '') {
        return response.status(500).json({
            'status': false,
            'error': error.message,
            'code': error.code,
            'info': error.info,
            'message': "Error in module: {$module}",
            'details': error.stack
        });
    }

}

export default Master;



