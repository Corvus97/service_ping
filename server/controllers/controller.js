import axios from "../lib/axios";
import collect from "collect.js";
import Master from "../lib/master";

class Controller {

    static doPing(response, type, routes) {

        try {

            Promise.allSettled(routes.map(
                route => axios({
                    method: route.method,
                    url: route.url
                })))
                .then(result => {

                    let reports = collect(result).all();
                    reports = Controller.processResponse(reports)

                    const res = routes.map(
                        (item, i) => ({...item, ...reports[i]})
                    );

                    // console.log(res)
                    return Master.successResponse(response, type, res)

                }).catch(errors => {
                throw errors;
            })


        } catch (error) {
            return Master.exceptionResponse(response, error)
        }
    }

    static processResponse(responses) {
        return responses.map(({status, reason, value}) => {
            if (status === 'fulfilled') {
                return {
                    status: 200,
                    duration: value.duration || reason.duration
                }
            } else {
                if (!reason.toString().includes('500')) {
                    return {
                        status: 200,
                        duration: reason.duration
                    }
                } else
                    return {
                        status: 500,
                        duration: reason.duration
                    }
            }
        })

    }
}

export default Controller
