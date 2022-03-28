function (request, response){
    try {

        var requestBody = JSON.parse(config.request.body);
        var consentId = requestBody.consent_id;

        var statusCode = "1000";
        var statusHeader = "Success Header";
        var statusDescription = "Success Description";
        var httpCode = 200;

        switch(consentId){
            case "7":
                httpCode = 201;
            break;
            case "8":
                httpCode = 202;
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