function (request, response){
    try {

        var queryParam = config.request.query;
        var consentId = queryParam['consent_id'];

        var httpCode = 500;
        var statusCode = "1999";
        var statusHeader = "Error Header";
        var statusDescription = "Error Description";

        switch(consentId){
            case "1":
                httpCode = 409;
                statusCode = "1899";
                statusHeader = "Error Header Conflict";
                statusDescription = "Error Description Conflict";
            break;
            case "3":
                httpCode = 504;
                statusCode = "1899";
                statusHeader = "Error Header Timeout";
                statusDescription = "Error Description Timeout";
            break;
        }

        //body
        var body = response.body;
        body = body.replace(/\${status_code}/g, statusCode);
        body = body.replace(/\${status_header}/g, statusHeader);
        body = body.replace(/\${status_description}/g, statusDescription);

        //Set value back
        response.body = body;
        response.statusCode = httpCode;
        response.headers = {"content-type": "application/json"};

    }
    catch(err) {
        response.body = err.stack;
    }
}