function (config) {
    try {
        var apiKey = config.request.headers['apiKey'];
        if(apiKey != "2222"){
            return false;
        }

        var requestBody = JSON.parse(config.request.body);
        var consentId = requestBody.consent_id;

        var isMatch = false;
        switch (consentId) {
            case "7":
            case "8":
            case "9":
                isMatch = true;
            break;
        }

        return isMatch;
    }
    catch (err) {
        logger.error(err.stack);
        return false;
    }
}
